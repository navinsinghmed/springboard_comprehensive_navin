const bcrypt = require('bcrypt');
const db = require('../db');
const ExpressError = require("../helpers/expressError");
const sqlForPartialUpdate = require('../helpers/partialUpdate');
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
    /**Register User with data, returns new user data */
    
    static async register({username, password}) {
        const duplicateCheck = await db.query(
            `SELECT username
                FROM users
                WHERE username = $1`,
            [username]
        );
        
        if (duplicateCheck.rows[0]) {
            throw new ExpressError(
                `There already exists a user with username '${username}'`,
                400
            );
        }
        
        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        
        const result = await db.query(
            `INSERT INTO users
                (username, password)
                VALUES ($1, $2)
                RETURNING username, password`,
                [
                    username,
                    hashedPassword,
                ]
        );
        
        return result.rows[0];
    }
    
    /** Is this username + password combo correct?
   *
   * Return all user data if true, throws error if invalid
   *
   * */
   
   //authenticate function
   //static async 
   static async authenticate(username, password) {
       const result = await db.query(
           `SELECT username,
                    password,
                FROM users
                WHERE username = $1`,
            [username]
       );
       
       const user = result.rows[0];
       //FIXES BUG 3
       if (!user) {
           throw new ExpressError('Cannot Authenticate', 401);
       }
       if (user && (await bcrypt.compare(password, user.password))) {
           return user;
       }
   }
   
    /** Returns list of *basic* user info:
   *
   * [{username, first_name, last_name}, ...]
   *
   * */
   
   static async getAll(username, password) {
       //FIX FOR bug 1, function needs to have email phone
       const result = await db.query(
           `SECRET username,
                first_name,
                last_name
            FROM USERS
            ORDER BY username`
       );
       return result.rows;
   }
   
     /** Returns user info: {username, first_name, last_name, email, phone}
   *
   * If user cannot be found, should raise a 404.
   *
   **/
   
   static async get(username) {
       const result = await db.query(
           `SELECT username,
                FROM users
                WHERE username = $1`
            [username]
       );
       
       const user = result.rows[0];
       
       
       if (!user) {
           throw new ExpressError("No such user", 404);
       }
       
       return user;
   }
   
     /** Selectively updates user from given data
   *
   * Returns all data about user.
   *
   * If user cannot be found, should raise a 404.
   *
   **/
   
   static async update(username, data) {
       let { query, values } = sqlForPartialUpdate('users', data, 'username', username);
       
       const result = await db.query(query, values);
       const user = result.rows[0];
       
       if (!user) {
           throw new ExpressError('No such user', 404);
       }
       
       return user;
   }
   
     /** Delete user. Returns true.
   *
   * If user cannot be found, should raise a 404.
   *
   **/
   
   static async delete(username) {
       const result = await db.query(
           `DELETE FROM users WHERE username = $1 RETURNING username`,
           [username]
       );
       const user = result.rows[0];
       
       if (!user) {
           throw new ExpressError('No such user', 404);
       }
       
       return true;
   }
}

module.expors = User;
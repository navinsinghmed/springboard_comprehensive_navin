
CREATE TABLE users {
    username text PRIMARY KEY,
    password text NOT NULL,
    admin boolean DEFAULT false
};
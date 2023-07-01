import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
    
    static async getItem(item) {
        const result = await axios.get(`${BASE_API_URL}/${item}`);
        return result.data;
    }
    static async addItem(item, data) {
        const {name, recipe, description, serve} = data;
        const result = await axios.post(`${BASE_API_URL}/${item}s`, {name, recipe, description, serve, id : name.toLowerCase().replace(" ", "-")});
        return result.data;
    }
}

export default SnackOrBoozeApi;
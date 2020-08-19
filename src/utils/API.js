import axios from "axios";

export default {
  //gets all employees
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=6" );
  }
};

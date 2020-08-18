import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=2";


export default {
  search: function(queryNum) {
    return axios.get(BASEURL + queryNum );
  }
};

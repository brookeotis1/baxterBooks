import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&apikey=AIzaSyBevsjvWWUvcvHL1KtFYtXrkOCrkgRXz3s";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

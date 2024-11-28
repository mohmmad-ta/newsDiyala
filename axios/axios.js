import axios from "axios";

axios.defaults.baseURL = "http://145.223.117.211/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");
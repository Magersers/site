import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';

export default axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "Content-Type": "application/json",
    },
});

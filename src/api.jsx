import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAixq9jHpgS70YI1miSkGE9XjW6O_rxxgE",
  },
});
export default request;

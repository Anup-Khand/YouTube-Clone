import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAL5RYkhr3g3eYK15XHhMnO9ozU4D2JuEY",
  },
});
export default request;

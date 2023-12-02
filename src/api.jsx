import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDi8_CQznIauhfUHuEzRu5-lBYnhWKPNOs",
  },
});
export default request;
// AIzaSyDNrnfLoYCWJ5_cgvuiGIQTJkhToSAp8GM
//AIzaSyA1JQVhdqb1pB_fVyxiemoaPTHytZDIZu8
//AIzaSyDi8_CQznIauhfUHuEzRu5-lBYnhWKPNOs
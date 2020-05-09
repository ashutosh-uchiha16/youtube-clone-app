import axios from "axios";

const getReq = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
});
export default getReq;

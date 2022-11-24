import axios from "axios";

const getApiRoadTo =()=>{
  return axios.get("/roadtos")
}

export {
  getApiRoadTo,
};

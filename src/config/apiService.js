import axios from "../axios";
const getApiSkills = () => {
    return axios.get( '/skills' )
    
}
const postApiSkills = ( data ) => {
    return axios.post("skills", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
}

const deleteApiSkills = ( data ) => {
    console.log(data)
  return axios.delete("/skills", data);
};

const getApiRoadTo = () => {
  return axios.get("/roadtos");
};
export {
  getApiSkills,
  postApiSkills,
  deleteApiSkills,
  getApiRoadTo,
};

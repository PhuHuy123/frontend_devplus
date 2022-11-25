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

const getApiSkillById = (id) => {
  return axios.get(`/skills?_id=${id}`);
};
//Concerns
const getApiConcerns = () => {
  return axios.get("/concerns");
}
const postApiConcerns = (data) => {
  return axios.post("/concerns", data);
};

//Road To be DevPlus
const getApiRoadTo = () => {
  return axios.get("/roadtos");
};

const getApiSlideImage = () => {
  return axios.get( '/menubars' )
  
}
const postApiSlideImage = ( data ) => {
  return axios.post("/menubars", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

const deleteApiSlideImage = ( data ) => {
return axios.delete("/menubars", data);
};
const postApiRoadTo = (data) => {
  return axios.post("/roadtos", data);
};
//Road To be DevPlus
const getApiOurMain = () => {
  return axios.get("/ourmains");
};
const postApiOurMain = (data) => {
  return axios.post("/ourmains", data);
};
//Saying
const getApiAlumnies = () => {
  return axios.get("/alumnies");
};
const postApiAlumnies = (data) => {
  return axios.post("/alumnies", data);
};

export {
  getApiSkills,
  postApiSkills,
  deleteApiSkills,
  getApiRoadTo,

  getApiSlideImage,
  postApiSlideImage,
  deleteApiSlideImage,
  getApiSkillById,
  getApiConcerns,
  postApiConcerns,
  postApiRoadTo,
  getApiOurMain,
  postApiOurMain,
  getApiAlumnies,
  postApiAlumnies,
};

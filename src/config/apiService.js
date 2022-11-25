import axios from "../axios";
const getApiSkills = () => {
    return axios.get( '/skills' )
    
}
const postApiSkills = ( data ) => {
    return axios.post("skills", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
}
const deleteApiSkills = ( id ) => {
  return axios.delete(`/skills/${id}`);
};
const putApiSkills = (data, id) => {
  return axios.post("skills/" + id, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const getApiSkillById = (id) => {
  return axios.get(`/skills/${id}`);
};
//Concerns
const getApiConcerns = () => {
  return axios.get("/concerns");
}
const postApiConcerns = (data) => {
  return axios.post("/concerns", data);
};
const deleteApiConcerns = (data) => {
  return axios.delete(`/concerns/${data}`);
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
return axios.delete(`/menubars/${data}`);
};
const postApiRoadTo = (data) => {
  return axios.post("/roadtos", data);
};
const deleteApiRoadTo = (data) => {
  return axios.delete(`/roadtos/${data}`);
};
//Road To be DevPlus
const getApiOurMain = () => {
  return axios.get("/ourmains");
};
const postApiOurMain = (data) => {
  return axios.post("/ourmains", data);
};
const deleteApiOurMain = (data) => {
  return axios.delete(`/ourmains/${data}`);
};
//Saying
const getApiAlumnies = () => {
  return axios.get("/alumnies");
};
const postApiAlumnies = (data) => {
  return axios.post("/alumnies", data);
};
const deleteApiAlumnies = (data) => {
  return axios.delete(`alumnies/${data}`);
};

export {
  getApiSkills,
  postApiSkills,
  deleteApiSkills,
  putApiSkills,
  getApiRoadTo,
  getApiSlideImage,
  postApiSlideImage,
  deleteApiSlideImage,
  getApiSkillById,
  getApiConcerns,
  postApiConcerns,
  postApiRoadTo,
  deleteApiRoadTo,
  getApiOurMain,
  postApiOurMain,
  getApiAlumnies,
  postApiAlumnies,
  deleteApiConcerns,
  deleteApiAlumnies,
  deleteApiOurMain,
};

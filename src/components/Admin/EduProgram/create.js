import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { postApiSkills } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [loader, setLoader] = useState( false )
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      description: "",
      image: []
    },
  });
  
  const onSubmit = async ( data ) => {
    setLoader(true)
    var bodyFormData = new FormData();
    bodyFormData.append( "name", data.name );
    bodyFormData.append("description", data.description);
    bodyFormData.append("images", data.image[0]);
    const response = await postApiSkills(bodyFormData).catch((err) => {
      console.log("ERROR", err);
    } );
    if ( response ) {
      toast.success("Created Successfully!");
      navigate("/admin/edu-program");
      setLoader(false);
    } 
    };
  
  return (
    <>
      <div className="content">
        <div className="card">
          <div className="card-header">
            Create
            <Link to="/admin/edu-program" className="rightBtn">
              <button type="button" className="btn btn-success">
                <i className="fa-solid fa-plus"></i> Back
              </button>
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your input
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", {
                    required: "Please enter your first name.",
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  description
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("description", {
                    required: "Please enter your first name.",
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Your Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  {...register("image")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      { loader && (
        <div className="d-flex justify-content-center loader">
          <div className="spinner-border loader-icon" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) }
    </>
  );
};

export default Create;

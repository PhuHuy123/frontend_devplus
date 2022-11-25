import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postApiAlumnies } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

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
      image: []
    },
  });
  
  const onSubmit = async ( data ) => {
    setLoader(true)
    var bodyFormData = new FormData();
    bodyFormData.append( "name", data.name );
    bodyFormData.append("position", data.position);
    bodyFormData.append( "images", data.image[0] );
    bodyFormData.append("saying", data.saying);
    const response = await postApiAlumnies(bodyFormData).catch((err) => {
      console.log("ERROR", err);
    });
    if ( response ) {
      toast.success("Created Successfully!");
      navigate("/admin/alumni-saying");
      setLoader(false);
    } 
    };
  
  return (
    <>
      <div className="content">
        <div className="card">
          <div className="card-header">
            Create Alumni Saying
            <Link to="/admin/alumni-saying" className="rightBtn">
              <button type="button" className="btn btn-success">
              <i className="fa-solid fa-arrow-right"></i> Back
              </button>
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
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
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("position", {
                    required: "Please enter your first name.",
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  {...register("image")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Saying
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("saying", {
                    required: "Please enter your first name.",
                  })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
        { loader && <Loader />}
      </div>
    </>
  );
};

export default Create;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postApiOurMain } from "@app/config/apiService";
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
    bodyFormData.append("images", data.image[0]);
    const response = await postApiOurMain(bodyFormData).catch((err) => {
      console.log("ERROR", err);
    });
    if ( response ) {
      toast.success("Created Successfully!");
      navigate("/admin/our-main-campus");
      setLoader(false);
    } 
    };
  
  return (
    <>
      <div className="content">
        <div className="card">
          <div className="card-header">
            Create Our Main Campus
            <Link to="/admin/our-main-campus" className="rightBtn">
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
                  Title
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
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Image
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
      { loader && <Loader />}
      </div>
    </>
  );
};

export default Create;

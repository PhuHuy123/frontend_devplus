import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postApiRoadTo } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [loader, setLoader] = useState(false);
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
    },
  });

  const onSubmit = async (data) => {
    setLoader(true);
    const response = await postApiRoadTo({
      name: data.name,
      description: data.description,
    }).catch((err) => {
      console.log("ERROR", err);
    });
    if (response) {
      toast.success("Created Successfully!");
      navigate("/admin/to-be-a-devplus");
      setLoader(false);
    }
  };

  return (
    <>
      <div className="content">
        <div className="card">
          <div className="card-header">
            Create Road to be a DevPlus
            <Link to="/admin/to-be-a-devplus" className="rightBtn">
              <button type="button" className="btn btn-success">
                <i className="fa-solid fa-plus"></i> Back
              </button>
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">Write content here</h5>
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
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      {loader && (
        <div className="d-flex justify-content-center loader">
          <div className="spinner-border loader-icon" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getApiConcernById, putApiConcernById } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
const Edit = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getApiConcernById(id).catch((err) => {
      console.log("ERROR", err);
    });
    setValue("title", res.data.title);
    setValue("description", res.data.description);
    setLoader(false);
  };
  const onSubmit = async (data) => {
    setLoader(true);

    const response = await putApiConcernById(
      {
        title: data.title,
        description: data.description,
      },
      id
    ).catch((err) => {
      console.log("ERROR", err);
    });
    if (response) {
      toast.success("Updated Successfully!");
      navigate("/admin/common-concerns");
      setLoader(false);
    }
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Edit
          <Link to="/admin/common-concerns" className="rightBtn">
            <button type="button" className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Back
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Edit Common Concerns</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                {...register("title", {
                  required: "Please enter your first name.",
                })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                {...register("description", {
                  required: "Please enter your first name.",
                })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;

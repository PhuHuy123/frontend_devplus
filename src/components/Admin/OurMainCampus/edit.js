import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getApiOurMainById, putApiOurMain } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
const Edit = ( props ) => {
const [loader, setLoader] = useState(true);
const [img, setImg] = useState();
const { id } = useParams();
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
    const res = await getApiOurMainById(id).catch((err) => {
      console.log("ERROR", err);
    });
    setValue("name", res.data.name);
    setValue("image", res.data.image);
    setLoader(false);
    setImg(res.data.image);
  };

  const onSubmit = async (data) => {
    var formData = new FormData();

    setLoader(true);
    formData.append("name", data.name);
    formData.append("images", data.image[0]);
    const response = await putApiOurMain(formData, id).catch((err) => {
      console.log("ERROR", err);
    } );
    if (response) {
      toast.success("Updated Successfully!");
      navigate("/admin/our-main-campus");
      setLoader(false);
    }
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Edit
          <Link to="/admin/our-main-campus" className="rightBtn">
            <button type="button" className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Back
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Edit Education Program</h5>
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
                Your Image
              </label>
              <input
                type="file"
                className="form-control"
                {...register("image", {
                  required: "Please enter your first name.",
                })}
              />
            </div>
            <div className="mb-3 show-image">
              <img width="300px" src={img} alt="no image" />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Edit;

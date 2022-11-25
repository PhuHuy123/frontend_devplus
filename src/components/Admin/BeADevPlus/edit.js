import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getApiRoadToById, putApiRoadToById } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
// import { getValue } from "@testing-library/user-event/dist/utils";
const Edit = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState( true );
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
    const res = await getApiRoadToById(id).catch((err) => {
      console.log("ERROR", err);
    } );
    setValue( "name", res.data.name );
    setLoader(false);
  };
   const onSubmit = async (data) => {
     setLoader(true);
     
     const response = await putApiRoadToById( {
       name: data.name
     }, id).catch((err) => {
       console.log( "ERROR", err );
     } );
     if (response) {
       toast.success("Updated Successfully!");
       navigate("/admin/to-be-a-devplus");
       setLoader(false);
     }
   };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Edit
          <Link to="/admin/to-be-a-devplus" className="rightBtn">
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

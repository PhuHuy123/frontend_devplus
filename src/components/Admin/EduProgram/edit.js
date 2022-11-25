import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
const Edit = ( props ) => {
const { id}  = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
    },
  } );
  useEffect(() => {
     console.log("1",id);
  }, []);
 ;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Edit
          <Link to="/admin/edu-program" className="rightBtn">
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
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Content
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
                {...register("file", {
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Slider
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your slider title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Image
                  </label>
                  <input type="file" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

import { Link } from "react-router-dom";
const Edit = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Edit
          <Link to="/our-main-campus" className="rightBtn">
            <button type="button" className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Back
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Edit your our main campus</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your input
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Your Image
              </label>
              <input type="file" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Edit
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
      ></div>
    </div>
  );
};

export default Edit;

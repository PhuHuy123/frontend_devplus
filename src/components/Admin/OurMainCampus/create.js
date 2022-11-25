import { Link } from "react-router-dom";
const Create = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          Create
          <Link to="/our-main-campus" className="rightBtn">
            <button type="button" className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Back
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Create Our Maon Campus</h5>
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
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;

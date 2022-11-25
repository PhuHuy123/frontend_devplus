import { Link } from "react-router-dom";
import { getApiSkills, deleteApiSkills } from "@app/config/apiService";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Show = () => {
  const [data, setData] = useState( [] ); 
  const [del, setDel] = useState( null );
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await deleteApiSkills( del).catch((err) => {
      console.log("ERROR", err);
    } );
    if ( response ) {
      toast.success( "Deleted Successfully!" );
      window.location.reload();
    }

  }
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await getApiSkills().catch((err) => {
        console.log( "ERROR", err );
      } );
      setData(response.data);
    };
    
  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          List Education Program
          <Link to="create" className="rightBtn">
            <button type="button" className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Add New
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">All of your slider</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="check">
                  <input type="checkbox" />
                </th>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Image</th>
                <th style={{ width: "15%" }} scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.image} alt="no image" />
                  </td>
                  <td>
                    <Link to={`edit/${item._id}`}>
                      <button type="button" className="btn btn-primary">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setDel(item._id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure ?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Delete this Item ?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;

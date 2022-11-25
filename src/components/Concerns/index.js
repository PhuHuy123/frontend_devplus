import "./Concerns.scss";
import { useEffect, useState } from "react";
import {getApiConcerns} from '@app/config/apiService';
const Concerns = () => {
  const [video, setVideo]= useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    arrApiConcerns();
  }, [])

  const arrApiConcerns = async () => {
    let res = await getApiConcerns();
    if (res && res.data && res.data.length > 0) {
      setData(res.data)
    }
  }
  const handleOpenVideo =()=>{
    setVideo(!video)
  }
  return (
    <div className="common-concerns container">
      <div className="row px-0">
        <div className="common-concerns-left col-xl-6 col-l-12 col-md-12">
          <div className="common-concerns-title">
            <h2>Some common concers</h2>
          </div>

          <div className="common-concerns-menu">
            <div className="accordion" id="accordionExample">
              {data.map((item, index)=>(
                <div className="accordion-item" key={item._id}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index+1}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index+1}`}
                >
                  <i className="fa-regular fa-bell"></i>
                  {item.title}
                </button>
                <div
                  id={`collapse${index+1}`}
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {item.description}
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="common-concerns-right col-xl-6 px-0">
          <div className="video">
            <img
              className="common-concerns-img"
              src="https://devplus.edu.vn/assets/images/devplus/video_03.png"
              alt="common-concerns-img"
            />
            <div onClick={handleOpenVideo} className="video-play btn"data-bs-toggle="modal"
              data-bs-target="#exampleModalToggle">
              <div className="example-play"></div>
              <i className="fa-solid fa-play"></i>
            </div>
            <div
              className="modal "
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                     onClick={handleOpenVideo}
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                      {video && 
                        <iframe
                        className="video_iframe"
                          src="https://www.youtube.com/embed/mUjhiT0zSKI"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Concerns;

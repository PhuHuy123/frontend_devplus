import "./Concerns.scss";
import { useEffect, useState } from "react";
const Concerns = () => {
  const [video, setVideo]= useState(false)
  const handleOpenVideo =()=>{
    setVideo(!video)
  }
  console.log(video)
  return (
    <div className="common-concerns container">
      <div className="row px-0">
        <div className="common-concerns-left col-xl-6 col-l-12 col-md-12">
          <div className="common-concerns-title">
            <h2>Some common concers</h2>
          </div>

          <div className="common-concerns-menu">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i className="fa-regular fa-bell"></i>
                  Do I need to be fulltime during the campus?
                </button>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, it’s mandatory. Fulltime as well as full commitment in
                    order to obtain the best achievement.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="fa-regular fa-bell"></i>
                    Does Devplus offer free courses?
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, it’s kind of a scholarship. But, you need to pass our
                    challenge through test and interview round.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="fa-regular fa-bell"></i>
                    Which course will be suitable with me?
                  </button>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The first plus (+) course is designed to students who would
                    like to join the OJT (on-job-train) programme. Next level,
                    the second plus (++) course will suitable for one who got
                    the first plus or fresher, who would like to be trained in
                    order to ready to onboard the real projects. The third plus
                    (+++) course is intended to the alumni of the second plus
                    degree or junior who would like to reach a specific
                    tech-stack: AI, Blockchain, Devops..
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <i className="fa-regular fa-bell"></i>
                    <div className="abc"></div>
                    Does Devplus guarantee a job after graduating?
                  </button>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, it’s could be a good job. Once you get the second plus
                    (++) you will ready to onboard the projects of our partners,
                    the most highly recommended places to work.
                  </div>
                </div>
              </div>
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

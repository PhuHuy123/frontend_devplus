import './Admission.scss'
const Admission = () => {
  return (
    <div className="admission">
      <div className="col-md-6 p-0 admission_img">
        <img src="https://devplus.edu.vn/assets/images/devplus/Admission_for_2021.png" alt="one" />
      </div>
      <div
        className="col-md-6 admission_text"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="admission_title">
          <h4>Admission for 2021</h4>
        </div>
        <div className="admission_content">
          <p>
            Disclaimer: This position is expected to start around Feb 2022 and
            continue through the entire Summer term. We ask for a minimum of 12
            weeks, full-time, for most internships. Please consider before
            submitting an application.
            <br />
            Devplus aims to provide students the chance to work with our clients
            and awesome mentors to level up your programing skillset in the
            RIGHT path. With your education and experience, you will be able to
            take on real-world challenges from day one.
          </p>
        </div>
        <div className="admission_button">
          <a href="https://stunited.typeform.com/registration?typeform-source=devplus.edu.vn">
            <button>APPLY NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Admission;

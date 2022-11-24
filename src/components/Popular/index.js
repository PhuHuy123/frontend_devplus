const Popular = () => {

  return (
    <div className="popular_course">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="title">
            <h2>Our main campus</h2>
          </div>
        </div>
      </div>
      <div className="row popular_box">
        <div className="col-md-4 box_mainitem">
          <div className="box_item" data-aos="fade-up" data-aos-duration="3000">
            <div className="box_img">
              <img src="./images/Campus/plus1.webp" alt="one" />
            </div>
            <div className="box_title">
              <h5>One plus (+) Programing foundation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 box_mainitem">
          <div className="box_item" data-aos="fade-up" data-aos-duration="3000">
            <div className="box_img">
              <img src="./images/Campus/plus2.webp" alt="one" />
            </div>
            <div className="box_title">
              <h5>Two plus (++) Skill up to to get ready</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 box_mainitem">
          <div className="box_item" data-aos="fade-up" data-aos-duration="3000">
            <div className="box_img">
              <img src="./images/Campus/plus3.webp" alt="one" />
            </div>
            <div className="box_title">
              <h5>Three plus (+++) How to become a senior</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Popular;

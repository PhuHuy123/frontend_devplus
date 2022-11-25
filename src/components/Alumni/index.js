import "./Alumni.scss";
import { useState, useEffect } from "react";
import { getApiAlumnies } from "@app/config/apiService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "@app/assets/images/icons/quote2.webp";

const Alumni = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    arrApiAlumnies();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const arrApiAlumnies = async () => {
    let res = await getApiAlumnies();
    if (res && res.data && res.data.length > 0) {
      setData(res.data);
    }
  };
  return (
    <>
      <div className="alumni container">
        <div className="alumni-title mb-3">
          <h2>What alumni saying</h2>
        </div>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="alumni-saying-detail" key={item._id}>
              <div className="alumni-quote">
                <img alt="one" className="alumni-quote-icon" src={icon} />
                <div className="alumni-quote-description">{item.saying}</div>
                <div className="alumni-quote-info">
                  <img className="image-alumni" alt="one" src={item.image} />
                  <div className="alumni-name">{item.name}</div>
                  <div className="alumni-position">{item.position}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Alumni;

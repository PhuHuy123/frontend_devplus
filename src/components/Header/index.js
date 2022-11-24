import "./Header.scss";
// import Modal from "../Modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getImageNavbar} from '@app/config/apiService';    
import close from "@app/assets/images/close.webp"

const Header = () => {
  const [image, setImage] = useState([])
  const [numberSlide, setNumberSlide] = useState(0)
  useEffect(() => {
    arrayApiImage();
  }, [])

  const arrayApiImage = async () => {
    let res = await getImageNavbar();
    if (res && res.data && res.data.length > 0) {
      setImage(res.data)
    }
  }
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <input type="checkbox" className="click_menu" hidden id="click-menu" />
          <div className="row y-middle">
            <div className="col-lg-2 logo">
              <img alt="one" src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png" />
            </div>
            <div className="col-lg-9 text-end m-menu">
              <nav className="rs-menu-area rs-menu">
                <ul className="ul-main nav-menu">
                  <li>
                    <a href="#" className="li-home" aria-current="page">
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-current="page">
                      {" "}
                      About devplus{" "}
                    </a>
                  </li>
                  <input
                    type="checkbox"
                    hidden
                    className="click_angle"
                    id="click-angle"
                  />
                  <li className="our-programme">
                    <label className="rs-menu-parent" htmlFor="click-angle">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                      <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </label>
                    <ul className="menu-our sub-menu">
                      <li>
                        <a href="./oneplus.html">One plus campus</a>
                      </li>
                      <li>
                        <a href="./twoplus.html">Two plus campus</a>
                      </li>
                      <li>
                        <a href="#">Three plus campus</a>
                      </li>
                      <label className="sub-menu-close" htmlFor="click-angle">
                        <i className="fa fa-times" aria-hidden="true"></i>Close
                      </label>
                    </ul>
                    <a href="#" aria-current="page">
                      {" "}
                      Our programme
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-current="page">
                      {" "}
                      Devplus Activities{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-1 menu">
              <label className="fa-solid fa-bars" htmlFor="click-menu"></label>
              <div className="c-menu">
                <div className="close-menu">
                  <label htmlFor="click-menu">
                    <img src={close} alt="close" />
                  </label>
                </div>
                <div className="canvas-logo">
                  <img src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png" alt="logo" />
                </div>
                <div className="offcanvas-text">
                  <p>
                    Devplus's mission is filling the gap between school and
                    corporate, reduce in-house training cost and effort for IT
                    companies.
                  </p>
                </div>
                <div className="offcanvas-gallery">
                  {image.map(item=>
                  <div className="gallery-img" key={item.id}>
                    <div
                      onClick={()=>setNumberSlide(item.id)}
                      className="image-popup"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <img alt={item.name} src={item.image} />
                    </div>
                  </div>
                  )}
                </div>
                <div className="map-img">
                  <img alt="one" src="https://devplus.edu.vn/assets/images/map.png" />
                </div>
                <div className="m_fb">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Devplusprogramme"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{zIndex: "2000"}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner">
                {image.map(item=>
                    <div className={numberSlide===item.id?"carousel-item active":"carousel-item"} key={item.id}>
                      <img
                        src={item.image}
                        className="d-block w-100"
                        alt={item.name}
                      />
                    </div>
                )}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span className="fa-solid fa-caret-left" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span className="fa-solid fa-caret-right" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

import iconMail from "@app/assets/images/icons/mail.webp"
import iconPhone from "@app/assets/images/icons/phone-call.webp"
import iconMap from "@app/assets/images/icons/map.webp"
import logo from "@app/assets/images/logo.webp"
import {getApiOurMain} from '@app/config/apiService';
import { useState,useEffect } from "react";

const Footer = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    arrApiOurMain();
  }, [])

  const arrApiOurMain = async () => {
    await getApiOurMain()
      .then(res=>{
        setData(res.data)
      })
      .catch(err=> console.log( "ERROR", err ))
  }
  return (
    <footer className="rs-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-3 footer-widget">
              <h4 className="widget-title">
                DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.
              </h4>
              <ul className="site-map site-one white-color">
                <li>
                  Devplus is not a training center, it's battle campus for you
                  to level up your skillsets and ready to onboard any projects
                  in our “kindest” companies listing
                </li>
              </ul>
            </div>
            <div className="col-3 footer-widget">
              <h4 className="widget-title">FOR DEVPLUS</h4>
              <ul className="site-map site-two">
                <li>
                  <a href="https:/my.devplus.asia" target="_blank">
                    Training space
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Devplusprogramme"
                    target="_blank"
                  >
                    Alumni network
                  </a>
                </li>
                <li>
                  <a href="https://conext.asia/" target="_blank">
                    Connect with experts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 footer-widget">
              <h4 className="widget-title">OUR CAMPUS</h4>
              <ul className="site-map site-three">
                {data.map((item)=>(
                <li>
                  <a href="#">{item.name}</a>
                </li>
                ))}
              </ul>
            </div>
            <div className="col-3 footer-widget">
              <h4 className="widget-title">ADDRESS</h4>
              <ul className="address-widget">
                <li>
                  <div>
                    <img src={iconMap} alt="map" />
                  </div>
                  <div className="desc">
                    368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà
                    Nẵng
                  </div>
                </li>
                <li>
                  <div>
                    <img src={iconPhone} alt="phone" />
                  </div>
                  <div className="desc">
                    <a href="tel:0368492885">(+84) 368492885</a>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={iconMail} alt="mail" />
                  </div>
                  <div className="desc">
                    <a href="mailto:hello@stunited.vn">hello@stunited.vn</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-4">
              <div className="footer-logo md-text-center">
                <a href="#" className="pointer-default">
                  <img alt="one" src={logo} />
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-40">
              <div className="copyright text-center"></div>
            </div>
            <div className="col-lg-4 text-end">
              <ul className="footer-social">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Devplusprogramme"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

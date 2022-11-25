import {getApiOurMain} from '@app/config/apiService';  
import { useState,useEffect } from "react";

const Popular = () => {
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
      {data.map((item) =>
        <div className="col-md-4 box_mainitem" key={item._id}>
          <div className="box_item" data-aos="fade-up" data-aos-duration="3000">
            <div className="box_img">
              <img src={item.image} alt="one" />
            </div>
            <div className="box_title">
              <h5>{item.name}</h5>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
  );
};
export default Popular;

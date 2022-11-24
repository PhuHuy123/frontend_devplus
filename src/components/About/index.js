
import {getApiRoadTo} from '@app/config/apiService';
import { useState, useEffect } from "react";
import './About.scss'

const About = () => {
  const [roadTo, setRoadTo] = useState([])
  useEffect(() => {
    arrayApiRoadTo();
  }, [])

  const arrayApiRoadTo = async () => {
    let res = await getApiRoadTo();
    if (res && res.data && res.data.length > 0) {
      setRoadTo(res.data)
    }
  }
  return (
    <article className="about pdb-100">
    <div className="container">
      <div className="row">
        <section className="about-left col-md-8">
          <div className="about-left-part">
            <div className="about-left-content">
              <p className="sub-title">ABOUT DEVPLUS</p>
              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                The Fact: Skilled labour shortage for software companies but
                full of freshers and low level juniors
              </h2>
              <p
                className="about-left-text"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Our responsibility is filling the gap between the quality of
                graduate students and the quality of engineers. Devplus will
                help reducing the cost of re-training and accelerating the
                skill-up progress of students and freshers.
              </p>
            </div>
          </div>
        </section>
        <section className="about-right col-md-4">
          <div className="notice-bord">
            <h4 className="notice-title">ROAD TO BE A DEVPLUS</h4>
            <ul>
              {roadTo.map((item, index)=>(
                <li
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={(index+1)*100}
              >
                <div className="count-number">
                  <span>{index+1}</span>
                </div>
                <div className="notice-text-content">{item.name}</div>
              </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  </article>
  );
};
export default About;

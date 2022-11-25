import { useState, useEffect } from "react";
import {getApiSkills} from '@app/config/apiService'; 

const Categories = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    arrayApiData();
  }, [])

  const arrayApiData = async () => {
    let res = await getApiSkills();
    if (res && res.data && res.data.length > 0) {
      setData(res.data)
    }
  }
  return (
    <article className="cate pdb-100">
      <div className="container">
        <h2>What an engineer after Devplus will must have?</h2>
        <section className="row">
          {data.map((item, index)=>(
            <div
            key={item._id}
            className="col-md-4 cate-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={100+(index+1)*25}
          >
            <div className="cate-item row">
              <div className="cate-img col-md-4 col-sm-4">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="cate-item-text col-md-8 col-sm-8">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          ))}
        </section>
      </div>
    </article>
  );
};
export default Categories;

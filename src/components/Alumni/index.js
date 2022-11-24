import './Alumni.scss'
const Alumni = () => {
  return (
    <>
      <div className="alumni container">
        <div className="alumni-title mb-3">
          <h2>What alumni saying</h2>
        </div>
        <div
          // className="gallery js-flickity desktop"
          // data-flickity-options='{ "lazyLoad": 1, "wrapAround": true, "groupCells": true, "autoPlay": true}'
          // tabIndex="0"
        >
          <div className="alumni-saying-detail">
            <div className="alumni-quote">
              <img
                alt="one"
                className="alumni-quote-icon"
                src="./images/Alumni/quote2.webp"
              />
              <div className="alumni-quote-description">
                This is an awesome programme which supports me too much in
                enhancing my skills and knowledge to become a developer. I feel
                very lucky because of joining Devplus.
              </div>
              <div className="alumni-quote-info">
                <img alt="one" src="./images/Alumni/person1.webp" />
                <div className="alumni-name">Nghia Le</div>
                <div className="alumni-position">Member Devplus ++</div>
              </div>
            </div>
          </div>
          <div className="alumni-saying-detail">
            <div className="alumni-quote">
              <img
                alt="one"
                className="alumni-quote-icon"
                src="./images/Alumni/quote2.webp"
              />
              <div className="alumni-quote-description">
                I learnt a lot of knowledge from experienced seniors of Dev
                plus. They help me to understand the procedure. Additionally,
                taking part in activities such as workshops promote my soft
                skills.
              </div>
              <div className="alumni-quote-info">
                <img alt="one" src="./images/Alumni/person2.webp" />
                <div className="alumni-name">Quynh Nga</div>
                <div className="alumni-position">Member Devplus ++</div>
              </div>
            </div>
          </div>
          <div className="alumni-saying-detail">
            <div className="alumni-quote">
              <img
                alt="one"
                className="alumni-quote-icon"
                src="./images/Alumni/quote2.webp"
              />
              <div className="alumni-quote-description">
                Dev plus help me to re-train about knowledge with technology,
                experience how to do the real project with senior developers by
                testing their current project, and share more experience with
                them. enjoy more events and workshops.
              </div>
              <div className="alumni-quote-info">
                <img alt="one" src="./images/Alumni/person3.webp" />
                <div className="alumni-name">Thatsadaphone</div>
                <div className="alumni-position">Member Devplus ++</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame container px-0"></div>
    </>
  );
};
export default Alumni;

import "./Banner.scss";
const Banner = () => {
  return (
    <article className="banner">
      <div className="container">
        <div className="banner-content text-center">
          <h1
            className="banner-title"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Devplus Will Support The Early Stage Developers Go The Right Career
            Path
          </h1>
          <p
            className="banner-text-content"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Devplus is not a training center, it’s battle campus for you to
            level up your skillsets and ready to onboard any projects in our
            “kindest” companies listing
          </p>
          <button
            className="banner-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          >
            Learn more
          </button>
        </div>
      </div>
    </article>
  );
};

export default Banner;

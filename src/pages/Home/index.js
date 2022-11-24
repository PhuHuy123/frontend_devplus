import Popular from "@app/components/Popular";
import Header from "@app/components/Header";
import Banner from "@app/components/Banner";
import About from "@app/components/About";
import Categories from "@app/components/Categories";
import Footer from "@app/components/Footer";
import Admission from "@app/components/Admission";
import Concerns from "@app/components/Concerns";
import Alumni from "@app/components/Alumni";
import Back from "@app/components/Back";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Categories />
      <Popular />
      <Admission />
      <Concerns />
      <Alumni />
      <Footer />
      <Back/>
    </>
  );
};

export default Home;

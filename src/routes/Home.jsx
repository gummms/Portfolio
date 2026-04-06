import "./Home.css";

import About from "../components/about/About.jsx";
import StudyCases from "../components/studycases/StudyCases.jsx";
import Logos from "../components/logos/Logos.jsx";

const Home = () => {
  return (
    <>
      <div className="Home">
        <About />
        <StudyCases />
        <Logos />
      </div>
    </>
  );
};

export default Home;

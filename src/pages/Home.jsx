import React from "react";
import About from "../pages/About";
import Services from "../pages/Services";

const Home = ({ lang }) => {
  return (
    <div>
      {/* About Section تحت الهيدر */}
      <About lang={lang} />
      <Services lang={lang}/>
    </div>
  );
};

export default Home;

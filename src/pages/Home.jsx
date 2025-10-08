import React from "react";
import About from "../pages/About";

const Home = ({ lang }) => {
  return (
    <div>
      {/* About Section تحت الهيدر */}
      <About lang={lang} />
    </div>
  );
};

export default Home;

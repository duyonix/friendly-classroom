import React from "react";
import Footer from "../../components/Footer.jsx";
import IntroFeature from "../../components/IntroFeature.jsx";
import IntroMain from "../../../components/IntroMain.jsx";
import NavbarIntro from "../../../components/NavbarIntro.jsx";

function Intro() {
  return (
    <div>
      <NavbarIntro />
      <IntroMain />
      <IntroFeature />
      <Footer />
    </div>
  );
}

export default Intro;

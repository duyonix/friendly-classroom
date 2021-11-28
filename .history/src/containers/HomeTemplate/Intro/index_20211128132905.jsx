import React from "react";
import IntroMain from "../../../components/IntroMain.jsx";
import NavbarIntro from "../../../components/NavbarIntro.jsx";

function Intro() {
  return (
    <div>
      <NavbarIntro />
      <IntroMain />
      <IntroFeature/>
    </div>
  );
}

export default Intro;

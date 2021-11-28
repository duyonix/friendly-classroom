import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer container">
      <div className="div-4 col-sm-12 col-md-12 col-lg-4">
        <Link to="/home" className="logo">
          <img src="../assets/img/Friendly_logo.png" alt="Our Logo" />
        </Link>
        Lớp học thân thiện - Friendly Classroom

@Copyright HiFive Team
      </div>
    </section>
  );
}

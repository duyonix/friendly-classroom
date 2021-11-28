import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header">
      <div className="container">
        <Link to="/home" className="logo">
          <img src="" alt="" />
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar-right">
          <div className="cart">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <div className="amount">
              <span>0</span>
            </div>
            <div className="info-cart">
              <div className="no-course">
                Không có khóa học nào trong giỏ hàng
              </div>
            </div>
          </div>
          <div className="account">
            <button className="btn btn-signin">SIGN IN</button>
            <button className="btn btn-signup">SIGN UP</button>
          </div>
        </div>
      </div>
    </header>
  );
}

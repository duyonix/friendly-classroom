import React from "react";
import { Route } from "react-router";
import Navbar from "../../components/Navbar";

function LayoutHome(props) {
  return <>
  <Navbar
  {props.children}</>;
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}

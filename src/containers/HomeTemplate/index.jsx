import React, { Fragment } from "react";
import { Route } from "react-router";

function LayoutHome(props) {
  return <Fragment>{props.children}</Fragment>;
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

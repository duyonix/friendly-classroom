import React from "react";
import { Route } from "react-router";
import NavbarClassroom from "../../components/NavbarClassroom";

function LayoutClassroom(props) {
  return (
    <React.Fragment>
      <NavbarClassroom />
      {props.children}
    </React.Fragment>
  );
}

export default function ClassroomTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutClassroom>
          <Component {...propsComponent} />
        </LayoutClassroom>
      )}
    />
  );
}

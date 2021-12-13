import React from "react";
import { Route } from "react-router";
import NavbarClassroom from "../../components/NavbarClassroom";

function LayoutAdmin(props) {
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
        <LayoutAdmin>
          <Component {...propsComponent} />
        </LayoutAdmin>
      )}
    />
  );
}

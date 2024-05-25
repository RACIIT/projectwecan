import React, { Fragment } from "react";
import Header1 from "./Header1";
import Header4 from "./Header4";

const HeadersLayouts = ({ headerTopbar, position }) => {
  return (
    <Fragment>
      <Header4 headerTopbar={headerTopbar} position={position} />
    </Fragment>
  );
};
export default HeadersLayouts;

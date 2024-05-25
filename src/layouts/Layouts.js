import React, { Fragment, useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import { animation, niceSelect, progressBar, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import HeadersLayouts from "./headers/HeadersLayouts";
import Footer1 from "./footers/Footer1";
import Footer2 from "./footers/Footer2";
import GoogleAnalytics from '../components/GoogleAnalytics';

const Layouts = ({
  children,
  footer,
  headerTopbar,
  noNewsletters,
  position,
  noheader,
  noFooter,
}) => {
  useEffect(() => {
    animation();
    niceSelect();
    stickyNav();
    progressBar();
  }, []);

  return (
    <Fragment>
      <GoogleAnalytics/>
      {!noheader && (
        <HeadersLayouts headerTopbar={headerTopbar} position={position} />
      )}
      {children}
      {!noFooter && <Footer footer={footer} noNewsletters={noNewsletters} />}
      <ScrollTop />
    </Fragment>
  );
};
export default Layouts;

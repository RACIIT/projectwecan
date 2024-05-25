import Link from "next/link";
import React from "react";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(assets/img/cta-img/cta-boxed-bg-1.jpg)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">

                      <h2 className="title">
                        Make a Difference Today
                      </h2>

                      <p>Your donation can help us break the stigma around menstruation and provide essential menstrual hygiene resources to women and girls in need.

                      </p>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                        <a href="https://forms.gle/eGaVaYnrU7WZEZ316" className="template-btn template-btn-white" target="_blank" rel="noopener noreferrer">
                          Donate Now <i className="far fa-plus" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="Medibo" />
                  </div>
                  <p>
                    For more information or to get involved, contact us:
                  </p>

                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                        57  Ramakrishna Road, Colombo 00600
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" />
                        rciit.3220@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        +94 76 536 8956
                      </a>
                    </li>
                  </ul>

                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Pages</h4>
                      <ul className="nav-links">
                        <li>
                          <Link href={"/index-four"}>
                            <a href="">Home</a>
                          </Link>

                        </li>
                        {/* <li>
                          <Link href={"/doctor"}>
                            <a href="#">Shop</a>
                          </Link>

                        </li> */}
                        <li>
                          <Link href={"/doctor"}>
                            <a href="#">Blogs</a>
                          </Link>

                        </li>
                        <li>
                          <Link href={"/about"}>
                            <a href="#">About Us</a>
                          </Link>


                        </li>
                        <li>
                          <Link href={"/contact"}>
                            <a href="#">Contact</a>
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Follow Us </h4>
                      <div className="instagram-images">

                        <a href="https://www.instagram.com/rotaract_iit">
                          <div className="single-image">
                            <img src="assets/img/instagram/01.jpg" alt="Instagram" />
                          </div>
                        </a>
                        <a href="https://www.facebook.com/iitrotaract">
                          <div className="single-image">
                            <img src="assets/img/instagram/02.jpg" alt="fb" />
                          </div>
                        </a>
                        <a href="https://www.youtube.com/@iitrotaract">
                          <div className="single-image">
                            <img src="assets/img/instagram/03.jpg" alt="yt" />
                          </div>
                        </a>
                        <a href="https://www.tiktok.com/@rotaract_iit">
                          <div className="single-image">
                            <img src="assets/img/instagram/04.jpg" alt="tk" />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/company/rotaract-club-of-iit">
                          <div className="single-image">
                            <img src="assets/img/instagram/05.jpg" alt="Linkedin" />
                          </div>
                        </a>
                        <a href="https://www.raciit.org/">
                          <div className="single-image">
                            <img src="assets/img/instagram/06.jpg" alt="wwww" />
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  {/* <h4 className="widget-title">Check out other blogs </h4> */}
                  <div className="footer-logo">
                    <a href="https://www.raciit.org/">
                      <img src="assets/img/rotalogo.png" alt="Medibo" />
                    </a>

                  </div>
                  {/* <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="newsletters-form"
                  >
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2024 <a href="https://www.raciit.org">Rotaract Club Of IIT</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;

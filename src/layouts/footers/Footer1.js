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
                        Ramakrishna Road, IT
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" />
                        iitrotaract@gmail.com
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
                  {/* <div className="col-xl-5 col-md-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Popular Services</h4>
                      <ul className="nav-links">
                        <li>
                          <a href="#">Orthopedic Care</a>
                        </li>
                        <li>
                          <a href="#">Gynecology Care</a>
                        </li>
                        <li>
                          <a href="#">Cardiology Care</a>
                        </li>
                        <li>
                          <a href="#">Dentistry Care</a>
                        </li>
                        <li>
                          <a href="#">Gastroenterology</a>
                        </li>
                        <li>
                          <a href="#">Urgent Care</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <div className="col-xl-7 col-md-6">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Photo Gallery</h4>
                      <div className="instagram-images">
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/01.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/02.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/03.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/04.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/05.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/06.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Check out our blogs </h4>
                  <p>
                    ADD THE ROTARACT LOGO HERE <br /> natus error sit
                    voluptatem
                  </p>
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

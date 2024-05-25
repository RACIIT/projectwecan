import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Doctor = () => {
  return (
    <Layouts>
      <PageBanner title={"Period Essentials"} />
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/01.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Lee S. Williamson</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cardiology</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/02.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Greg S. Grinstead</a>
                    </Link>
                  </h5>
                  <span className="specialty">Neurology</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/03.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Roger K. Jackson</a>
                    </Link>
                  </h5>
                  <span className="specialty">Orthopedics</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/04.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Rudolph V. Spitler</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cardiology</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/05.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Frank T. Grimsley</a>
                    </Link>
                  </h5>
                  <span className="specialty">Neurology</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}

    </Layouts>
  );
};
export default Doctor;

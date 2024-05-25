import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={1}>
      <PageBanner title={"About"} />
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/01.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/04.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/img/circle-image-gallery/03.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">

                  <h2 className="title">Empower. Educate. End Stigma.</h2>

                  {/* <p>25 Years Of Experience in Medical Services</p> */}
                </div>
                <p>
                 In many parts of the world, predominantly due to cultural discrepancies that have been taken into consideration, the concept of menstruation is highly stigmatised. Sri Lanka, being one such country, fosters taboo surrounding the topic of female reproduction health. With this in mind, the RACIIT initiated “WeCan” focusing on the importance of menstrual hygiene and health. <br /><br />

                  We are passionate about promoting menstrual health, hygiene, and sustainability. Our mission is to break the stigma surrounding periods and empower individuals with knowledge and access to reusable menstrual products. We believe that everyone deserves access to safe and affordable menstrual care options. Through our project, we conduct awareness sessions, donate reusable pad kits to those in need, and create female-friendly washrooms in rural schools. We are dedicated to making a positive impact in the lives of individuals and communities by providing them with the tools and resources they need to manage their periods with dignity and in an environmentally conscious manner. <br /><br />

                  Since its initiation, our project has been carried forward by dedicated Community Service Directors each Rotary International (RI) year to ensure the continuity and success of our initiative. With their commitment and vision, the project thrives, making a lasting impact on menstrual health, hygiene, and sustainability in the communities we serve. Through the collective efforts of these Community Service Directors, we have been able to build upon previous achievements, expand our reach, and continually evolve our project to meet the evolving needs of individuals in need. <br /><br /> Join us on this journey of empowerment and sustainability as we strive to create a world where menstruation is celebrated, and menstrual health is a priority for all.
                </p>
                <Link href="/index-four">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
        {/* <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Why Choose Our Medical</span>
                  <h2 className="title">
                    Breakthrough in Comprehensive, Flexible Care Delivery Models
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Optimize Your Health Care Services</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Boost Employee Engagement</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Accelerate Your Return On Investment</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
        <section className="doctors-section bg-color-grey polygon-pattern-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-heading text-center mb-40">

                  <h2 className="title">Our Community Service Directors throught out the years</h2>
                  <span className="tagline">Who Carried the Wecan Project</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center doctors-loop">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/part.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Prathlosh Paramasivam</a>
                    </h5>
                    <span className="specialty">2020-21</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/tihara.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Tihara Jayawickrama</a>
                    </h5>
                    <span className="specialty">2021-22</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/yasiru.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Yasiru Jayatissa</a>
                    </h5>
                    <span className="specialty">2021-22</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/nithila.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Nithila Ariyapperuma</a>
                    </h5>
                    <span className="specialty">2021-22</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/moji.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Mojitha Gunaratne</a>
                    </h5>
                    <span className="specialty">2022-23</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/niki.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                    <a>Rtr. Nikeesha Attanayake</a>
                    </h5>
                    <span className="specialty">2022-23</span>
                    {/* <ul className="social-links">
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span> */}
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </section>
        {/* <!--====== Doctor Section End ======--> */}
      </div>

       {/*====== Help Section Start ======*/}
       <section className="help-section section-gap">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center">
              <div className="col-lg-6 col-md-10">
                <div className="seeva-video mb-md-50">
                  <div className="video-thumbnail">
                    <img
                      src="assets/img/section-img/help-video.jpg"
                      alt="Image"
                    />
                  </div>
                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-content">
                  <div className="section-heading mb-30">
                    <h2 className="title">
                      Interested to be a part of this initiative?
                    </h2>
                  </div>
                  <p>
                    PLEASE FEEL FREE TO REACH OUT TO US IF YOU ARE INTERESTED IN MAKING A DONATION, SEEKING DONATIONS, OR EXPLORING PARTNERSHIP OPPORTUNITIES.
                  </p>
                  <a
                    href="#"
                    className="template-btn mt-40 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Join Now <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Help Section End ======*/}
    </Layouts>
  );
};
export default About;

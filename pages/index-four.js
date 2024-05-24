import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import TestimoinalSlider from "../src/components/TestimonialSlider";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";
import Header4 from "../src/layouts/headers/Header4";
import { heroSlider } from "../src/sliderProps";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index4 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noheader footer={1}>
      {video && <VideoPopup close={setVideo} />}
      <Header4 />
      <>
        <section className="hero-slider hero-slider-two">
          <Slider {...heroSlider} className="hero-slider-active">
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-4.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-md-9">
                    <div className="hero-content text-center">
                      {/* <span
                        className="tagline"
                        data-animation="fadeInDown"
                        data-delay="0.5s"
                      >
                       Empower. Educate. End the Stigma
                      </span> */}
                      <h1
                        className="title"
                        data-animation="fadeInLeft"
                        data-delay="0.6s"
                      >
                        Empowerment Sustainabillity Inclusivity
                      </h1>
                      <a
                        href="#"
                        className="template-btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        Explore <i className="far" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-hero-slider">
              <div
                className="hero-slider-bg bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img/hero-img/hero-slider-5.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-md-9">
                    <div className="hero-content text-center">
                      <span
                        className="tagline"
                        data-animation="fadeInDown"
                        data-delay="0.5s"
                      >
                        Love Respect &amp; Care
                      </span>
                      <h1
                        className="title"
                        data-animation="fadeInLeft"
                        data-delay="0.6s"
                      >
                        Trusted Dental Care Center
                      </h1>
                      <a
                        href="#"
                        className="template-btn"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                      >
                        Explore Our Service <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="hero-slider-arrow" />
        </section>
        {/*====== Hero Slider End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section-two">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="section-heading mb-40">
                    <span className="tagline">Why Choose Our Medical</span>
                    <h2 className="title">
                      Breakthrough in Comprehensive, Flexible Care Models
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Break the stigma</a>
                    </h4>
                    <p>
                      Breaking the period stigma through education and open dialogue and encouraging positive attitudes towards menstruation

                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care-2" />
                    </div>
                    <h4 className="title">
                      <a href="#">Promote Health and Hygiene</a>
                    </h4>
                    <p>

                      Promoting menstrual health and hygiene for all.

                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="simple-icon mt-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-dental-care" />
                    </div>
                    <h4 className="title">
                      <a href="#">Combat Period poverty
                      </a>
                    </h4>
                    <p>
                      Combat period poverty with sustainable and reusable products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
        <section className="about-section section-gap-top">
          <div className="container mx-auto my-4">
            <div className="row align-items-end justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-8 order-xl-first">
                <div className="bordered-icon-wrapper hide-icon-md">
                  <img
                    src="assets/img/section-img/about-img-2.png"
                    alt="AboutImg"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-8 col-sm-10">
                <div className="about-content about-content-gap">
                  <div className="section-heading mb-35">

                    <h2 className="title">Start your journey with reusable menstrual products</h2>

                  </div>
                  <p>
                    Make the switch to reusable menstrual products and join the movement towards sustainability and reducing waste

                  </p>
                  <Link href="/doctor-details">
                    <a
                      className="template-btn mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Shop Here <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section bg-color-primary section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading heading-white text-center mb-70">
                  <span className="tagline">Popular Dental Services</span>
                  <h2 className="title">
                    Benefit FOr Physical Mental and Virtual Care
                  </h2>
                </div>
              </div>
            </div>
            <div className="iconic-boxes-big-image">
              <div className="row justify-content-lg-between justify-content-center first-row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 first-column">
                  <div
                    className="single-iconic-item wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Break the stigma</a>
                    </h4>
                    <p>
                      Breaking the period stigma through education and open dialogue and encouraging positive attitudes towards menstruation</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 second-column">
                  <div
                    className="single-iconic-item wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Promote Health and Hygiene</a>
                    </h4>
                    <p>Promoting menstrual health and hygiene for all.</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-lg-between justify-content-center second-row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 first-column">
                  <div
                    className="single-iconic-item wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Combat Period poverty</a>
                    </h4>
                    <p>Combat period poverty with sustainable and reusable products.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 second-column">
                  <div
                    className="single-iconic-item wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <i className="flaticon-tooth-1" />
                    </div>
                    <h4 className="title">
                      <a href="#">Tooth Extractions</a>
                    </h4>
                    <p>Sed ut perspic unde omnis serror voluptatem</p>
                  </div>
                </div>
              </div>
              <img
                src="assets/img/iconic-box/tooth.png"
                alt="Image"
                className="big-image"
              />
              <img
                src="assets/img/iconic-box/border-line.png"
                alt="Image"
                className="border-image"
              />
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Appointment Section Start ======*/}
        <section className="appointment-section section-gap">
          <div className="container">
            <div className="appointment-form-two">
              <div className="form-wrap">
                <div className="section-heading mb-40">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">Make an Appointment to Doctor Visit</h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="input-field">
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <select>
                          <option value={1} selected disabled="">
                            Services Category
                          </option>
                          <option value={2}>Service One</option>
                          <option value={3}>Service Two</option>
                          <option value={4}>Service Three</option>
                          <option value={5}>Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <select>
                          <option value={1} selected disabled="">
                            Choose Doctors
                          </option>
                          <option value={2}>Doctor One</option>
                          <option value={3}>Doctor Two</option>
                          <option value={4}>Doctor Three</option>
                          <option value={5}>Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="appointment-image"
                style={{
                  backgroundImage: "url(assets/img/appointment/05.jpg)",
                }}
              ></div>
            </div>
          </div>
        </section>
        {/*====== Appointment Section End ======*/}
        {/*====== Doctors With Counter Start ======*/}
        <div className="doctors-with-counter">
          {/*====== Doctor Section Start ======*/}
          {/* <section className="doctors-section bg-color-grey polygon-pattern-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-heading text-center mb-40">
                    <span className="tagline">Professional Team</span>
                    <h2 className="title">Meet Our Experience Team Members</h2>
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
                      <img src="assets/img/doctors/18.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Allan K. Simons</a>
                        </Link>
                      </h5>
                      <span className="specialty">Dental Specialist</span>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/19.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Marcus K. Staton</a>
                        </Link>
                      </h5>
                      <span className="specialty">Neurology</span>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/20.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>Travis A. Costillo</a>
                        </Link>
                      </h5>
                      <span className="specialty">Orthopedics</span>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className="doctor-box-three mt-30 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="doctor-photo">
                      <img src="assets/img/doctors/21.jpg" alt="Image" />
                    </div>
                    <div className="doctor-information">
                      <h5 className="name">
                        <Link href="/doctor-details">
                          <a>M.Calhoun</a>
                        </Link>
                      </h5>
                      <span className="specialty">Cardiology</span>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                      <span className="plus-icon">
                        <i className="far fa-plus" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/*====== Doctor Section End ======*/}
          {/*====== Counter Section Start ======*/}

          {/*====== Counter Section End ======*/}
        </div>
        {/*====== Doctors With Counter End ======*/}
        {/*====== Testimonial Section Start ======*/}
        <section className="testimonial-section testimonial-two-bg section-gap bg-color-primary">
          <div className="container">
            <div className="testimonial-slider-three">
              <div className="row justify-content-center">
                <TestimoinalSlider />
              </div>
              <div className="slider-arrows" />
            </div>
          </div>
          <div
            className="bg-one"
            style={{ backgroundImage: "url(assets/img/testimonial/bg-2.jpg)" }}
          />
          <div
            className="bg-two"
            style={{ backgroundImage: "url(assets/img/testimonial/bg-3.jpg)" }}
          />
        </section>
        {/*====== Testimonial Section End ======*/}
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
        {/*====== Partner Section start ======*/}
        <section className="partner-section section-gap bg-color-grey section-map-overly-2">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Sponsors and Partners</h2>
              <p>Our esteemed sponsors and partners, whose collaboration has been instrumental in driving the success and reach of our project.</p>
            </div>
            <div className="partner-logo-grid">
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/01-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/02-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/03-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/04-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/05-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/06-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/07-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img
                    src="assets/img/partner-logos/08-dark.png"
                    alt="Partner"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*====== Partner Section end ======*/}


        {/*====== Latest Blog Start ======*/}
        <section className="latest-blog-section section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="section-heading text-center mb-40">

                  <h2 className="title">
                    News &amp; Blogs
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center latest-blog-loop">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/07.jpg" alt="Image" />
                  </div>
                  <div className="blog-content">

                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>The Morning LK</a>
                      </Link>
                    </h4>
                    <p>
                      Despite the majority of the Sri Lankan population being persons who experience.........

                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/07.jpg" alt="Image" />
                  </div>
                  <div className="blog-content">

                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Biz Com.lk</a>
                      </Link>
                    </h4>
                    <p>
                      Despite the majority of the Sri Lankan population being persons who experience periods................

                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/07.jpg" alt="Image" />
                  </div>
                  <div className="blog-content">

                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Lanka Business News</a>
                      </Link>
                    </h4>
                    <p>
                      Despite the majority of the Sri Lankan population being persons who experience periods, Sri Lanka is still playing catch up when it comes to the concept of menstruation.

                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-two no-radius mt-30">
                  <div className="thumbnail">
                    <img src="assets/img/latest-blog/07.jpg" alt="Image" />
                  </div>
                  <div className="blog-content">

                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Corp Coms</a>
                      </Link>
                    </h4>
                    <p>
                      Despite the majority of the Sri Lankan population being persons who experience periods............

                    </p>
                    <Link href="/blog-details">
                      <a className="template-btn">
                        Read More <i className="far fa-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/*====== Latest Blog End ======*/}
      </>
    </Layouts>
  );
};
export default Index4;

import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  return (
    <Fragment>
      <div className="col-lg-4 col-md-7 col-sm-9">
        <Slider
          asNavFor={nav1}
          
          ref={(slider) => setSlider2(slider)}
          infinite={true}
          dots={false}
          arrows={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          centerMode={true}
          centerPadding={"0"}
          focusOnSelect={true}
          className="thumb-wrapper"
        >
          <div className="single-thumb">
            <img src="assets/img/testimonial/Tihara.png" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/Nadeeka.png" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/Pratlosh.png" alt="Thumb" />
          </div>
          <div className="single-thumb">
            <img src="assets/img/testimonial/Ahmed.png" alt="Thumb" />
          </div>
        </Slider>
      </div>
      <div className="col-lg-9 col-md-10">
        <Slider
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
          infinite={true}
          dots={false}
          arrows={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          autoplaySpeed={5000}
          className="content-wrapper"
        >
          <div className="single-item-wrap">
            <p className="content">
            Embarking on the journey of Project WeCan has been a transformative experience for RACIIT. From the initial spark of normalizing period talk to breaking the silence, every step has been filled with determination and compassion. 
            Witnessing the impact of educating both young men and women about menstruations's importance and erasing the stigma has been truly inspiring. Building washrooms in rural areas and providing eusable menstrual pads has not only promoted hygiene but also empowered girls in ways we could never have imagined. Together, we have proven that small actions can create big ripples of change, paving the way for a brighter and more inclusive future
            </p>
            <div className="author-info">
              <h5 className="name">Tihara Jayawickrama</h5>
              <span className="title">RACIIT Community Service Director 2021-22</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
            I've worked with the crew at WeCan for about 3 years. 
            They're very resourceful, talented and above all, kind at heart.
             I believe this is the kind of young energy that we need to change the world. Not only do they think of sustainability when elevating period poverty, but they also try to go above and beyond their capacities. Loved working with all of them.

            </p>
            <div className="author-info">
              <h5 className="name">Nadeesha Paulis</h5>
              <span className="title">Period Advocate and Founder of Happy Bleeding</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
            Looking back at how far the name WeCan has travelled, the people it has educated and aided, and above all the impact it's created over the years, makes me realize that this very impactful project was once just a mere idea. I believe that that young minds and energy at RAC IIT can not only help provide a healthy and sustainable hygiene routine to all girls around the island but also,
             encourage young boys to help break the stigma and allow young girls to speak freely of their issues.
            </p>
            <div className="author-info">
              <h5 className="name">Prathlosh Paramasivam</h5>
              <span className="title">RACIIT Community Service Director 2020-21 & WeCan Project Initiator
</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
            Periods are a natural part of life, yet society has stigmatized them for far too long. We must break down the walls of shame and silence around menstruation, 
            and work towards ending period poverty. Menstrual health is not just a women's issue, it's a human issue. Men too should be educated on the topic and join the conversation. Through education, awareness, and access to reusable pads, we can help create a world where periods are no longer a source of shame or financial burden.

            </p>
            <div className="author-info">
              <h5 className="name">DRR Rtn. Rtr. Ahamed Hussain</h5>
              <span className="title">District Rotaract Representative 2022-23</span>
            </div>
          </div>
          {/* <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div>
          <div className="single-item-wrap">
            <p className="content">
              Sed ut perspiciatis unde omnis natusy error voluptatem accusantium
              doloreue laudan totam rem aperiam eaquip quae abillo inventore
              veritatis quasi architecto beatae vitae dicta sunt explicabo
            </p>
            <div className="author-info">
              <h5 className="name">Mark E. Kaminsky</h5>
              <span className="title">Web Designer</span>
            </div>
          </div> */}
        </Slider>
      </div>
    </Fragment>
  );
};
export default TestimonialSlider;

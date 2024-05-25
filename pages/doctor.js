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
      {/* <!--====== Doctor Section End ======--> */}

    </Layouts>
  );
};
export default Doctor;

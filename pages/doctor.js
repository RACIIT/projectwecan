import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Doctor = () => {
  return (
    <Layouts>
      <PageBanner title={"News & Blogs"} />
      <section className="doctors-section section-gap">
        <div className="container">
        <div className="row justify-content-center latest-blog-loop">
          <BlogPost  image={"assets/img/latest-blog/04.jpg"} link={"https://www.themorning.lk/articles/167679"}title={"The Morning LK"} desc={"Despite the majority of the Sri Lankan population being persons who experience........."}/>
          <BlogPost  image={"assets/img/latest-blog/05.jpg"} link={"https://www.lankabusinessnews.com/wecan-by-the-rotaract-club-of-iit/"} title={"Morning News"} desc={"The Rotaract Club of Informatics Institute of Technology (RACIIT) is recognized for its initiatives aligned with Rotary International’s 7 focus areas..."}/>
          <BlogPost  image={"assets/img/latest-blog/06.jpg"} link={"https://www.lankabusinessnews.com/wecan-by-the-rotaract-club-of-iit/"} title={"Lanka Business News"} desc={" The Rotaract Club of Informatics Institute of Technology (RACIIT) is recognized for its initiatives aligned with Rotary International’s 7 focus areas..."}/>
          <BlogPost  image={"assets/img/latest-blog/07.jpg"} link={"https://corpcom.lk/2023/02/14/wecan-by-the-rotaract-club-of-iit/"} title={"Corp Coms"} desc={"Project WeCan, an initiative by the Rotaract club of IIT, which aims to normalise the taboo topic of menstruation in today’s..."}/>
          <BlogPost  image={"assets/img/latest-blog/08.jpg"} link={"https://sinhala.lankabusinessnews.com/%E0%B6%BA%E0%B7%84%E0%B6%B4%E0%B7%90%E0%B7%80%E0%B7%90%E0%B6%AD%E0%B7%8A%E0%B6%B8%E0%B6%A7-%E0%B6%BB%E0%B6%9A%E0%B7%8A%E0%B6%AD-%E0%B6%B4%E0%B7%92%E0%B6%A7%E0%B7%92%E0%B7%80%E0%B7%84%E0%B6%BD%E0%B6%9A/"} title={"Lanka Business News Sinhala"} desc={"අද සමාජය තුළ ඔසප් වීම තවමත් විවෘතව කතා නොකරන මාතෘකාවකි. ඔසප් වීම පිළිබඳ මාතෘකාව බොහෝ විට තහනම් සහ වැරදි තොරතුරු වලින්..."}/>
          <BlogPost  image={"assets/img/latest-blog/09.jpg"} link={"https://businessgossips.lk/2023/02/14/wecan-by-the-rotaract-club-of-iit/"}title={"Business Gossip"} desc={"The Rotaract Club of Informatics Institute of Technology (RACIIT) is recognized for its initiatives aligned with Rotary International’s 7 focus areas..."}/>
          <BlogPost  image={"assets/img/latest-blog/10.png"} link={"https://eyeviewsl.com/we-can-the-journey-of-rotaract-club-of-iit-to-combat-the-misjudgment-regarding-menstruation/"} title={"Eyeviewsl.com"} desc={"Project WeCan, an initiative by the Rotaract Club of IIT, which aims to normalize the taboo topic of “menstruation” in society, ..."}/>
          <BlogPost  image={"assets/img/latest-blog/11.jpg"} link={"https://vyapaara.lk/?p=5040"} title={"Vyapaara Puwath"} desc={"Project WeCan, an initiative by the Rotaract Club of IIT, which aims to normalize the taboo topic of “menstruation” in society, ..."}/>
            </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}

    </Layouts>
  );
};

export const BlogPost = ({ image, title, desc , link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <div className="latest-blog-two no-radius mt-30">
        <div className="thumbnail">
          <img src={image} alt={title} />
        </div>
        <div className="blog-content">
          <h4 className="blog-title">
            <Link href="#">
              <a href={link}>{title}</a>
            </Link>
          </h4>
          <p>{desc}</p>
          <Link href={"#"}>
            <a className="template-btn" href={link}>
              Read More <i className="far fa-plus" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Doctor;

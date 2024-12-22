"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";
import { StoryImage } from "./StoryImage";
import { useTranslations } from "next-intl";

const OurStory = () => {
  const t = useTranslations("OurStory");
  return (
    <div
      className={`${prata.className} flex flex-col items-center my-20" id="story`}
    >
      <div className={`${prata.className} font-bold text-3xl`}>
        {t("title")}
      </div>
      <div className="mt-2 mb-10">
        <img src="flower.png" alt="flower" />
      </div>

      <section className="story-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="story-timeline">
                <div className="round-shape"></div>
                <div className="row">
                  <div className="col col-lg-6 col-12">
                    <StoryImage
                      idx={0}
                      imgSrc="/story-image-1.jpg"
                      className="img-holder right-align-text left-site"
                    />
                  </div>
                  <div className="col col-lg-6 col-12 text-holder">
                    <span className="heart">
                      <i className="fi flaticon-heart-1"></i>
                    </span>
                    <div className="story-text">
                      <span className="date">19/03/2019</span>
                      <h3>{t("subTitle1")}</h3>
                      <p>{t("paragraph1")}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                    <span className="heart">
                      <i className="fi flaticon-heart-1"></i>
                    </span>
                    <div className="story-text right-align-text">
                      <span className="date">02/07/2022</span>
                      <h3>{t("subTitle2")}</h3>
                      <p>{t("paragraph2")}</p>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12 order-lg-2 order-1">
                    <StoryImage
                      idx={1}
                      imgSrc="/story-image-2.png"
                      className="img-holder right-align-img"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6 col-12">
                    <StoryImage
                      idx={2}
                      imgSrc="/story-image-3.jpg"
                      className="img-holder video-holder left-site"
                    />
                  </div>
                  <div className="col col-lg-6 col-12 text-holder">
                    <span className="heart">
                      <i className="fi flaticon-heart-1"></i>
                    </span>
                    <div className="story-text">
                      <span className="date"> 05/01/2025</span>
                      <h3>{t("subTitle3")}</h3>
                      <p>{t("paragraph3")}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                    <span className="heart">
                      <i className="fi flaticon-heart-1"></i>
                    </span>
                    <div className="story-text right-align-text">
                      <span className="date">11/01/2025</span>
                      <h3>{t("subTitle4")}</h3>
                      <p>{t("paragraph4")}</p>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12 order-lg-2 order-1">
                    <StoryImage
                      idx={3}
                      imgSrc="/story-image-4.jpg"
                      className="img-holder right-align-img"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                    <div className="round-shape-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="text-center">
            <h5>
              Hãy sẵn sàng tham gia những bữa tiệc đầy ý nghĩa cùng chúng mình
              nha!
            </h5>
            <h3>From Minh & Thư, with love ❤️</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;

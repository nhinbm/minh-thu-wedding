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
      <div className="mt-2">
        <img src="flower.png" alt="flower" />
      </div>

      <section className="story-section max-w-full">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="story-timeline">
              <div className="round-shape"></div>
              <div className="flex flex-wrap justify-center items-center">
                <div className="lg:w-1/2 w-full">
                  <StoryImage
                    idx={0}
                    imgSrc="/story-image-1.jpg"
                    className="img-holder right-align-text left-site"
                  />
                </div>
                <div className="lg:w-1/2 w-full text-holder">
                  <span className="heart flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="#5D7C78"
                      />
                    </svg>
                  </span>
                  <div className="story-text lg:max-w-[70%]">
                    <span className="date">19/03/2019</span>
                    <h3>{t("subTitle1")}</h3>
                    <p>{t("paragraph1")}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <div className="lg:w-1/2 w-full lg:order-1 order-2 text-holder right-heart">
                  <span className="heart flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="#5D7C78"
                      />
                    </svg>
                  </span>
                  <div className="story-text text-right lg:max-w-[95%]">
                    <span className="date">02/07/2022</span>
                    <h3>{t("subTitle2")}</h3>
                    <p>{t("paragraph2")}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full lg:order-2 order-1">
                  <StoryImage
                    idx={1}
                    imgSrc="/story-image-2.png"
                    className="img-holder right-align-img"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <div className="lg:w-1/2 w-full">
                  <StoryImage
                    idx={2}
                    imgSrc="/story-image-3.jpg"
                    className="img-holder video-holder left-site"
                  />
                </div>
                <div className="lg:w-1/2 w-full text-holder">
                  <span className="heart flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="#5D7C78"
                      />
                    </svg>
                  </span>
                  <div className="story-text lg:max-w-[70%]">
                    <span className="date"> 05/01/2025</span>
                    <h3>{t("subTitle3")}</h3>
                    <p>{t("paragraph3")}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                <div className="lg:w-1/2 w-full lg:order-1 order-2 text-holder right-heart">
                  <span className="heart flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="#5D7C78"
                      />
                    </svg>
                  </span>
                  <div className="story-text text-right lg:max-w-[95%]">
                    <span className="date">11/01/2025</span>
                    <h3>{t("subTitle4")}</h3>
                    <p>{t("paragraph4")}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full lg:order-2 order-1">
                  <StoryImage
                    idx={3}
                    imgSrc="/story-image-4.jpg"
                    className="img-holder right-align-img"
                  />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="lg:ml-auto lg:w-1/2 w-full text-holder">
                  <div className="round-shape-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <h5>{t("end")}</h5>
          <h3>From Minh & Thư, with love ❤️</h3>
        </div>
      </section>
    </div>
  );
};

export default OurStory;

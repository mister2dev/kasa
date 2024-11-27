import React from "react";

const Banner = ({ children, bannerType }) => {
  const bannerClass = bannerType === "about" ? "banner-about" : "banner-home";

  return <section className={`banner ${bannerClass}`}>{children}</section>;
};

export default Banner;

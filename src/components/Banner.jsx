import React from "react";

const Banner = ({ children, type }) => {
  return <section className={`banner banner-${type}`}>{children}</section>;
};

export default Banner;

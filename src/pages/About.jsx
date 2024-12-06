import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutArray from "../data/aboutArray";

const About = () => {
  return (
    <div>
      <Banner type="about" />

      <div className="about">
        {aboutArray.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
// import Datas from '../data/logements.json'

const Home = () => {
  return (
    <div>
      <Banner bannerType="home">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="gallery">
        {/* {Datas.map ((data) => {
          return <Card key={data.id} />
        })} */}
        <Card />
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Card from '../components/Card';
import Datas from '../data/logements.json'

const Home = () => {
  return (
    <div>
      <section className="banner">
        <h1>
        Chez vous, partout et ailleurs
        </h1>
      </section>
      <div className="gallery">
        {/* {Datas.map ((data) => {
          return <Card key={data.id} />
        })} */}
        <Card/>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Yeh-Meri-Family-S2_V11._CB588519479_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61H20CIiU9L._AC_UY218_.jpg"
            rating={1}
          />
          <Product
            id="24232"
            title="AGARO Royal Stand Mixer 1000W with 5L SS Bowl and 8 Speed Setting I Includes Whisking Cone, Mixing Beater & Dough Hook, and Splash Guard, 2 Years Warranty, (Black)
            4.2 out of 5 stars 979"
            price={30.99}
            image="https://m.media-amazon.com/images/I/71trhOsnpnS._AC_UY218_.jpg"
            rating={1}
          />
        </div>
        <div className="home_row">
          <Product
            id="3866"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"
            price={30.99}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            rating={1}
          />
          <Product
            id="42146"
            title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Alexa Built-in, Carbon/Graphite, One Size (S & L Bands Included)"
            price={30.99}
            image="https://m.media-amazon.com/images/I/71IqWwSIxwL._AC_UL320_.jpg"
            rating={1}
          />
          <Product
            id="505237"
            title="Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Purple (5th Generation)"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61k05QwLuML._AC_UY218_.jpg"
            rating={1}
          />
        </div>
        <div className="home_row">
          <Product
            id="6215465"
            title="VW 80 cm (32 inches) Frameless Series HD Ready LED TV VW32A (Black)"
            price={667.99}
            image="https://m.media-amazon.com/images/I/714MfYgM9rL._AC_UY218_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

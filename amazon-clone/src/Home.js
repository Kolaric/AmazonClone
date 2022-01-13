import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container ">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:
            ANd9GcQmITsDg8CE9tqmTwWGdsa2HCoWGi9HNnY6rAbT4XgKPfFOTKja
            -s0joeXQOJsHhmulb0ORWeID&usqp=CAc"
            rating={5}
          />
          <Product
            id="2"
            title="Dreaming Wapiti Bettbezug-Set, 100 % gewaschene Mikrofaser, 3-teilig, einfarbig"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61JRrtXVAvL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Etekcity digitale Multifunktions-Küchenwaage"
            price="17.99"
            image="https://images-na.ssl-images-amazon.com/images/I/7157x4p8zTL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="The KN95 Gesichtsmasken, 30 Packungen Einzeln verpackt"
            price="21.02"
            image="https://images-na.ssl-images-amazon.com/images/I/71PODr9Rj%2BL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Tragbare Kaffeemaschine, kompatibel mit K-Cup und gemahlenem Kaffee"
            price="129.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61wrh3oAaAL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Skyworth E20300 40 Zoll 1080P Full HD Smart TV LED Android TV mit Voice Remote"
            price="249.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61lJa-K8CqL._AC_SL1001_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

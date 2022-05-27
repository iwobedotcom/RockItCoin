import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { test01, test02, test03, test04 } from ".";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <div className="rockitcoins__testimonial section__padding">
      <div className="rockitcoins__testimonial__heading">
        <h1 className="gradient__text">Testimonials</h1>
        <p>
          Culpa culpa amet reprehenderit adipisicing ad commodo adipisicing.
        </p>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={test01} alt="testimonial" />
          <div className="rockitcoins__testimonial__carousel">
            <h3 className="gradient__text">Jude Law</h3>
            <h4>Designer</h4>
            <p>
              Magna aliqua in qui aliquip anim veniam nisi dolore fugiat cillum
              culpa. Eiusmod laboris id et minim irure tempor id est non
              pariatur commodo.
            </p>
          </div>
        </div>
        <div>
          <img src={test02} alt="testimonial" />
          <div className="rockitcoins__testimonial__carousel">
            <h3 className="gradient__text">Natalie Portman</h3>
            <h4>Accountant</h4>
            <p>
              Qui laboris occaecat id amet commodo est incididunt occaecat ex
              aliqua cillum. Eiusmod non irure sit occaecat aute deserunt nulla
              et sint.
            </p>
          </div>
        </div>
        <div>
          <img src={test04} alt="testimonial" />
          <div className="rockitcoins__testimonial__carousel">
            <h3 className="gradient__text">Khadijah Thomas</h3>
            <h4>Model</h4>
            <p>
              Eiusmod dolore ipsum commodo exercitation anim culpa do ipsum
              exercitation nulla. Eu laboris voluptate commodo.
            </p>
          </div>
        </div>
        <div>
          <img src={test03} alt="testimonial" />
          <div className="rockitcoins__testimonial__carousel">
            <h3 className="gradient__text">Amadou Keita</h3>
            <h4>Artist</h4>
            <p>
              Eu deserunt sunt sunt ea sunt velit id nisi quis. Sunt culpa ad
              magna cupidatat. Laborum aliquip incididunt culpa ex.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

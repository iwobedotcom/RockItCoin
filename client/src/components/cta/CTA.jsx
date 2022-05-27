import React from "react";
import { BiGlobe, BiAbacus, BiMale } from "react-icons/bi";
import "./cta.css";

const factData = [
  { number: "60", text: "Support Countries", icon: <BiGlobe /> },
  { number: "12K", text: "Transaction Per Hour", icon: <BiAbacus /> },
  { number: "13", text: "Years of Experience", icon: <BiMale /> },
];

function Fact({ number, text, icon }) {
  return (
    <div className="rockitcoins__cta__fact">
      <h2>{number}</h2>
      <p>{text}</p>
      <span>{icon}</span>
    </div>
  );
}

export default function CTA() {
  return (
    <div className="rockitcoins__cta section__padding">
      <div className="rockitcoins__cta__container">
        {factData.map((item, index) => (
          <Fact
            number={item.number}
            text={item.text}
            icon={item.icon}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

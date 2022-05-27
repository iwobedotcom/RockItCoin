import React from "react";
import {
  AiOutlineMobile,
  AiOutlineSafety,
  AiOutlineWallet,
  AiOutlinePhone,
} from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { RiExchangeFundsLine } from "react-icons/ri";
import "./services.css";

const featureData = [
  {
    icon: <AiOutlineMobile />,
    title: "Mobile App",
    message:
      "Aliqua quis ullamco proident enim adipisicing do ut laboris esse. Culpa commodo nostrud amet et incididunt ex ea amet sit cupidatat.",
  },

  {
    icon: <AiOutlineSafety />,
    title: "Safe & Secure",
    message:
      "Et esse exercitation elit ad. Commodo aliqua nulla eiusmod velit et irure sint dolore enim ullamco ea id. Ea dolor deserunt magna aliqua.",
  },
  {
    icon: <AiOutlineWallet />,
    title: "Wallet",
    message:
      "Cupidatat pariatur ea in ea sunt fugiat est culpa fugiat laboris nostrud. Et excepteur mollit sunt mollit veniam ea officia sint.",
  },
  {
    icon: <AiOutlinePhone />,
    title: "Urgent Support",
    message:
      "Qui aliqua est excepteur Lorem aute reprehenderit. Commodo reprehenderit aute culpa ad. Quis eiusmod eu veniam in aliquip commodo.",
  },
  {
    icon: <RiExchangeFundsLine />,
    title: "Instant Exchange",
    message:
      "Eiusmod occaecat veniam aliquip eiusmod enim sit sunt amet aliquip pariatur exercitation. Voluptate ad aute anim reprehenderit mollit.",
  },
  {
    icon: <BiTransfer fontSize={48} />,
    title: "Recuring Transfers",
    message:
      "Dolore sit amet incididunt deserunt culpa ad est deserunt. Nulla id id irure ex sint velit excepteur consequat enim reprehenderit.",
  },
];

function Feature({ icon, title, message }) {
  return (
    <div className="rockitcoins__services__feature__container">
      <div className="rockitcoins__services__feature__container__icon">
        <span>{icon}</span>
      </div>
      <div className="rockitcoins__services__feature__container__title">
        <h1 className="gradient__text">{title}</h1>
      </div>
      <div className="rockitcoins__services__feature__container__message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="rockitcoins__services section__padding">
      <div className="rockitcoins__services__heading">
        <h1 className="gradient__text">Features</h1>
        <p>Magna id nisi duis velit et excepteur do ex labore.</p>
      </div>

      <div className="rockitcoins__services__container">
        <div className="rockitcoins__services__container__features">
          {featureData.map((item, index) => (
            <Feature
              icon={item.icon}
              title={item.title}
              message={item.message}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

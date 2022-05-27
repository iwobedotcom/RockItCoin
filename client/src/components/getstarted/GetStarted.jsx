import React from "react";
import {
  RiFileTransferLine,
  RiInstallLine,
  RiWallet2Line,
} from "react-icons/ri";
import "./getstarted.css";

const getStartedData = [
  {
    icon: <RiInstallLine />,
    title: "Install MetaMask",
    message:
      "Incididunt commodo esse laboris aliqua occaecat. Ea aliqua quis enim tempor enim consectetur nisi.",
  },
  {
    icon: <RiWallet2Line />,
    title: "Connect Your Wallet",
    message:
      "Consequat Lorem enim eu consequat adipisicing proident sint consequat dolor qui quis dolore sunt.",
  },
  {
    icon: <RiFileTransferLine />,
    title: "Send & Receive Coins",
    message:
      "Tempor aliquip id laborum nostrud sint mollit ipsum magna eu ut aliquip minim ipsum pariatur.",
  },
];

function GetStartedCard({ icon, title, message }) {
  return (
    <div className="rockitcoins__getstarted__card__container">
      <div className="rockitcoins__getstarted__card__icon">
        <span>{icon}</span>
      </div>
      <div className="rockitcoins__getstarted__card__title">
        <h1 className="gradient__text">{title}</h1>
      </div>
      <div className="rockitcoins__getstarted__card__message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <div className="rockitcoins__getstarted section__padding">
      <div className="rockitcoins__getstarted__heading">
        <h1 className="gradient__text">Get Started With RockItCoins</h1>
        <p>Magna sunt culpa voluptate exercitation aute.</p>
      </div>

      <div className="rockitcoins__getstarted__container">
        <div className="rockitcoins__getstarted__container__card">
          {getStartedData.map((item, index) => (
            <GetStartedCard
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

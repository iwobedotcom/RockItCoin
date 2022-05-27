import React from "react";
import "./footer.css";
import unityLogo from "../../assets/logo/logo.svg";
import { appstore, playstore } from ".";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="rockitcoins__footer section__padding">
      <div className="rockitcoins__footer__links">
        <div className="rockitcoins__footer__links__logo">
          <img src={unityLogo} alt="logo" />
          <p>
            Culpa excepteur excepteur et Lorem exercitation veniam dolor
            voluptate eiusmod ea.
          </p>
          <span>
            <img src={appstore} alt="appstore" />
            <img src={playstore} alt="playstore" />
          </span>
        </div>

        <div className="rockitcoins__footer__links__div">
          <h4>Resources</h4>
          <p>How to transfer Coin</p>
          <p>Coin Overview</p>
          <p>Market News</p>
          <p>Market Rates</p>
          <p>Customization</p>
        </div>

        <div className="rockitcoins__footer__links__div">
          <h4>Quick Links</h4>
          <p>Network Stats</p>
          <p>Block Explorers</p>
          <p>Governance</p>
          <p>Exchange Market</p>
          <p>FAQ</p>
        </div>

        <div className="rockitcoins__footer__links__socials">
          <h4>Follow Us</h4>
          <div>
            <p>
              <FaFacebook color="#3e70d0" />
            </p>
            <p>
              <FaGooglePlus color="#ff003a" />
            </p>
            <p>
              <FaInstagram color="#c48550" />
            </p>
            <p>
              <FaTwitter color="#00acf3" />
            </p>
          </div>
        </div>
      </div>

      <div className="rockitcoins__footer__copyright">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
}

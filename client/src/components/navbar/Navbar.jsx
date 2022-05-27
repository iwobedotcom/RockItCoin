import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import unityLogo from "../../assets/logo/logo.svg";
import "./navbar.css";

function Menu() {
  return (
    <>
      <p>
        <a href="#">Market</a>
      </p>
      <p>
        <a href="transactions">Transactions</a>
      </p>
      <p>
        <a href="#">Exchange</a>
      </p>
      <p>
        <a href="#">Wallet</a>
      </p>
    </>
  );
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="rockitcoins__navbar">
      <div className="rockitcoins__navbar__links">
        <div className="rockitcoins__navbar__links__logo">
          <img src={unityLogo} alt="logo" />
        </div>
        <div className="rockitcoins__navbar__links__menu">
          <Menu />
        </div>
      </div>

      <div className="rockitcoins__navbar__download">
        <button type="button">Download App</button>
      </div>

      <div className="rockitcoins__navbar__dropmenu">
        {toggleMenu ? (
          <IoMdClose
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt3
            color="#fff"
            fontWeight="800"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="rockitcoins__navbar__dropmenu__container scale__up__center">
            <div className="rockitcoins__navbar__dropmenu__links__container">
              <Menu />

              <div className="rockitcoins__navbar__dropmenu__links__container__download">
                <button type="button">Download App</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

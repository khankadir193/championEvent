import React, { useContext, useState } from "react";
import "../styles/header.scss";
import { AppContext } from "../AppContext";
import LanguageDropdown from "./LanguageDropdown";
import headerImg from "../assets/images/battle/header.png";

const Header = () => {
  const { selectedLng, changeLanguage } = useContext(AppContext);

  return (
    <div className="header">
      <LanguageDropdown
        selectedLanguage={selectedLng}
        changeLanguage={changeLanguage}
      />
      {/* <img src={headerImg} /> */}
    </div>
  );
};

export default Header;

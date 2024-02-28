import React, { useContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import CommonButton from "./components/CommonButton";
import BattleTab from "./layout/Tabs/BattleTab";
import LuckyPlayer from "./layout/Tabs/LuckyPlayer";
import TalentTour from "./layout/Tabs/TalentTour";
import ScrollToTopButton from "./components/ScrollToTopButton";
import EventGifting from "./layout/Popups/EventGifting";
import Guide from "./layout/Popups/Guide";
import { AppContext } from "./AppContext";
import giftImage from './assets/images/battle/event-gifting-btn.png'
import guidImage from './assets/images/battle/guide-btn.png'


function App() {
  const { disableAll } = useContext(AppContext);
  const [mainTabs, setMainTabs] = useState({
    battle: false,
    luckyPlayer: true,
    talentTour: false,
  });
  const [eventGifting, setEventGifting] = useState(false);
  const [guide, setGuide] = useState(false);

  const toggleEventGifitng = () => {
    setEventGifting((prevState) => !prevState);
  };
  const toggleGuide = () => {
    setGuide((prevState) => !prevState);
  };

  const toggleMainTabs = (name) => {
    setMainTabs({
      battle: name === "battle",
      luckyPlayer: name === "lucky-player",
      talentTour: name === "talent-tour",
    });
  };

  return (
    <div className="App">
      <Header />

      <div>
        {/* Render the first CommonButton component for the guide */}
        <div className="guide-btn-wrap">
          <CommonButton
            btnImg={guidImage} // Specify the btnImg prop for the guide button
            width="21vw" // Set the width of the button
            handleClick={toggleGuide} // Pass the toggleGuide function as the handleClick prop
          />
        </div>

        {/* Render the second CommonButton component for event gifting */}
        <div className="event-gifting-wrap">
          <CommonButton
            btnImg={giftImage} // Specify the btnImg prop for the event gifting button
            width="27vw" // Set the width of the button
            handleClick={toggleEventGifitng} // Pass the toggleEventGifitng function as the handleClick prop
          />
        </div>
      </div>

      <div>
        <div className="main-tabs">
          {/* Lucky Player tab button */}
          <button
            className={`main-tab-button ${!mainTabs.luckyPlayer && "hide"}`} // Apply hide class if luckyPlayer tab is not active
            onClick={() => toggleMainTabs("lucky-player")} // Handle click event to toggle to lucky-player tab
            style={{ left: "2vw" }} // Set left position style
            disabled={disableAll} // Disable button if disableAll is true
          >
            LUCKY PLAYER
          </button>

          {/* RPS Champs tab button */}
          <button
            className={`main-tab-button ${!mainTabs.battle && "hide"}`} // Apply hide class if battle tab is not active
            onClick={() => toggleMainTabs("battle")} // Handle click event to toggle to battle tab
            style={{ left: "-0vw" }} // Set left position style
            disabled={disableAll} // Disable button if disableAll is true
          >
            RPS CHAMPS
          </button>

          {/* Talent Tour tab button */}
          <button
            className={`main-tab-button ${!mainTabs.talentTour && "hide"}`} // Apply hide class if talentTour tab is not active
            onClick={() => toggleMainTabs("talent-tour")} // Handle click event to toggle to talent-tour tab
            style={{ left: "3vw" }} // Set left position style
            disabled={disableAll} // Disable button if disableAll is true
          >
            TALENT TOUR
          </button>
        </div>
      </div>


      {mainTabs.battle ? <BattleTab /> :
        mainTabs.luckyPlayer ? <LuckyPlayer /> :
          <TalentTour />}

      <p className="rights golden-text">All rights reserved by streamkar</p>

      <ScrollToTopButton />

      {eventGifting && <EventGifting popUpHandler={toggleEventGifitng} />}
      {guide && <Guide clickHandler={toggleGuide} />}
    </div>
  );
}

export default App;

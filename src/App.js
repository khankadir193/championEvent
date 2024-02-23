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

      <div className="guide-btn-wrap">
        <CommonButton
          btnImg="guide"
          width="21vw"
          handleClick={toggleGuide}
        />
      </div>
      <div className="event-gifting-wrap">
        <CommonButton
          btnImg="event-gifting-btn"
          width="27vw"
          handleClick={toggleEventGifitng}
        />
      </div>

      <div>
        <div className="main-tabs">
          <button
            className={`main-tab-button ${!mainTabs.luckyPlayer && "hide"}`}
            onClick={() => toggleMainTabs("lucky-player")}
            style={{ left: "2vw" }}
            disabled={disableAll}
          >
            LUCKY PLAYER
          </button>
          <button
            className={`main-tab-button ${!mainTabs.battle && "hide"}`}
            onClick={() => toggleMainTabs("battle")}
            style={{ left: "-0vw" }}
            disabled={disableAll}
          >
            RPS CHAMPS
          </button>
          <button
            className={`main-tab-button ${!mainTabs.talentTour && "hide"}`}
            onClick={() => toggleMainTabs("talent-tour")}
            style={{ left: "3vw" }}
            disabled={disableAll}
          >
            TALENT TOUR
          </button>
        </div>
      </div>

      {mainTabs.battle ? (
        <BattleTab />
      ) : mainTabs.luckyPlayer ? (
        <LuckyPlayer />
      ) : (
        <TalentTour />
      )}
      <p className="rights golden-text">All rights reserved by streamkar</p>

      <ScrollToTopButton />

      {eventGifting && <EventGifting popUpHandler={toggleEventGifitng} />}
      {guide && <Guide clickHandler={toggleGuide} />}
    </div>
  );
}

export default App;

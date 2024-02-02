import "./About.css";
import React from "react";
import CodingPic from "./assets/coding.jpg";
import GymPic from "./assets/gympic.jpg";
import GamingPic from "./assets/GamingPic.jpg";
import Gavle from "./assets/Gavle.jpg";
import { connect } from "react-redux";


function About({ selectedFont }) {
  return (
    <div className={`font-${selectedFont}`}>
      <article className="TxtAboutMe">
        <div className="PicAndTxt">
          <div className="Pic">
            <img src={CodingPic} alt="Coding-picture" />
          </div>
          <div className="Txt">
            <h2>CODING</h2>
            <p>
              Jag började koda 2021 för första gången i Gymnasiet, och ända sen
              det har jag blivit fast. Det roligaste med kod är att designa och
              positionera. Nyligen så har vi börjat med React.js och det har
              varit riktigt spännande och jag ser fram emot att lära mig mer.
            </p>
          </div>
        </div>

        <div className="PicAndTxt">
          <div className="Pic">
            <img src={GymPic} alt="Pitcure on a gym" />
          </div>
          <div className="Txt">
            <h2>GYM</h2>
            <p>
              Att dra till gymmet har blivit en rutin ända sen förra året då jag
              startade. Brukar köra några gånger då och då i veckan och det
              räcker för att hålla både hjärnan och kroppen frisk. Gymmet
              balanserar också ut det stillasittandet man gör när man kodar.
            </p>
          </div>
        </div>

        <div className="PicAndTxt">
          <div className="Pic">
            <img src={GamingPic} alt="Coding-picture" />
          </div>
          <div className="Txt">
            <h2>GAMES</h2>
            <p>
              Data-spel är det som har fått mig att blivit intresserad av
              datorer och kodning. Jag har spelat ända sen jag var liten, och
              har spelat lite allt möjligt. Skjutspel är nog min favorit genre
              där counter-strike, overwatch och fortnite är de jag har kört
              mest. Men jag gillar även plattformspel som Super Mario.
            </p>
          </div>
        </div>

        <div className="PicAndTxt">
          <div className="Pic">
            <img src={Gavle} alt="Coding-picture" />
          </div>
          <div className="Txt">
            <h2>OTHER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam ipsa molestias eligendi, voluptates inventore dolor fuga molestiae maiores commodi consectetur itaque at ducimus nulla incidunt. Consectetur culpa nesciunt consequuntur!</p>
          </div>
        </div>
      </article>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedFont: state.selectedFont,
});

export default connect(mapStateToProps)(About);

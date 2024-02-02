import React from "react";
import "./MyWork.css";
import "./Carousel.css";
import Carousel from "./Carousel";
import Memory from "./assets/MemoryGame.jpg";
import Memory2 from "./assets/MemoryGame2.jpg";
import Memory3 from "./assets/MemoryGame3.jpg";
import SFsc from "./assets/SFsc.jpg";
import SFsc2 from "./assets/SFsc2.jpg";
import SFsc3 from "./assets/SFsc3.jpg";
import SFsc4 from "./assets/SFsc4.jpg";
import { connect } from "react-redux";

function MyWork({ selectedFont }) {
  const images2 = [Memory2, Memory, Memory3];
  const images = [SFsc, SFsc4, SFsc3, SFsc2];

  return (
    <div className={`font-${selectedFont}`}>
      <div className="My-Work">
        <div className="Work">
          <h2>MEMORY GAME</h2>
          <p>
            Detta är det memory spelet med djur-tema jag gjorde i den första JS
            kursen. Med denna uppgiften fick vi lära oss att hålla på med
            grunderna av Javascript. Men framförallt funktioner, for loopar och
            metoden query selector för att kommunicera med html. Spelet:
            <a href="https://jenssscn.github.io/AnimalMemory/"> Click here!</a>
          </p>
          <div className="CarouselImages">
            <Carousel images={images2} />
          </div>
        </div>

        <div className="Work">
          <h2>WEBSITE CLONE</h2>
          <p>
            Detta var en av de första uppgifterna vi fick. Målet var att vi
            skulle välja vilken hemsida som helst och sen försöka att koda en
            exakt likadan. Denna uppgift var mest som träning för att vi skulle
            bli mer vana med html och css. <br />
            Originalsidan:
            <a href="https://svenskafonster.se/?utm_term=sp%20f%C3%B6nster%20pris&utm_campaign=Varum%C3%A4rke+%7C+Search&utm_source=adwords&utm_medium=ppc">
              Click here!
            </a>
            Min Sida:
            <a href="https://jenssscn.github.io/Clone/">Click Here!</a>
          </p>
          <div className="CarouselImages">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedFont: state.selectedFont,
});

export default connect(mapStateToProps)(MyWork);

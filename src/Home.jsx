import "./Home.css";
import React from "react";
import Code1 from "./assets/code1.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home({ selectedFont }) {
  return (
    <div className={`font-${selectedFont}`}>
      <div className="Home">
        <div className="HomeTxt">
          <p>Hej och välkommen!</p>
          <h1>Mitt namn är Jens!</h1>
          <h3>
            Detta är hemsidan om mig. Här kan du vet lite om hur jag är som
            person, vad jag gör om dagarna och se vad jag har kodat på
            lektionerna.{" "}
          </h3>
          <Link to="/Contact" className="HomeBtn">
            CONTACT ME
          </Link>
        </div>

        <div className="HomePic">
          <img src={Code1} alt="placeholder-image" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedFont: state.selectedFont,
});

export default connect(mapStateToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import { toggleFont } from "./actions";
import "./FontSelector.css"; 

const FontSelector = ({ selectedFont, toggleFont }) => {
  return (
    <div>
      <button className={`font-${selectedFont}`} onClick={toggleFont}>TOGGLE FONT {selectedFont === "font1" }</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedFont: state.selectedFont,
});

const mapDispatchToProps = {
  toggleFont,
};

export default connect(mapStateToProps, mapDispatchToProps)(FontSelector);

const initialState = {
  selectedFont: "font1",
};

const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FONT":
      return {
        ...state,
        selectedFont: state.selectedFont === "font1" ? "font2" : "font1",
      };
    default:
      return state;
  }
};

export default fontReducer;

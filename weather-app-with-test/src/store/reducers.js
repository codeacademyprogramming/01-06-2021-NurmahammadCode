import { SET_WEATHER_CITY } from "./constants";

const initialState = {
  weathers: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_WEATHER_CITY) {
    let copyWeathers = [...state.weathers];
    copyWeatchers = copyWeathers.push(action.payload);
    return { ...state, weathers: copyWeathers };
  }
  return state;
}

export default rootReducer;

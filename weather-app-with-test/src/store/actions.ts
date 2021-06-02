import axios from "axios";
import { SET_WEATHER_CITY } from "./constants";

export function getWeatherByCity(cityName: any[]) {
  return (dispatch: (arg0: { type: string; payload: any; }) => any) => {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09983870765a69117023cc37e297f1f2`
      )
      .then((response: { data: any; }) => {
        return dispatch({ type: SET_WEATHER_CITY, payload: response.data });
      })
      .catch((error: any) => console.error(error));
  };
}

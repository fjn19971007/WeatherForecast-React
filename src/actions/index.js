import axios from 'axios';

const API_KEY = '702718140893bfcc974a6197b422e459';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // axios (AJAX request) return a promise. Doesn't contain data

  return {
    type: FETCH_WEATHER,
    payload: request  // return promise as the payload
  };
}
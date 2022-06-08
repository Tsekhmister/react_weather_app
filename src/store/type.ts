export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
  id: number;
  main: string;
  descrition: string;
  icon: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number; 
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  name: string;
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  }
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  }
}
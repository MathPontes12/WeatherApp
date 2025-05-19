import { createContext } from "react";
import { WeatherContextProps } from "./WeatherType";

const contextWeather = createContext<WeatherContextProps | undefined>(undefined);

export default contextWeather;
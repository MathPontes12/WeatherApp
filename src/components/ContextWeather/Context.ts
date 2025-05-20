import { createContext } from "react";
import { WeatherContextProps } from "./WeatherType";

//CRIAÇÃO DO CONTEXT

const contextWeather = createContext<WeatherContextProps | undefined>(undefined);

export default contextWeather;
import { Dispatch, ReactNode, SetStateAction } from "react";


export interface ForeCastProps{
    description: string;
    min: number;
    max: number;
    rain: number;
    rain_probability: number;
    humidity: number;
    weekday: string;
}

export interface WeatherArrayProps {
    city: string;
    temp: number;
    forecast: ForeCastProps[];
    currently: string;
}

export interface WeatherContextProps {
    weather: WeatherArrayProps | null;
    setWeather: Dispatch<SetStateAction<WeatherArrayProps | null>>;
    nome: string;
    setNome: Dispatch<SetStateAction<string>>;
}

export interface WeatherProps {
    children: ReactNode;
}
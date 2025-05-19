'use client';

import { useEffect, useState } from "react";
import contextWeather from "./Context";
import { WeatherArrayProps, WeatherProps } from "./WeatherType";


// PRIMEIRO PASSO: IMPORTAR CHAVE
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const WeatherProvider = ({ children }: WeatherProps) => {


    // SEGUNDO PASSO: CRIAR ESTADO PRA ARMAZENAR OS DADOS DA API
    const [weather, setWeather] = useState<WeatherArrayProps | null>(null);
    const [nome, setNome] = useState('Rio de Janeiro')


    // TERCEIRO PASSO: USEEFFECT PRA RENDERIZAR A CHAMADA DA API
    useEffect(() => {

        // QUARTO PASSO: CHAMADA DA API
        const fetchData = async () => {

            try {
                // QUINTO PASSO: RES PRA REQUISITAR A API, E data PRA ARMAZENAR A RESPOSTA
                const res = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${nome}`);
                const data = await res.json();
                setWeather(data.results)

            } catch (error) {
                console.log('dados da API não encontrados', error)
            }
        }

        fetchData()

    }, [nome])

    return (
        <contextWeather.Provider value={{ weather, setWeather, nome, setNome }}>
            {children}
        </contextWeather.Provider>


    )
}

export default WeatherProvider
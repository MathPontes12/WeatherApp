'use client';

import { useContext } from "react";
import MiniCard from "./MiniCard"
import contextWeather from "../ContextWeather/Context";


const SubCard = () => {

    //CHAMADA DO CONTEXT
    const context = useContext(contextWeather)

    if (!context) return null;

    // DIV COM OS CARDS PEQUENOS DE PREVISAO DO TEMPO
    return(

        <div className="bg-bgCard xl:w-full w-fit flex xl:flex-row flex-col place-self-center py-[20px] px-[15px] rounded-[20px] xl:gap-0 gap-[20px]">

            <MiniCard 
            diaDaSemana={context?.weather?.forecast[1]?.weekday} 
            tempoNoDia={context?.weather?.forecast[1]?.description}
            Min={context?.weather?.forecast[1]?.min}
            Max={context?.weather?.forecast[1]?.max}
            />
            <MiniCard 
            diaDaSemana={context?.weather?.forecast[2]?.weekday} 
            tempoNoDia={context?.weather?.forecast[2]?.description}
            Min={context?.weather?.forecast[2]?.min}
            Max={context?.weather?.forecast[2]?.max}
            />
            <MiniCard 
            diaDaSemana={context?.weather?.forecast[3]?.weekday} 
            tempoNoDia={context?.weather?.forecast[3]?.description}
            Min={context?.weather?.forecast[3]?.min}
            Max={context?.weather?.forecast[3]?.max}
            />
            <MiniCard 
            diaDaSemana={context?.weather?.forecast[4]?.weekday} 
            tempoNoDia={context?.weather?.forecast[4]?.description}
            Min={context?.weather?.forecast[4]?.min}
            Max={context?.weather?.forecast[4]?.max}
            />

        </div>

    )
}

export default SubCard
'use client'

import { useContext } from "react";
import contextWeather from "../ContextWeather/Context";
import Temperature from "../Temperature/Temperature";
import RainHumidity from "../RainHumidity/RainHumidity";
import Image from "next/image";


const MainCard = () => {

    const context = useContext(contextWeather)

    if (!context) return null;

    return (

        <div className="bg-bgCard w-full flex flex-col place-self-center py-[20px] px-[30px] rounded-[20px]">

            <h1 className="text-white text-[28px]">Hoje</h1>

            <div className="flex items-center gap-[80px] px-[50px]">
                
                <Image
                    width={150}
                    height={150}
                    priority
                    loading="eager"
                    className="opacity-70"
                    src={`/images/${context?.weather?.forecast[0]?.description}-${context?.weather?.currently}.svg`}
                    alt="Icone do tempo/clima"
                />

                <div className="flex flex-col">
                    <h1 className="text-white text-[36px] place-self-end mb-[60px] mt-[-40px]">{context?.weather?.city}</h1>

                    <div className="flex items-center justify-self-start gap-[40px]">

                        <Temperature
                            tempDescricao={context?.weather?.forecast[0]?.description}
                            tempAtual={context?.weather?.temp}
                            tempMin={context?.weather?.forecast[0]?.min}
                            tempMax={context?.weather?.forecast[0]?.max}
                        />
                        <RainHumidity
                            rainPercent={context?.weather?.forecast[0]?.rain_probability}
                            humidity={context?.weather?.forecast[0]?.humidity}
                        />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default MainCard
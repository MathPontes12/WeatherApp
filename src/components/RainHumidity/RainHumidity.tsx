/* eslint-disable @next/next/no-img-element */

import { RainPercentProps } from "./RainPercentType"


const RainHumidity = ({ rainPercent, humidity }: RainPercentProps) => {
    return (
        <div className="flex xl:flex-col items-center text-white mb-[20px] gap-[10px] w-full justify-center">
            <div className="flex items-center gap-[5px]">
                <img src='/images/Chuva.png' alt="Icone de precipitação" className="opacity-80 xl:w-[70px] h-auto" />
                <p className="text-[20px]">{rainPercent}%</p>

            </div>
            <div className="flex text-[20px] items-center xl:pl-[22px] xl:gap-[20px] gap-[5px]">
                <img src='/images/Umidade.png' alt="Icone de umidade" className="opacity-80 xl:w-[40px] h-auto" />
                <p className="text-[20px] ">{humidity}%</p>
            </div>
        </div>
    )
}

export default RainHumidity
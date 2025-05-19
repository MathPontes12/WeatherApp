import Image from "next/image"
import { RainPercentProps } from "./RainPercentType"


const RainHumidity = ({ rainPercent, humidity }:RainPercentProps) => {
    return(
        <div className="flex items-center text-white mb-[20px] gap-[10px] w-full">
            <div className="flex flex-col items-center gap-[5px]">
                <Image width={120} height={120} priority src='/images/Chuva.png' alt="Icone do tempo/clima"  className="opacity-80"/>
                <Image width={40} height={40} priority src='/images/Umidade.png' alt="Icone do tempo/clima"  className="opacity-80"/>
                
            </div>
            <div className="flex flex-col gap-[60px] mt-[30px] text-[20px]">
                <p>{rainPercent}%</p>
                <p>{humidity}%</p>
            </div>
        </div>
    )
}

export default RainHumidity
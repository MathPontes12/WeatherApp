import Image from "next/image";
import { MiniCardProps } from "./MiniCardType";


const MiniCard = ({ diaDaSemana, tempoNoDia, Min, Max }: MiniCardProps) => {


    

    return (
        <div className="bg-bgSubCard w-full flex flex-col place-self-center 
                mx-[15px] py-[20px] px-[30px] rounded-[20px] text-white gap-[7px]">
            <h1 className="text-[20px]"> {diaDaSemana} </h1>
            <Image
                width={150}
                height={150}
                priority
                loading="eager"
                className="opacity-70"
                src={`/images/${tempoNoDia}-dia.svg`}
                alt="Icone do tempo/clima"
            />
             <div className="flex place-self-center">
                <p className="text-[16px]  text-[#046DFF]">{Min}</p>
                <p className="text-[10px] text-[#046DFF]">°C</p>
                <p className="text-[18px] mx-[6px]">/</p>
                <p className="text-[16px] text-[#B50000]" >{Max}</p>
                <p className="text-[10px] text-[#B50000]">°C</p>
            </div>
        </div>
    )
}

export default MiniCard
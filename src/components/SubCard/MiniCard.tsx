/* eslint-disable @next/next/no-img-element */

import { MiniCardProps } from "./MiniCardType";


const MiniCard = ({ diaDaSemana, tempoNoDia, Min, Max }: MiniCardProps) => {

    // COMPONENTE DO CARD PEQUENO DE PREVISAO DO TEMPO, COM DIA DA SEMANA, ICONE DO TEMPO, E TEMP MAX E MIN
    return (
        <div className="bg-bgSubCard w-full flex xl:flex-col place-self-center xl:items-start items-center 
                xl:mx-[15px] py-[20px] px-[30px] rounded-[20px] text-white xl:gap-[7px] mx-auto gap-[30px]">
            <h1 className="xl:text-[20px] text-[22px]"> {diaDaSemana} </h1>
            <img
                className="opacity-70 xl:w-[80px] w-[70px] h-auto"
                src={`/images/${tempoNoDia}-dia.svg`}
                alt="Icone do tempo/clima"
            />
            <div className="flex xl:flex-row flex-col place-self-center">
                <div className="flex">
                    <p className="xl:text-[16px] text-[22px] text-[#B50000]" >{Max}</p>
                    <p className="xl:text-[10px] text-[#B50000]">°C</p>
                    <p className="text-[18px] mx-[6px] xl:block hidden">/</p>
                </div>
                <div className="flex">
                    <p className="xl:text-[16px] text-[22px] text-[#046DFF] ">{Min}</p>
                    <p className="xl:text-[10px] text-[#046DFF]">°C</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCard
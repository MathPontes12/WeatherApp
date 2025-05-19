import { TemperatureProps } from "./TemperatureType"


const Temperature = ({ tempAtual, tempMin, tempMax, tempDescricao }: TemperatureProps) => {
    return (

        <div className="flex flex-col text-white w-full">
            <p className="text-[20px] absolute top-[200px]">{tempDescricao}</p>
            <div className="flex">
                <p className="text-[70px]">{tempAtual}</p>
                <p className="text-[30px]">°C</p>
            </div>
            <div className="flex">
                <p className="text-[24px]  text-[#046DFF]">{tempMin}</p>
                <p className=" text-[#046DFF]">°C</p>
                <p className="text-[24px] mx-[6px]">/</p>
                <p className="text-[24px] text-[#B50000]" >{tempMax}</p>
                <p className=" text-[#B50000]">°C</p>
            </div>
        </div>

    )
}

export default Temperature
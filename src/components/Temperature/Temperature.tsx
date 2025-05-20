import { TemperatureProps } from "./TemperatureType"


const Temperature = ({ tempAtual, tempMin, tempMax, tempDescricao }: TemperatureProps) => {
    return (

        <div className="flex flex-col text-white w-full xl:gap-0 gap-[20px]">
            <p className="text-[20px] xl:absolute xl:top-[200px] place-self-center xl:place-self-start">{tempDescricao}</p>
            <div className="flex xl:place-self-start place-self-center">
                <p className="xl:text-[70px] text-[60px]">{tempAtual}</p>
                <p className="xl:text-[30px] ">°C</p>
            </div>
            <div className="flex xl:place-self-start place-self-center xl:mt-0 mt-[-30px]">
                <p className="text-[24px] text-[#B50000]" >{tempMax}</p>
                <p className=" text-[#B50000]">°C</p>
                <p className="text-[24px] mx-[6px]">/</p>
                <p className="text-[24px]  text-[#046DFF]">{tempMin}</p>
                <p className=" text-[#046DFF]">°C</p>
            </div>
        </div>

    )
}

export default Temperature
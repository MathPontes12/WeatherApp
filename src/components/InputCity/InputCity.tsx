/* eslint-disable @next/next/no-img-element */
'use client'

import { useContext, useEffect, useState } from "react";
import contextWeather from "../ContextWeather/Context";


const InputCity = () => {

    // ESTADO PARA ARMAZENAR O VALOR SELECIONADO
    const [selecionado, setSelecionado] = useState('')

    // CHAMADA DO CONTEXT
    const context = useContext(contextWeather)

    // MUDANÇA PARA ARMAZENAR O VALOR SELECIONADO NO ESTADO
    useEffect(() => {
   
      context?.setNome(selecionado);
   
  }, [selecionado, context]);

   if (!context) return null;

    return (

        //ÁREA DO SELECT
        <div className="flex xl:mx-auto border-white border-[2px] rounded-[20px] xl:w-fit w-fit place-self-center">
                <img src="/images/lupa.png" alt='icone de lupa' className="opacity-50 w-[40px] h-auto"/>
                <select
                    className="text-white xl:text-[24px] text-[20px] rounded-[20px] py-[7px] pl-[40px] pr-[20px] ml-[-40px]"
                    value={selecionado} onChange={(evento) => setSelecionado(evento.target.value)}
                >
                    <option hidden className="text-[#2C95FF]">Selecione uma das cidades</option>
                    <option value='Rio de Janeiro' className="text-[#2C95FF]">Rio de Janeiro</option>
                    <option value='São Paulo' className="text-[#2C95FF]">São Paulo</option>
                    <option value='Brasília' className="text-[#2C95FF]">Brasília</option>
                    <option value='Curitiba' className="text-[#2C95FF]">Curitiba</option>
                    <option value='Salvador' className="text-[#2C95FF]">Salvador</option>
                    <option value='Manaus' className="text-[#2C95FF]">Manaus</option>
                </select>

        </div>
    )
}

export default InputCity
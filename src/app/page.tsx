'use client';

import contextWeather from "@/components/ContextWeather/Context";
import InputCity from "@/components/InputCity/InputCity";
import MainCard from "@/components/MainCard/MainCard";
import SubCard from "@/components/SubCard/SubCard";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  //CHAMADA DO CONTEXT
  const contexto = useContext(contextWeather)

  // ESTADO PARA A COR DE FUNDO
  const [corDeFundo, setCorDeFundo] = useState('')

  // MUDANÇA DA TELA NA TROCA DE ESTADO
  useEffect(() => {
    
    if (!contexto?.weather) return;

  const forecast = contexto.weather.forecast[0];
  const status = forecast?.description;
  const periodo = contexto.weather.currently;

  if (status === 'Tempo nublado') {
    setCorDeFundo('bg-gradient-to-b from-[#415C78] to-[#D9D9D9] bg-no-repeat');
  } else 
  
  if (status === 'Chuva' || status === 'Chuvas esparsas') {
    setCorDeFundo('bg-gray-600 bg-[url(/images/bg-chuva.gif)] bg-cover');
  } else 
  
  if (status === 'Tempo limpo' && periodo === 'dia') {
    setCorDeFundo('bg-gradient-to-b from-[#2C95FF] to-[#D9D9D9] bg-no-repeat');
  } else 
  
  if (status === 'Tempo limpo' && periodo === 'noite') {
    setCorDeFundo('bg-gradient-to-b from-[#3A3A3A] to-[#3A3A3A] bg-no-repeat');
  } else 
  
  if (status === 'Parcialmente nublado' && periodo === 'dia') {
    setCorDeFundo('bg-gradient-to-b from-[#4678AD] to-[#D9D9D9] bg-no-repeat');
  } else 
  
  if (status === 'Parcialmente nublado' && periodo === 'noite') {
    setCorDeFundo('bg-gradient-to-b from-[#3E4041] to-[#7B7B7B] bg-no-repeat');
  } else {
    setCorDeFundo('bg-white');
  }

}, [contexto]);


  // SE NAO HOUVER NADA NA CHAMADA DO CONTEXTO RETORNA NULL
  if (!contexto) return null

  return (

    <div className={`flex flex-col gap-[20px] py-[30px] xl:px-[400px] xl:h-screen h-[100%] ${corDeFundo}`}>

      <InputCity />
      <MainCard />
      <SubCard />

    </div>

  );
}

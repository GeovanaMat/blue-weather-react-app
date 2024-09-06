
import {DailyWeather, HourlyWeather, InfoWeather } from "../../components";

import style from "./HomeWeather.module.css";

import { useWeatherContext } from "../../hook";


const HomeWeather = () => {

  const {
    temperatura,
    urlClima,
    descricaoClima, 
    umidadeRelativa, 
    ventoVelocidade,
    totalChuva,
    data
    } = useWeatherContext();

    console.log(data)

  console.log(temperatura)
  return (
    <>
    <div className={style.external_container}>
      
    <div className={style.weather_container}>
        <div className={style.localization}>
          <img src="https://img.icons8.com/?size=100&id=VUhyeqSS9WU7&format=png&color=000000" />
          <p>Manaus</p>
        </div>

        <div className={style.image_container}>
          <img src={`${urlClima}`} />
        </div>
        <div className={style.current_weather}>
          <p className={style.temperature}>
            {temperatura}<span>º</span>
          </p>
        </div>
        
        <p className={style.status}>{descricaoClima}</p>
        <div className={style.info_weather}>
          <div className={style.linha_degrade}></div>
          <div className={style.info_container}>
            <InfoWeather title="Precipitação" value={totalChuva}  unidade={"mm"} urlImage={"https://img.icons8.com/?size=100&id=gXahbB8sRL8x&format=png&color=000000"}/>
            <InfoWeather title="Umidade" value={umidadeRelativa} unidade={"%"} urlImage={"https://img.icons8.com/?size=100&id=4hMfKTBS5YV2&format=png&color=000000"} />
            <InfoWeather title="Vento" value={ventoVelocidade} unidade={"km/h"} urlImage={"https://img.icons8.com/?size=100&id=QoUgmWS44dFz&format=png&color=000000"} />
          </div>
          <div className={style.linha_degrade}></div>
        </div>
        <div className={style.current_date}>
          <p>{data}</p>
        </div>
        </div>
      </div>
      <div>
         <HourlyWeather/>
      </div>

      <div>
      <DailyWeather/>
      </div>
    
    
    
      
      
    </>
  );
};

export { HomeWeather };

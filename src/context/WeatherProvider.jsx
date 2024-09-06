import { useState,useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import weatherCodes from "../data/wmo-description.json"

const WeatherProvider = ({children}) =>{

     const[weather, setWeather] = useState(null)
     const[currentWeather, setCurrentWeather] = useState(null)
     
    // Fetch da API de previsao de tempo
     useEffect(() => {

         const fetchData = async () =>{
             try{
                 const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-3.1019&longitude=-60.025&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&timezone=America%2FNew_York")
                 if (!response.ok) {
                     throw new Error('Erro na requisição');
                   }

                 const {current,daily,hourly} = await response.json();
                
                  const weatherFormatado = {
                      temperaturaAtual: {
                          dataHora: current.time,
                          temperatura: current.temperature_2m,
                          sensacaoTermica: current.apparent_temperature,
                          umidadeRelativa: current.relative_humidity_2m,
                          eDia: current.is_day,
                          totalChuva: current.rain,
                          codigoClima: current.weather_code,
                          ventoVelocidade: current.wind_speed_10m,
                      },
                      previsaoHora: {
                          dataHoras : hourly.time,
                          temperaturas : hourly.temperature_2m,
                          codigoClima : hourly.weather_code,

                      },
                      previsaoDia : {
                          dataDia : daily.time,
                          codigoClima: daily.weather_code,
                          temperaturaMaxima : daily.temperature_2m_max,
                      }
                  }
                const { previsaoHora, previsaoDia} = weatherFormatado;
                 setWeather({previsaoHora,previsaoDia});
                 setCurrentWeather(weatherFormatado.temperaturaAtual);

             }catch (error) {
                 console.error('Ocorreu um erro:', error);
             }
        

         };

     fetchData();
    
     }, [])

     const{temperatura,codigoClima, umidadeRelativa,ventoVelocidade, totalChuva, dataHora, eDia} = currentWeather ? currentWeather : {};
     const{previsaoHora,previsaoDia} = weather ? weather : {};

      const getImageWeather = (codigo,weatherCodes) => {
        if(codigo && weatherCodes){
            const filtred = Object.entries(weatherCodes).filter(([key,]) => key == codigo);
            return filtred[0][1].day.image;
        }
      }

      const getDescriptionWeather = (codigo,weatherCodes) => {
        if(codigo && weatherCodes){
            const filtred = Object.entries(weatherCodes).filter(([key,]) => key == codigo);
            return filtred[0][1].day.description;
        }
        
      }
      
      const getDescriptionCurrentWeather = (codigo,weatherCodes,eDia) => {
        if(codigo && weatherCodes && eDia){
            const filtred = Object.entries(weatherCodes).filter(([key,]) => key == codigo);
            return eDia == 1 ? filtred[0][1].day.description : filtred[0][1].night.description;
        }
        
      }

      const getImageCurrentWeather = (codigo,weatherCodes,eDia) => {
        if(codigo && weatherCodes && eDia){
            const filtred = Object.entries(weatherCodes).filter(([key,]) => key == codigo);
            return eDia == 1 ? filtred[0][1].day.image : filtred[0][1].night.image;
        }
      }

      function getDataHoraFormatado(data) {
        if(data){
             return data.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/);
        }
      }
      
      const[,ano,mes,dia,hora,] = dataHora ? getDataHoraFormatado(dataHora) : [];


     
    return(
        <WeatherContext.Provider value={
            {temperatura : temperatura ? `${temperatura}`.slice(0,2) : "0",
            urlClima: getImageCurrentWeather(codigoClima,weatherCodes,eDia),
            descricaoClima: getDescriptionCurrentWeather(codigoClima,weatherCodes,eDia),
            umidadeRelativa,
            ventoVelocidade,
            totalChuva,
            data: `${dia}.${mes}.${ano}`,
            hora : parseInt(hora),
            previsaoDia,
            previsaoHora,
            getDataHoraFormatado,
            getDescriptionWeather,
            getImageWeather,
            weatherCodes
            }
            }>
            {children}
        </WeatherContext.Provider>
    )

}

export {WeatherProvider}
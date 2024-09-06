import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

const useWeatherContext = () => {
    const contexto = useContext(WeatherContext);
    return contexto;
}

export {useWeatherContext}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomeWeather } from './Pages/HomeWeather'
import "./index.css"
import { WeatherProvider } from './context/WeatherProvider'



createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <HomeWeather/>
  </WeatherProvider>
  
)


import { createRoot } from 'react-dom/client'
import { HomeWeather } from './Pages/home/HomeWeather'
import "./index.css"
import { WeatherProvider } from './context/WeatherProvider'
import { Footer } from './components/Footer'



createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <HomeWeather/>
    <Footer/>
  </WeatherProvider>
  
)

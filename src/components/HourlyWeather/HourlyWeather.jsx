
import { HourlyContainer } from './HourlyContainer/HourlyContainer'
import style from './HourlyWeather.module.css'
import { useWeatherContext } from '../../hook'

const HourlyWeather = () => {

    const{
        temperatura,
        hora,
        descricaoClima,
        previsaoHora,
        getDataHoraFormatado,
        getDescriptionWeather,
        weatherCodes
    } = useWeatherContext();

    let listaInformacoes = [];


    if(previsaoHora){
        const [dataHoras,temperaturas,codigoClima] = Object.values(previsaoHora);
        for(let i = hora+1; i < hora+5 ; i ++ ){
            if(dataHoras && codigoClima && temperaturas){
                const[,,,,hora,] = getDataHoraFormatado(dataHoras[i])
                const description = getDescriptionWeather(codigoClima[i],weatherCodes)
                listaInformacoes.push([hora,temperaturas[i],description]);
            }
        }
    }

    
    return(
        <>
        <div className={style.container}>
        <HourlyContainer temperatura={temperatura} hora={"Agora"} descricaoClima={descricaoClima}/>
        {
            listaInformacoes.map(dado => {
                
               return <HourlyContainer key={dado[0]} temperatura={`${dado[1]}`.slice(0,2)} hora={`${dado[0]}:00`} descricaoClima={dado[2]}/>
            })
        }

        </div>
       
        </>
    )
}

export {HourlyWeather}
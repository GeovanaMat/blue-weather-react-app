import { useWeatherContext } from "../../hook"
import { DailyContainer } from "./DailyContainer/DailyContainer"
import style from "./DailyWeather.module.css"


const DailyWeather = ()=>{
    // diaSemana urlImage temperatura

    const {
        temperatura,
        urlClima,
        previsaoDia,
        getImageWeather,
        weatherCodes
    } = useWeatherContext();

    function getDiaSemana (dia) {
       
        switch(dia){
            case 0:
                return "Dom"
            case 1:
                return "Seg"
            case 2:
                return "Ter"
            case 3:
                return "Qua"
            case 4:
                return "Qui"
            case 5:
                return "Sex"
            case 6:
                return "Sáb"
        }
    }

    let listaDias = []

    if (previsaoDia) {
      const [dataDia, codigoClima, temperaturaMaxima] =
        Object.values(previsaoDia);
      const data = new Date();
      let diaDaSemana = data.getDay();
      for (let i = 0; i < 4; i++) {
        diaDaSemana += 1;
        if (codigoClima && dataDia && temperaturaMaxima) {
          const urlImage = getImageWeather(codigoClima[i], weatherCodes);
          const diaSemana = getDiaSemana(diaDaSemana);
          listaDias.push([diaSemana, urlImage, temperaturaMaxima[i]]);
        }
        if (diaDaSemana == 6) {
          diaDaSemana = 0;
        }
      }
    }


    return(
        <div className={style.container}>
            <div className={`${style.info_container} ${style.selected}`}>
                <span className={style.day}>Hoje</span>
                <img src={urlClima} className={style.clima}/>
                <span className={style.temperatura}>{temperatura}ºC</span>
            </div>

            {
                listaDias.map(dia => {return <DailyContainer key={dia[0]} diaSemana={dia[0]} urlImage={dia[1]} temperatura={`${dia[2]}`.slice(0,2)}/>})
            }
            
        </div>
              
       

          
       
    )
}

export{DailyWeather}
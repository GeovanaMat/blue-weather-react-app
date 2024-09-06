import style from "./InfoWeather.module.css"
const InfoWeather = (props) => {
    const {value,urlImage,unidade,title} = props;
    
    return (
      <div>
        <div className={style.header_info}>
          <img src={`${urlImage}`} />
          <p>{title}</p>
        </div>
        <div className={style.data_info}>
          <p>
            {value}
            <span>{unidade}</span>
          </p>
        </div>
      </div>
    );
    
}

export {InfoWeather}
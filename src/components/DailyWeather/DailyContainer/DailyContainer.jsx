import style from "./DailyContainer.module.css"
const DailyContainer = (props) => {

    const{diaSemana,urlImage ,temperatura} = props
    return (
      <>
        <div className={`${style.info_container} ${style.selected}`}>
          <span className={style.day}>{diaSemana}</span>
          <div>
          <img src={urlImage} className={style.clima} />
          </div>
          <span className={style.temperatura}>{temperatura}ºC</span>
        </div>
      </>
    );
}

export {DailyContainer}
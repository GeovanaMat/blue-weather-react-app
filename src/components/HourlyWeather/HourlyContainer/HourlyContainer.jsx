import style from "./HourlyContainer.module.css"
const HourlyContainer = (props) => {

    const{temperatura,hora,descricaoClima} = props
    return(
        <div className={style.container_info}>
            <span className={style.hour}>{hora}</span>
            <span className={style.temperatura}>{temperatura}º</span>
            <span className={style.clima}>{descricaoClima}</span>
        </div>
    )
}
export {HourlyContainer}
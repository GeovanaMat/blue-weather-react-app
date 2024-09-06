import style from "./Footer.module.css"
const Footer = () => {
    return(
        <>
        <div className={style.footer_container}>
        <a href="https://github.com/GeovanaMat">
        <img src="https://img.icons8.com/?size=100&id=HGQomTX5FhZx&format=png&color=000000"/>
        </a>
        <p>Desenvolvido por <span>Geovana Matias</span><br></br> Icons por <a href="https://icons8.com.br/">Icon8</a>. 
        Uso de <a href="https://open-meteo.com/">Open-Meteo API</a>
        <a></a>
        </p>
        
        </div>
        </>
    )
}

export {Footer}
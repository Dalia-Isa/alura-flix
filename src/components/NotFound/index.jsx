import styles from "./NotFound.module.css"
import imagen from "./error404.svg" 

function NotFound(){
    return(
        <section  className={styles.container}>
            <img className="img404" src={imagen} alt="404"/>
            <p className={styles.text_error}>Página no encontrada</p>
        </section>

    )
}

export default NotFound
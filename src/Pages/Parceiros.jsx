import React from "react";
import styles from "./Parceiros.module.css"
import guarda from "./../img/guarda.png"

const Parceiros = () => {

    return(
        <div className={styles.container}> 
    
            <section> <a href="https://pt-br.facebook.com/institutoguardaanimal/"><img src={guarda} alt="guarda" /> </a></section>
        </div>
    )

}

export default Parceiros
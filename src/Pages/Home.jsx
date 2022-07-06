import React from "react";
import logo from "./../img/favicon.ico"
import styles from "./Home.module.css"

const Home = () =>{

    return (

        <div className={styles.container}>
            <section className={styles.section}>
            <h1>ATLÉTICA DE COMPUTAÇÃO</h1>
            <h2>UNIDERP</h2>
            <img src={logo} alt="aaacompu"></img>
            <h1>SINCE 2018</h1> 
            </section>
         
        </div>

    )

}

export default Home
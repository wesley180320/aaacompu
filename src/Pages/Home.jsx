import React from "react";
import logo from "./../img/favicon.ico"
import styles from "./Home.module.css"

const Home = () =>{

    return (

        <div className={styles.container}>
            <h1>ATLÉTICA DA COMPUTAÇÃO</h1>
            <h2>UNIDERP</h2>
            <img src={logo} alt="aaacompu"></img>
            <h1>SINCE 2018</h1> 
        </div>

    )

}

export default Home
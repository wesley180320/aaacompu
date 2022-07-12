import React from "react";
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"


const NavBar = () =>{

    return(

        <nav className={styles.navbar}>

        <h1> AAACOMPU </h1>

            <ul>
                <li><Link to={"/"} className={styles.item_a}>Home</Link></li>
                <li><Link to={"/loja"} className={styles.item_a}>Loja</Link></li>
                <li><Link to={"/eventos"} className={styles.item_a}>Eventos</Link></li>
                <li><Link to={"/parceiros"} className={styles.item_a}> Parceiros</Link></li>
            </ul>
        </nav>

    )

}

export default NavBar
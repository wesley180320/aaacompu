import React from "react";
import { FaFacebook, FaInstagram} from "react-icons/fa"

import styles from "./Footer.module.css"

const Footer = () => {

    return(
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <li> <a href="https://www.facebook.com/AtleticaCompu/" className={styles.item}><FaFacebook/> </a></li>
                <li><a href="https://www.instagram.com/atleticacompu/" className={styles.item}><FaInstagram/></a> </li>
            </ul>
           <p className={styles.copy_right}> <span>AAACOMPU</span> &copy; 2022 </p>
        </div>
    )
}

export default Footer 
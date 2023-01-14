import React from 'react';
import Lottie from "lottie-react";
import quality from "../../svg/quality.json";
import styles from "../../styles/pages/Quality.module.css"
import {BiRocket} from "react-icons/bi";

const Quality = () => {
    return (
        <section className={styles.main}>
            <div className={styles.side}>
                <div className={styles.sideMain}>
                    <Lottie animationData={quality} loop={true} />
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>We craft <br/><span className={styles.titleSpan}>
                    <b>quality</b>
                    <b>quality</b>
                    </span> websites</h1>
                <p className={styles.description}>We believe in providing the best quality services possible to help our clients achieve their goals. Our approach is always customer-orientated, striving for quality over quantity.</p>
                <div className={styles.buttons}>
                    <button className={styles.mainButton}>
                        <BiRocket className={styles.mainButtonIcon} />
                        Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Quality;
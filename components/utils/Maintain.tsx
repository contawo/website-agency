import React from 'react';
import Lottie from "lottie-react";
import maintain from "../../svg/maintain.json";
import styles from "../../styles/pages/Quality.module.css"
import {BiRocket} from "react-icons/bi";
import { useRouter } from 'next/router';

const Maintain = () => {
    const router = useRouter();

    const getStarted = () => {
        router.push("/register")
    }
    return (
        <section className={styles.main}>
            <div className={styles.side}>
                <div className={styles.sideMain}>
                    <Lottie animationData={maintain} loop={true} />
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>We offer <br/><span className={styles.titleSpan}>
                    <b>site</b>
                    <b>site</b>
                    </span> maintenance</h1>
                <p className={styles.description}>We are a business that offers website maintenance as a continuous services to guarantee that a website is current and operates as intended. This can involve activities like content updates, bug fixes, security audits, and website traffic monitoring.</p>
                <div className={styles.buttons}>
                    <button className={styles.mainButton} onClick={getStarted}>
                        <BiRocket className={styles.mainButtonIcon} />
                        Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Maintain;
import React from 'react';
import Lottie from "lottie-react";
import intro from "../../svg/intro2.json";
import introBg from "../../svg/intro_bg.json";
import styles from "../../styles/pages/Intro.module.css"
import {BiRocket} from "react-icons/bi";
import {RiFootprintLine} from "react-icons/ri";
import {FaInstagram, FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import { useRouter } from 'next/router';

const Intro = () => {
    const router = useRouter(); 

    const getStarted = () => {
        router.push("/register")
    }

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Make your <br/><span className={styles.titleSpan}>
                    <b>Business</b>
                    <b>Business</b>
                    </span> online</h1>
                <p className={styles.description}>We believe that every business deserves a website that is easy to use, responsive and fast. We make it our mission to ensure that your business has the best possible online presence.</p>
                <div className={styles.buttons}>
                    <button className={styles.mainButton} onClick={getStarted}>
                        <BiRocket className={styles.mainButtonIcon} />
                        Get Started</button>
                    <a href="#process" className={styles.process}>
                        <RiFootprintLine className={styles.processIcon} />
                        Our Process
                    </a>
                </div>
                <div className={styles.socials}>
                    <p className={styles.find}>Find us</p>
                    <a href="#home" className={styles.social}>
                        <FaInstagram />
                    </a>
                    <a href="#home" className={styles.social}>
                        <FaFacebookSquare />
                    </a>
                    <a href="#home" className={styles.social}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className={styles.side}>
                <div className={styles.sideImage}>
                    <Lottie animationData={introBg} loop={true} />
                </div>
                <div className={styles.sideMain}>
                    <Lottie animationData={intro} loop={true} />
                </div>
            </div>
        </section>
    )
}

export default Intro;
import {BiRocket} from "react-icons/bi";
import styles from "../../styles/pages/Prompt.module.css";

const Prompt = () => {
    return (
        <section className={styles.main}>
            <p className={styles.slang}>From us to you</p>
            <h2 className={styles.title}>Unlock the full potential of your <br /> business with us</h2>
            <p className={styles.description}>At Magna Site, we believe in going above and beyond for our clients. We are dedicated to delivering a positive experience and strive to exceed expectations every step of the way. Whether you are looking to grow your business, increase efficiency, or build your brand, we have the skills and expertise to help you reach your goals.</p>
            <button className={styles.button}>
                <BiRocket className={styles.buttonIcon} />Get Started
            </button>
        </section>
    )
}

export default Prompt;
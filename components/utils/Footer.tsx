import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/dlogo.png";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaMinus } from "react-icons/fa";
import styles from "../../styles/pages/Footer.module.css";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <Image src={logo} alt="business-logo" width={140} />
            <p className={styles.description}>Let us magnasite your business</p>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <FaMinus className={styles.dot} />
                <Link href="/about" className={styles.link}>About</Link>
                <FaMinus className={styles.dot} />
                <Link href="/register" className={styles.link}>Register</Link>
                <FaMinus className={styles.dot} />
                <Link href="/login" className={styles.link}>Login</Link>
            </div>
            <div className={styles.socials}>
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
        </section>
    )
}

export default Footer;


import Link from "next/link";
import {useState, useEffect} from "react";
import {FaDoorOpen, FaDoorClosed} from "react-icons/fa";
import styles from "../styles/components/NavBar.module.css";
import {motion, useAnimation} from "framer-motion";
import { useRouter } from "next/router";

const NavBar = () => {
    const [showMobile, setShowMobile] = useState<boolean>(false)
    const animateNav = useAnimation();
    const [slug, setSlug] = useState<string>("")

    useEffect(() => {
        setSlug(document?.URL.split("/")[3])
    }, [slug])

    useEffect(() => {
        if (showMobile) {
            animateNav.start({
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 35, duration: 0.4 }
            })
        } else {
            animateNav.start({
                x: "-70vh", 
                opacity: 0,
                transition: { type: "spring", stiffness: 35, duration: 0.4 }
            })
        }
    }, [animateNav, showMobile])

    return (
        <nav className={styles.nav}>
            {/* Desktop */}
            <section className={styles.desktop}>
                <section className={styles.head}>
                    <FaDoorOpen onClick={() => setShowMobile(true)} className={styles.toggle} />
                    <h2 className={styles.title}>Online<b>Site</b></h2>
                </section>
                <section className={styles.prompt}>
                    <Link data-text="HOME" href="/" className={(slug === "") ? styles.active : styles.desktopLink}>Home</Link>
                        <Link data-text="ABOUT" href="/about" className={(slug === "about") ? styles.active : styles.desktopLink}>About</Link>
                    <Link data-text="REGISTER" href="/register" className={(slug === "register") ? styles.active : styles.desktopLink}>Register</Link>
                    <Link data-text="LOGIN" href="/login" className={(slug === "login") ? styles.active : styles.desktopLink}>Login</Link>
                </section>
            </section>

            {/* Mobile */}
            <motion.section 
                animate={animateNav}
                className={styles.mobile}>
                <section className={styles.mobileMain}>
                    <FaDoorClosed onClick={() => setShowMobile(false)} className={styles.door} />
                    <Link href="/" className={styles.mobileLink}>Home</Link>
                    <Link href="/about" className={styles.mobileLink}>About</Link>
                    <Link href="/register" className={styles.mobileLink}>Register</Link>
                    <Link href="/login" className={styles.mobileLink}>Login</Link>
                </section>
            </motion.section>
        </nav>
    )
}

export default NavBar;
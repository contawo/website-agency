import {GrLogout} from "react-icons/gr";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import styles from "../styles/components/UserNav.module.css";

const UserNav = () => {
    const router = useRouter();
    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push("/login")
        })
    }

    return (
        <nav className={styles.userNav}>
            <section className={styles.userHeader}>
                <h1 className={styles.headerTitle}>Welcome</h1>
                <p className={styles.headerDescription}>View your project progress here</p>
            </section>
            <section onClick={handleLogout} className={styles.logout}>
                <p>Logout</p>
                <GrLogout />
            </section>
        </nav>
    )
}

export default UserNav;
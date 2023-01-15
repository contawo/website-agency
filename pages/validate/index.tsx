import { useAuthState } from "../../firebase/Authentication";
import Lottie from "lottie-react";
import valid from "../../svg/valid.json";
import styles from "../../styles/Email.module.css";
import { useRouter } from "next/router";
import {TbLayoutDashboard} from "react-icons/tb"

const Validate = () => {
    const id = useAuthState();
    const router = useRouter();

    const handleClick = () : void => {
        router.push(`/${id}`)
    }

    return (
        <div className={styles.email}>
            <section className={styles.emailIcon}>
                <Lottie animationData={valid} loop={true} />
            </section>
            <section className={styles.emailCont}>
                <h2 className={styles.emailTitle}>Your account is valid</h2>
                <p className={styles.emailDescription}>It is great to see you back! Please click on the buttom below to view your project progress.</p>
                <button className={styles.emailButton} onClick={handleClick}>
                    <TbLayoutDashboard className={styles.emailButtonIcon} />
                    Dashboard
                </button>
            </section>
        </div>
    )
}

export default Validate;
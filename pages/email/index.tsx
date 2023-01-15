import { useAuthState } from "../../firebase/Authentication";
import Lottie from "lottie-react";
import email from "../../svg/email.json";
import styles from "../../styles/Email.module.css";
import { useRouter } from "next/router";
import {TbLayoutDashboard} from "react-icons/tb"

const Email = () => {
    const id = useAuthState();
    const router = useRouter();

    const handleClick = () : void => {
        router.push(`/${id}`)
    }

    return (
        <div className={styles.email}>
            <section className={styles.emailIcon}>
                <Lottie animationData={email} loop={true} />
            </section>
            <section className={styles.emailCont}>
                <h2 className={styles.emailTitle}>An email was sent to your account</h2>
                <p className={styles.emailDescription}>Thank you for choosing us. We have sent you an email. Please reply with your availability so that we can schedule a Google Meet call or face-to-face.</p>
                <button className={styles.emailButton} onClick={handleClick}>
                    <TbLayoutDashboard className={styles.emailButtonIcon} />
                    Dashboard
                </button>
            </section>
        </div>
    )
}

export default Email;
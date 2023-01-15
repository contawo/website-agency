import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import complete from "../../svg/complete.json";
import Lottie from "lottie-react";
import styles from "../../styles/user/Complete.module.css";

const Complete = () => {
    return (
        <div className={styles.complete}>
            <section className={styles.completeSvg}>
                <Lottie animationData={complete} loop={true} />
            </section>
            <section className={styles.completeContainer}>
                <h1 className={styles.completeTitle}>Project Completed</h1>
                <p className={styles.completeDescription}>Thank you for choosing us for your project. We are thrilled that we were able to meet and exceed your expectations. Your satisfaction is our top priority and we are glad that we were able to deliver a successful outcome. We appreciate your trust in our abilities and we look forward to working with you again in the future. Thank you for your business!</p>
                <button className={styles.completeButton}>
                    <AiOutlineFundProjectionScreen className={styles.completeButtonIcon} />
                    New Project</button>
            </section>
        </div>
    )
}

export default Complete;
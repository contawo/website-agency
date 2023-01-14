import Lottie from "lottie-react";
import progress from "../../svg/progress.json";
import styles from "../../styles/pages/Progress.module.css";

const Progress = () => {
    return (
        <section className={styles.main}>
            <p className={styles.slang}>Project progress</p>
            <h2 className={styles.title}>View your project progress</h2>
            <p className={styles.description}>You have access to your personal dashboard where you can check on the status of your project at any time and from anywhere.</p>
            <div className={styles.show}>
                <Lottie animationData={progress} loop={true} />
            </div>
        </section>
    )
}

export default Progress;
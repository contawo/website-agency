import Lottie from "lottie-react";
import load from "../svg/load.json";
import styles from "../styles/components/Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loadingImage}>
                <Lottie animationData={load} />
            </div>
        </div>
    )
}

export default Loading;
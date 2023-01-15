import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import view from "../../svg/view.json";
import Lottie from "lottie-react";
import styles from "../../styles/user/View.module.css";

const View = ({text} : {text: string}) => {
    return (
        <div className={styles.view}>
            <section className={styles.viewSvg}>
                <Lottie animationData={view} loop={true} />
            </section>
            <section className={styles.viewContainer}>
                <p className={styles.viewDescription}>Project progress</p>
                <h1 className={styles.viewTitle}>{text} phase</h1>
            </section>
        </div>
    )
}

export default View;
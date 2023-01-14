import Lottie from "lottie-react"
import mission from "../../svg/mission.json";
import styles from "../../styles/pages/Mission.module.css";

const Mission = () => {
    return (
        <section className={styles.nest}>
            <div>
                <Lottie animationData={mission} loop={true} />
            </div>
            <div>
                <h1>02</h1>
                <h3>Our aim</h3>
                <p>To provide professional and effective website design and development services to small and medium-sized businesses, helping them to establish a strong online presence and increase their customer reach.</p>
                <h3>Our mission</h3>
                <p>Our mission is to empower small and medium-sized businesses to succeed in the digital age by creating visually stunning, user-friendly websites that accurately reflect their brand and effectively promote their products or services.</p>
            </div>
        </section>
    )
}

export default Mission;
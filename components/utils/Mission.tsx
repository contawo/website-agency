import styles from "../../styles/pages/Mission.module.css";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

const Mission = () => {
    return (
        <section className={styles.nest}>
            <div className={styles.nestHead}>
                <h1 className={styles.headNumber}>02</h1>
                <div className={styles.qCont}>
                    <ImQuotesLeft className={styles.qMark} />
                    <p className={styles.qDescription}>Websites promote you 24/7: No employee will do that</p>
                    <span className={styles.qClose}>
                        <ImQuotesRight className={styles.qMark} />
                    </span>
                </div>
                <h4>~ Paul Cookson ~</h4>
            </div>
            <div className={styles.nestBody}>
                <h3 className={styles.bTitle}>Our aim</h3>
                <p className={styles.bDescription}>To provide professional and effective website design and development services to small and medium-sized businesses, helping them to establish a strong online presence and increase their customer reach.</p>
                <h3 className={styles.bTitle}>Our mission</h3>
                <p className={styles.bDescription2}>Our mission is to empower small and medium-sized businesses to succeed in the digital age by creating visually stunning, user-friendly websites that accurately reflect their brand and effectively promote their products or services.</p>
            </div>
        </section>
    )
}

export default Mission;
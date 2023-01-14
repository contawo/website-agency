import styles from "../../styles/pages/Team.module.css";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

const Mission = () => {
    return (
        <section className={styles.nest}>
            <div className={styles.nestHead}>
                <h1 className={styles.headNumber}>03</h1>
                <div className={styles.qCont}>
                    <ImQuotesLeft className={styles.qMark} />
                    <p className={styles.qDescription}>Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.</p>
                    <span className={styles.qClose}>
                        <ImQuotesRight className={styles.qMark} />
                    </span>
                </div>
                <h4>~ Deep Immersion ~</h4>
            </div>
            <div className={styles.nestBody}>
                <h3 className={styles.bTitle}>Our team</h3>
                <p className={styles.bDescription}>Our team at Magna Site specializes in creating professional and high-performing websites for businesses of all sizes. Our experienced designers and developers work closely with our clients to understand their unique needs and goals, and use the latest technologies to build custom websites that drive results.</p>
                <h3 className={styles.bTitle}>Team drive</h3>
                <p className={styles.bDescription}>Our team is dedicated to delivering exceptional customer service and providing ongoing support to ensure that our clients websites continue to perform at the highest level.</p>
            </div>
        </section>
    )
}

export default Mission;
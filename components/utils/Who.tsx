import styles from "../../styles/pages/Who.module.css";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

const Mission = () => {
    return (
        <section className={styles.nest}>
            <div className={styles.nestHead}>
                <h1 className={styles.headNumber}>01</h1>
                <div className={styles.qCont}>
                    <ImQuotesLeft className={styles.qMark} />
                    <p className={styles.qDescription}>Getting a quality website is not an expenses but rather an investment.</p>
                    <span className={styles.qClose}>
                        <ImQuotesRight className={styles.qMark} />
                    </span>
                </div>
                <h4>~ Dr. Christopher Dayagdag ~</h4>
            </div>
            <div className={styles.nestBody}>
                <h3 className={styles.bTitle}>Who are we?</h3>
                <p className={styles.bDescription}>A website development company specializes in designing and building websites for businesses. They work with clients to understand their needs and goals, and then use that information to create a custom website that is tailored to the client brand and target audience.</p>
                <h3 className={styles.bTitle}>Magna Site meaning</h3>
                <p className={styles.bDescription2}>Magna (Latin) = Great (English). The name was suggested by the girlfriend of the owner. The site comes from the name website.</p>
            </div>
        </section>
    )
}

export default Mission;
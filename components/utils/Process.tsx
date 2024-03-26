import {BsChatSquareDotsFill, BsFileEarmarkCodeFill} from "react-icons/bs";
import {MdDesignServices} from "react-icons/md";
import {GrTestDesktop} from "react-icons/gr";
import styles from "../../styles/pages/Process.module.css";

const Process = () => {
    return (
        <section className={styles.process} id="process">
            <section className={styles.header}>
                <p className={styles.headerSlang}>Made for you</p>
                <h1 className={styles.headerTitle}>Our Process</h1>
                <p className={styles.headerDescription}>Fast and simple for your needs</p>
            </section>
            <section  className={styles.content}>
                <section className={styles.each}>
                    <div className={styles.eachOne}>
                        <BsChatSquareDotsFill className={styles.eachIcon} />
                    </div>
                    <h2 className={styles.eachTitle}>Consultation</h2>
                    <p className={styles.eachDescription}>We start by having a conversation with you to understand your business, your target audience, and your goals for your website.</p>
                </section>
                <section className={styles.eachDesign}>
                    <div className={styles.eachTwo}>
                        <MdDesignServices className={styles.eachIcon} />
                    </div>
                    <h2 className={styles.eachTitle}>Design</h2>
                    <p className={styles.eachDescription}>Using this information, we create a custom design for your website that reflects your brand and appeals to your target audience.</p>
                </section>
                <section className={styles.each}>
                    <div className={styles.eachThree}>
                        <BsFileEarmarkCodeFill className={styles.eachIcon} />
                    </div>
                    <h2 className={styles.eachTitle}>Development</h2>
                    <p className={styles.eachDescription}>Our team of skilled developers brings the design to life, building a fully functional website that is optimized for search engines and easy to navigate.</p>
                </section>
                <section className={styles.each}>
                    <div className={styles.eachFour}>
                        <GrTestDesktop className={styles.eachIcon} />
                    </div>
                    <h2 className={styles.eachTitle}>Testing and Launch</h2>
                    <p className={styles.eachDescription}>Before your website goes live, we thoroughly test it to ensure that it is working correctly and meets all of your requirements.</p>
                </section>
            </section>
        </section>
    )
}

export default Process;
import MainLayout from "../../layout/MainLayout";
import styles from "../../styles/About.module.css";
import {useState} from "react";
import Mission from "../../components/utils/Mission";
import Who from "../../components/utils/Who";
import Team from "../../components/utils/Team";

const Z_INDEX : {LOW: number; MIDDLE: number; HIGH: number;} = {
    LOW: 2,
    MIDDLE: 3,
    HIGH: 4
}

type Element = {
    index: number,
    justify: "flex-start" | "center" | "flex-end"
}

const About = () => {
    const [elementOne, setElementOne] = useState<Element>({index: Z_INDEX.HIGH, justify: "flex-start"})
    const [elementTwo, setElementTwo] = useState<Element>({index: Z_INDEX.MIDDLE, justify: "center"})
    const [elementThree, setElementThree] = useState<Element>({index: Z_INDEX.LOW, justify: "flex-end"})

    return (
        <MainLayout>
            <section className={styles.cont}>
                <div 
                    style={{
                        justifyContent: elementOne.justify,
                        zIndex: elementOne.index
                    }}
                    className={styles.section}>
                    <div 
                        onClick={() => {
                            setElementOne({index: Z_INDEX.LOW, justify: "flex-start"})
                            setElementTwo({index: Z_INDEX.HIGH, justify: "center"})
                            setElementThree({index: Z_INDEX.MIDDLE, justify: "flex-end"})
                        }}
                        style={{backgroundColor: "#36C85F"}}
                        className={styles.inside}>
                            <Who />
                        </div>
                </div>
                <div 
                    style={{
                        justifyContent: elementTwo.justify,
                        zIndex: elementTwo.index
                    }}
                    className={styles.section}>
                    <div 
                        onClick={() => {
                            setElementOne({index: Z_INDEX.LOW, justify: "flex-start"})
                            setElementTwo({index: Z_INDEX.MIDDLE, justify: "center"})
                            setElementThree({index: Z_INDEX.HIGH, justify: "flex-end"})
                        }}
                        style={{backgroundColor: "#ffffff"}}
                        className={styles.inside}>
                            <Mission />
                        </div>
                </div>
                <div 
                    style={{
                        justifyContent: elementThree.justify,
                        zIndex: elementThree.index
                    }}
                    className={styles.section}>
                    <div 
                        onClick={() => {
                            setElementOne({index: Z_INDEX.HIGH, justify: "flex-start"})
                            setElementTwo({index: Z_INDEX.MIDDLE, justify: "center"})
                            setElementThree({index: Z_INDEX.LOW, justify: "flex-end"})
                        }}
                        style={{backgroundColor: "#000000"}}
                        className={styles.inside}>
                            <Team />
                        </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default About;
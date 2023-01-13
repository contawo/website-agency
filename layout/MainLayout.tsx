import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/layout/MainLayout.module.css"

const MainLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <NavBar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout;
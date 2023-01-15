import React from "react";
import UserNav from "../components/UserNav";
import styles from "../styles/layout/UserLayout.module.css";

const UserLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className={styles.userLayout}>
            <UserNav />
            <main className={styles.userContainer}>
                {children}
            </main>
        </div> 
    )
}

export default UserLayout;
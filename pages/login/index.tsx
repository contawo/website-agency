import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import Lottie from "lottie-react";
import login from "../../svg/login.json";
import styles from "../../styles/Login.module.css";
import {IoMdLogIn} from "react-icons/io";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { GetServerSideProps } from "next";

type Info = {
    email: string,
    password: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const render = ""
    return {
        props: {render}
    }
}

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState<Info>({
        email: "",
        password: ""
    })
    const [err, setErr] = useState<string>("");

    const handleSubmit = () => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password).then(res => {
                router.push("/validate")
            }).catch(error => {
                console.log(error.message)
            })
        } else {
            setErr("Invalid email or password");
        }
    }

    return (
        <MainLayout>
            <div className={styles.main}>
                <section className={styles.side}>
                    <Lottie animationData={login} loop={true} />
                </section>
                <section className={styles.content}>
                    <h2 className={styles.title}>Login into your account</h2>
                    <p className={styles.description}>It is great to see you again, we have missed having you around.</p>
                    <form className={styles.form}>
                        <section className={styles.section}>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Enter your email..." 
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value })}
                            />
                            <p className={styles.error}>{err}</p>
                        </section>
                        <section className={styles.section}>
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Enter your password..." 
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value })}
                            />
                            <p className={styles.error}>{err}</p>
                        </section>
                    </form>
                    <p className={styles.account}>Do not have an account? <Link className={styles.accountLink} href="/register">Register</Link></p>
                    <div className={styles.btnContainer}>
                        <button className={styles.button} onClick={handleSubmit}>
                            <IoMdLogIn className={styles.buttonIcon} />
                            Login</button>
                    </div>
                </section>
            </div>
        </MainLayout>
    )
}

export default Login;
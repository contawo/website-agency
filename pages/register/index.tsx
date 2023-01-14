import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import {useState} from "react";
import { User, Project, Error } from "../../types/types";
import { useRouter } from "next/router";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Lottie from "lottie-react";
import register from "../../svg/register.json";
import styles from "../../styles/Register.module.css";
import {BiWalk} from "react-icons/bi";

const postForm = async (data: User) => fetch("/api/mail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

const Register = () => {
    const [password, setPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    
    const [user, setUser] = useState<User>({authId: "", businessName: "", email: "", description: ""})
    const [error, setError] = useState<Error>({nameErr: "", descriptionErr: "", passwordErr: ""})

    const router = useRouter();

    const handleSubmit = async () => {
        if (user.email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            setEmailError("")
        } else {
            setUser({...user, email: ""})
            setEmailError("Please enter a valid email")
        }
        
        if (user.email && password && user.businessName && user.description) {
            createUserWithEmailAndPassword(auth, user.email, password).then(async res => {
                const user2 : User = {
                    authId: res.user.uid,
                    businessName: user.businessName,
                    email: user.email,
                    description: user.description
                }
                const project2: Project = {
                    authId: res.user.uid,
                    progress: "Consultation",
                    completed: false,
                    start: "Progect not Started",
                    end: "Progect not Started",
                    url: ""
                }
                
                const ref = collection(db, "user");
                const projectRef = collection(db, "projects");
                if (user2.authId && project2.authId) {
                    await postForm(user2)
                    addDoc(ref, user2)
                    addDoc(projectRef, project2)
                } else {
                    alert(`Failed to get id ${res.user.uid}`)
                }
                router.push("/email")
            }).catch(err => {
                console.log(err)
            })
        } else {
            setError({
                nameErr: user.businessName ? "" : "Business name is required",
                descriptionErr: user.description? "" : "Description is required",
                passwordErr: password ? "" : "Password is required"
            })
        }
    }

    return (
        <MainLayout>
            <main className={styles.main}>
                <section className={styles.side}>
                    <Lottie animationData={register} loop={true} />
                </section>
                <section className={styles.content}>
                    <h2 className={styles.title}>Register an account</h2>
                    <p className={styles.description}>Thank you for choosing our platform, and we cannott wait to see what you will achieve with us.</p>
                    <form className={styles.form}>
                        <section className={styles.section}>
                            <input 
                                type="text" 
                                className={styles.input}
                                value={user.businessName} 
                                placeholder="Enter business name..." 
                                onChange={(e) => setUser({...user, businessName: e.target.value})}
                            />
                            <p className={styles.error}>{error.nameErr}</p>
                        </section>
                        <section className={styles.section}>
                            <input 
                                type="email" 
                                value={user.email}
                                className={styles.input}
                                placeholder="Enter business email..." 
                                onChange={(e) => setUser({...user, email: e.target.value})}
                            />
                            <p className={styles.error}>{emailError}</p>
                        </section>
                        <section className={styles.section}>
                            <textarea
                                placeholder="Enter business description"
                                value={user.description}
                                className={styles.area}
                                onChange={(e) => setUser({...user, description: e.target.value})}
                            />
                            <p className={styles.error}>{error.descriptionErr}</p>
                        </section>
                        <section className={styles.section}>
                            <input 
                                type="password" 
                                value={password}
                                className={styles.input}
                                placeholder="Enter a password..."
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className={styles.error}>{error.passwordErr}</p>
                        </section>
                    </form>
                    <p className={styles.account}>Already have an account? <Link className={styles.accountLink} href="/login">Login</Link></p>
                    <div className={styles.btnContainer}>
                        <button className={styles.button} onClick={handleSubmit}>
                            <BiWalk className={styles.buttonIcon} />
                            Register</button>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Register;
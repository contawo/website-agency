import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import {useState} from "react";
import { User, Project, Error } from "../../types/types";
import { useRouter } from "next/router";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
                const user2 = {
                    authId: res.user.uid,
                    businessName: user.businessName,
                    email: user.email,
                    description: user.description
                }
                const project2 = {
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
            <main>
                <section></section>
                <section>
                    <h2>Register an account</h2>
                    <form>
                        <section>
                            <input 
                                type="text" 
                                value={user.businessName} 
                                placeholder="Enter business name..." 
                                onChange={(e) => setUser({...user, businessName: e.target.value})}
                            />
                            <p>{error.nameErr}</p>
                        </section>
                        <section>
                            <input 
                                type="email" 
                                value={user.email}
                                placeholder="Enter business email..." 
                                onChange={(e) => setUser({...user, email: e.target.value})}
                            />
                            <p>{emailError}</p>
                        </section>
                        <section>
                            <textarea
                                placeholder="Enter business description"
                                value={user.description}
                                onChange={(e) => setUser({...user, description: e.target.value})}
                            />
                            <p>{error.descriptionErr}</p>
                        </section>
                        <section>
                            <input 
                                type="password" 
                                value={password}
                                placeholder="Enter a password..."
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p>{error.passwordErr}</p>
                        </section>
                    </form>
                    <p>Already have an account? <Link href="/login">Login</Link></p>
                    <button onClick={handleSubmit}>Register</button>
                </section>
            </main>
        </MainLayout>
    )
}

export default Register;
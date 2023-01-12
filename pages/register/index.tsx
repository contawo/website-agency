import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import {useState} from "react";
import { User } from "../../types/types";
import { useRouter } from "next/router";

const Register = () => {
    const [user, setUser] = useState<User>({
        authId: "",
        businessName: "",
        email: "",
        description: ""
    })
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/email")
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
                                placeholder="Enter business name..." 
                                onChange={() => setUser({...user, businessName: ""})}
                            />
                            <p></p>
                        </section>
                        <input 
                            type="email" 
                            placeholder="Enter business email..." 
                            onChange={() => setUser({...user, email: ""})}
                        />
                        <textarea
                            placeholder="Enter business description"
                            onChange={() => setUser({...user, description: ""})}
                        />
                        <input 
                            type="password" 
                            placeholder="Enter a password..."
                        />
                    </form>
                    <p>Already have an account? <Link href="/login">Login</Link></p>
                    <button onClick={handleSubmit}>Register</button>
                </section>
            </main>
        </MainLayout>
    )
}

export default Register;
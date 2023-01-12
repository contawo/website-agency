import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import { useRouter } from "next/router";
import { useLogin } from "../../firebase/Authentication";
import { useState } from "react";

type Info = {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState<Info>({
        email: "",
        password: ""
    })
    const [err, setErr] = useState<string>("");
    const {logged} = useLogin(user.email, user.password);

    const handleSubmit = () => {
        setUser({ email: user.email, password: "" });
        if (logged) {
            router.push("/validate")
        } else {
            setErr("Invalid email or password");
        }
    }

    return (
        <MainLayout>
            <div>
                <section></section>
                <section>
                    <h2>Login into your account</h2>
                    <form>
                        <section>
                            <input
                                type="email"
                                placeholder="Enter your email..." 
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value })}
                            />
                            <p>{err}</p>
                        </section>
                        <section>
                            <input
                                type="password"
                                placeholder="Enter your password..." 
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value })}
                            />
                            <p>{err}</p>
                        </section>
                    </form>
                    <p>Do not have an account? <Link href="/register">Register</Link></p>
                    <button onClick={handleSubmit}>Login</button>
                </section>
            </div>
        </MainLayout>
    )
}

export default Login;
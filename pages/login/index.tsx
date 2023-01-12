import Link from "next/link";
import MainLayout from "../../layout/MainLayout";

const Login = () => {
    return (
        <MainLayout>
            <div>
                <section></section>
                <section>
                    <h2>Login into your account</h2>
                    <form>
                        <input 
                            type="email" 
                            placeholder="Enter your email..." 
                        />
                        <input 
                            type="password" 
                            placeholder="Enter your password..." 
                        />
                    </form>
                    <p>Do not have an account? <Link href="/register">Register</Link></p>
                    <button>
                        <Link href="/validate">Login</Link>
                    </button>
                </section>
            </div>
        </MainLayout>
    )
}

export default Login;
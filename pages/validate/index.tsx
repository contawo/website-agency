import Link from "next/link";
import { useAuthState } from "../../firebase/Authentication";

const Validate = () => {
    const id = useAuthState();
    return (
        <main>
            <section></section>
            <section>
                <h2>Valid user</h2>
                <p>Please click on the button below to view your dashboard</p>
                <button>
                    <Link href={`/${id}`}>Dashboard</Link>
                </button>
            </section>
        </main>
    )
}

export default Validate;
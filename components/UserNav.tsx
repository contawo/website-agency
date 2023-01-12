import Link from "next/link";
import {GrLogout} from "react-icons/gr";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

const UserNav = () => {
    const router = useRouter();
    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push("/login")
        })
    }
    return (
        <nav>
            <section>
                <h1>Welcome good business</h1>
                <p>View your project progress here</p>
            </section>
            <GrLogout onClick={handleLogout} />
        </nav>
    )
}

export default UserNav;
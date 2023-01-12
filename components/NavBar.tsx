import Image from "next/image";
import Link from "next/link";
import lightLogo from "../assets/mainLightLogo.png";

const NavBar = () => {
    return (
        <nav>
            <section>
                <Image src={lightLogo} alt="logo-image" width={40} />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </section>
            <section>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
            </section>
        </nav>
    )
}

export default NavBar;
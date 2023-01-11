import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
        </nav>
    )
}

export default NavBar;
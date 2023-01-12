import Link from "next/link";

const Validate = () => {
    return (
        <main>
            <section></section>
            <section>
                <h2>Valid user</h2>
                <p>Please click on the button below to view your dashboard</p>
                <button>
                    <Link href="/user-1">Dashboard</Link>
                </button>
            </section>
        </main>
    )
}

export default Validate;
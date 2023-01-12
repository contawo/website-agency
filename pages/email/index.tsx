import Link from "next/link";

const Email = () => {
    return (
        <div>
            <section></section>
            <section>
                <h2>Email was sent to your account</h2>
                <p>Thank you for choosing us. We have sent you an email. Please reply with your availability so that we can schedule a Google Meet call or face-to-face.</p>
                <button>
                    <Link href="/user-1">Dashboard</Link>
                </button>
            </section>
        </div>
    )
}

export default Email;
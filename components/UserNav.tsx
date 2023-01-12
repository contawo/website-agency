import Link from "next/link";
import {GrLogout} from "react-icons/gr"

const UserNav = ({businessName} : {businessName: string}) => {
    const handleLogout = () => {
        
    }
    return (
        <nav>
            <section>
                <h1>Welcome <b>{businessName}</b></h1>
                <p>View your project progress here</p>
            </section>
            <Link href="/" onClick={handleLogout}>
                <GrLogout />
            </Link>
        </nav>
    )
}

export default UserNav;
import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";

const User = () => {
    const router = useRouter();
    const user: string = router.query.userId as string;
    return (
        <UserLayout>
            <h1>User {user}</h1>
        </UserLayout>
    )
}

export default User;
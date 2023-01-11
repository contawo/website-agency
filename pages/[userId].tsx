import { useRouter } from "next/router";

const User = () => {
    const router = useRouter();
    const user: string = router.query.userId as string;
    return (
        <div>
            <h1>User {user}</h1>
        </div>
    )
}

export default User;
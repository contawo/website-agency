import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";
import { collection, addDoc, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Project } from "../types/types";

const User = () => {
    const router = useRouter();
    const [projectData, setProjectData] = useState<Project>({
        authId: "",
        progress: "",
        completed: false,
        start: "",
        end: "",
        url: ""
    });
    const user: string = router.query.userId as string;

    const ref = collection(db, "projects");
    const queryData = query(ref, where("authId", "==", user))

    useEffect(() => {
        onSnapshot(queryData, (snapshot) => {
            const data = snapshot.docs[0].data()
            setProjectData({
                authId: data.authId,
                progress: data.progress,
                completed: data.completed,
                start: data.start,
                end: data.end,
                url: data.url
            });
        })
    }, [queryData])

    return (
        <UserLayout>
            <h1>Progress {projectData.progress}</h1>
        </UserLayout>
    )
}

export default User;
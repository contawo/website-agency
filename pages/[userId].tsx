import UserLayout from "../layout/UserLayout";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Project } from "../types/types";
import { useRouter } from "next/router";
import Complete from "../components/user/Complete";
import View from "../components/user/View";
import { useAuthState } from "../firebase/Authentication";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const render = ""
    return {
        props: {render}
    }
}

const User = ({data} : {data: Project}) => {
    const id = useAuthState();
    const [projectData, setProjectData] = useState<Project>({
        authId: "",
        progress: "",
        completed: false,
        start: "",
        end: "",
        url: ""
    });
    const router = useRouter();

    const ref = collection(db, "projects");
    const queryData = query(ref, where("authId", "==", id))

    useEffect(() => {
        onSnapshot(queryData, (snapshot) => {
            if (!snapshot.empty) {
                const data = snapshot.docs[0].data()
                setProjectData({
                    authId: data.authId,
                    progress: data.progress,
                    completed: data.completed,
                    start: data.start,
                    end: data.end,
                    url: data.url
                });
            } 
        })
    }, [queryData, router])

    return (
        <UserLayout>
            {
                projectData?.completed ? <Complete /> : <View text={projectData?.progress} />
            }
        </UserLayout>
    )
}

export default User;
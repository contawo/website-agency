import UserLayout from "../layout/UserLayout";
import { collection, addDoc, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Project } from "../types/types";
import {useContext} from "react"
import { AppContext } from "../context/AppContext";

const User = () => {
    const {id} = useContext(AppContext);
    const [projectData, setProjectData] = useState<Project>({
        authId: "",
        progress: "",
        completed: false,
        start: "",
        end: "",
        url: ""
    });

    const ref = collection(db, "projects");
    const queryData = query(ref, where("authId", "==", id))

    useEffect(() => {
        onSnapshot(queryData, (snapshot) => {
            const data = snapshot.docs[0].data()
            
            if (data) {
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
    }, [queryData])

    return (
        <UserLayout>
            <h1>Progress {projectData.progress}</h1>
        </UserLayout>
    )
}

export default User;
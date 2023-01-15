import { auth } from "./firebaseConfig";
import {onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

// & State Change
export const useAuthState = () => {
    const [id, setId] = useState<string>("")
    const router = useRouter();

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setId(currentUser.uid)
        } else {
            router.push("/register")
        }
    })

    return id;
}
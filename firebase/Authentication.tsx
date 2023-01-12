import { auth } from "./firebaseConfig";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

// & Login
export const useLogin = (email: string, password: string) => {
    const [logged, setLogged] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    signInWithEmailAndPassword(auth, email, password).then(res => {
        setLogged(true)
    }).catch(err => {
        setError(err.message)
    })

    return { logged, error };
}

// & State Change
export const useAuthState = () => {
    const {id, setId} = useContext(AppContext)
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
import { createContext, useState, useEffect } from "react";

type UserId = {
    id: string,
    setId: (id: string) => void
}

export const AppContext = createContext<UserId>({
    id: "",
    setId: () => {}
});

const AppContextProvider = ({children} : {children: React.ReactNode}) => {
    const [id, setId] = useState<string>("");

    useEffect(() => {
        const getId = localStorage.getItem("id");
        if (getId) {
            setId(JSON.parse(getId));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(id));
    }, [id])

    return (
        <AppContext.Provider value={{id, setId}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
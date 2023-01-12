import { createContext, useState } from "react";

type UserId = {
    id: string,
    setId: (id: string) => void
}

export const AppContext = createContext<UserId>({
    id: "",
    setId: () => {}
});

const AppContextProvider = ({children} : {children: React.ReactNode}) => {
    const [id, setId] = useState<string>("")

    return (
        <AppContext.Provider value={{id, setId}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
import React from "react";
import UserNav from "../components/UserNav";

const UserLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <UserNav businessName="Magna Site" />
            <main>
                {children}
            </main>
        </div>
    )
}

export default UserLayout;
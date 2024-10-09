import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <>
        <div className="bg-base">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
        </>
            
        
        
            
    );

}
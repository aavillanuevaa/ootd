import { Link } from "react-router-dom";
import { Button } from "./Button"
export const Navbar = () => {
    return (
        <>  
        <div className="text-center font-Rokkitt p-4 text-black">
            <span className="text-6xl">O</span>
            <span className="text-5xl">utfit  </span>
            <span className="text-6xl">O</span>
            <span className="text-5xl">f  </span>
            <span className="text-6xl">T</span>
            <span className="text-5xl">he  </span>
            <span className="text-6xl">D</span>
            <span className="text-5xl">ay </span>
        </div>

        <div className="text-2xl flex row gap-16 w-full justify-center font-Raleway">
            <Button name="fits" page="/"/>
            <Button name="pieces" page="/Pieces"/>
            <Button name="daily" page="/Daily"/>
            
        </div>
        
            
            
        </>
    );
}
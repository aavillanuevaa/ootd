import { Link } from "react-router-dom";


export const Button = (props) => {
    return (
      <>
        <div class="relative text-subtext1 hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <span><Link to={props.page}>{props.name}</Link></span>
        </div>
      </>
    );
  };
  


 


  
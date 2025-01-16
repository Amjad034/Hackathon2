import { CiSearch } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiSettings3Line } from "react-icons/ri";
import { IoHeartCircleOutline } from "react-icons/io5";
import Profile from "@/public/Amjad-pic.jpg"
import Image from "next/image";
import { PiCommandBold } from "react-icons/pi";


export default function Navbar(){
    return(

<main>
  <div className="mb-10 bg-white">
      <div className="uper-Header">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Car Website Header</title>
      
      <div className="header">
        {/* Left Section */}
        <div className="header-left flex-row">
        <PiCommandBold />
         
          <span className="title mt-5">High Fidelity Dashboard</span>
        </div>
    
        {/* Right Section */}
        <div className="header-right">
          Last Updated: <span>8 Aug 2022</span>
        </div>
      </div>
    </div>

    </div>
    
    <div className="mb-10 border-1 file:bg-white">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Navbar Design</title>
  
  <div className="navbar bg-white">
    {/* Left Section */}
    <div className="navbar-left">MORENT</div>
    {/* Center Section */}
    <div className="navbar-center">
      <div className="search-bar gap-5 place-items-start">
      <CiSearch />
        <input type="text" placeholder="Search for anything here..." />
        
      </div>
    </div>
    {/* Right Section */}
    <div className="navbar-right">
      <span className="icon" title="Favorites">
        <IoHeartCircleOutline />
      </span>{" "}
      {/* Heart Icon */}
      <span className="icon" title="Notifications red">
      <IoNotificationsCircleOutline />
      </span>{" "}
      {/* Notification Icon */}
      <span className="icon" title="Settings">
     < RiSettings3Line /> 
      </span>{" "}
      {/* Settings Icon */}

     <div className="rounded-s-full">
    <Image src={Profile} alt="Pic"/>

    </div>

 
    </div>
  </div>
  </div>


    
  </main>

    )
}


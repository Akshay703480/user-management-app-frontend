import React from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline"; // Correct import for Heroicons v2


function Navbar() {
  return (
    <nav className="p-4 bg-gray-500 text-white">
      <div className="max-w-7xl flex items-center ">
        <UserCircleIcon className="h-8 w-8 text-white" />
        <Link to="/" className="ml-4 text-2xl font-poppins">
          Users Management
        </Link>
        
    
      </div>
    </nav>
  );
}

export default Navbar;

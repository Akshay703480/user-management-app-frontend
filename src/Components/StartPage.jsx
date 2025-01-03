import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function StartPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/users");
    };

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg')",
            }}
        >
   
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
            <div className="relative flex flex-col items-center text-center bg-white/30 p-8 rounded-lg shadow-lg max-w-md backdrop-blur-md z-10">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Welcome to the Users App
                </h1>
                <p className="text-lg text-white mb-6">
                    Manage your users effortlessly with this simple and intuitive app.
                </p>


                <button onClick={handleGetStarted} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Get Start 
                    </span>
                </button>
            </div>
        </div>
    );
}

export default StartPage;

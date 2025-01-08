import React from "react";
import Navbar from "../Navbar";

function Homepage() {

    return(

        <>

<div className="bg-gray-900 text-white h-screen">
        
        <Navbar />
        
        <div className="bg-gray-800 text-lightGray min-h-screen flex flex-col">
            <div className="container mx-auto px-8 py-24 ">
                <p className="font-poppins text-teal text-sm">
                 Hi, My Name is
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-lightGray">
                   Subham Suar.
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-lightGray">
        I am a Full-Stack Developer
      </h2>
      <h3 className="text-3xl md:text-3xl font-bold">

        I Build things for web using my Power
 
      </h3>

            </div>

        </div>


        </div>
        </>
    );
    
}

export default Homepage;
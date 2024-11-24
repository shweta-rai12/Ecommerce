//import React, { useEffect, useState } from 'react'
////import LightButton from "../../Components/assets/Light.png";
////import DarkButton from "../../Components/assets/Dark.png";
//import LightButton from "../../assets/Light.png";
//import DarkButton from "../../assets/Dark.png";



//const DarkMode = () => {
//	const [theme, setTheme] = useState(
//		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//	);

//	const element = document.documentElement;

//	useEffect(() => {
//		if(theme === "dark"){
//			element.classList.add("dark");
//			localStorage.setItem("theme", "dark");
//		}
//		else{
//			element.classList.remove("dark");
//			localStorage.setItem("theme", "light");
//		}
//	});

//  return ( 

//  <div className="relative">
//	<img src={LightButton} alt="Light Button" onClick={() => {
//		setTheme(theme === "light" ? "dark" :  "light");
//	}}
//	className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}`} 
//	/>
//	<img src={DarkButton} alt="Dark Button" onClick={() => {
//		setTheme(theme === "light" ? "dark" : "light");
//	}}
//	className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300`} 
//	/>
//  </div>
//  ); 
//};

//export default DarkMode;


import React, { useEffect, useState } from 'react';
import LightButton from "../../assets/Light.png";
import DarkButton from "../../assets/Dark.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Add dependency array for `theme`

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Light Button"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 top-0 z-10"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark Button"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 top-0 z-10"
        />
      )}
    </div>
  );
};

export default DarkMode;

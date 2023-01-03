import {react, useEffect, useState} from "react";
import box from "../styles/box.module.css";
import Man from "../images/3dMan.png";
import Image from "next/image";

export default function (){

    if(process.browser){
        var [more, setmore] = useState(0)

        const div = document.querySelectorAll("div");
    
   useEffect(() => { 
    setTimeout(() => {
            const animationBoxPerson = setInterval(() => {
                setmore(more++)

                div[5].style.opacity = `${more}%`
                if (more == 100) {
                    setmore(100)
                 clearInterval(animationBoxPerson)
                }
             }, 10);
        }, 21000);}, [])
    }
    return (
        <div className={box.boxPerson}>
        <Image src={Man}  className={box.gps} id={box.man}   />  
        <h1 className={box.h1Person}>How this app work? </ h1>
        <p  className={box.pPerson}>This app working </p>
       </div>
    )
}
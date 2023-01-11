import react from "react";
import box from "../styles/box.module.css";
import Man from "../images/3dMan.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Bluebox (){

    const code = () =>{
    if(process.browser){
        var [more, setmore] = useState(0);

        const div = document.querySelectorAll("div");
    
   useEffect(() => { 
    setTimeout(() => {
            const animationBoxPerson = setInterval(() => {
                setmore(more++)

                div[8].style.opacity = `${more}%`
                if (more == 100) {
                    setmore(100)
                 clearInterval(animationBoxPerson)
                }
             }, 10)
        }, 20000)}, [])
    }
}
code()

    return (
        <div className={box.boxPerson}>
        <Image src={Man}  className={box.gps} id={box.man}  alt="man" />  
        <h1 className={box.h1Person}>Search Coordinates</ h1>
        <h2 className={box.h2Person}>Coordinates</h2>
        <p  className={box.pPerson}>Coordinates A pair of numbers that describe the position of a point on a coordinate plane by using the horizontal and vertical distances from the two reference axes. Usually represented by (x,y) the x-value and y-value.</p>
        <h2 className={box.h2Person}>IP Address</h2>
        <p  className={box.pPerson}>An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.</p>
       </div>
    )
}
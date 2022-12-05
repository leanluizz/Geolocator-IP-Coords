import react from "react";
import box from "../styles/box.module.css";
import Man from "../images/3dMan.png";
import Image from "next/image";

export default function (){
    return (
        <div className={box.boxPerson}>
        <Image src={Man}  className={box.gps} id={box.man}   />  
        <h1 className={box.h1Person}>Search Coordinates or IP </ h1>
        <h2 className={box.h2Person}>Coordinates</h2>
        <p  className={box.pPerson}>Coordinates A pair of numbers that describe the position of a point on a coordinate plane by using the horizontal and vertical distances from the two reference axes. Usually represented by (x,y) the x-value and y-value.</p>
        <h2 className={box.h2Person}>IP Address</h2>
        <p  className={box.pPerson}>An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.</p>
       </div>
    )
}
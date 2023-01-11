import { react, useState, useEffect } from "react";
import options from "../styles/options.module.css";

export default function a (){   
    const [state, setstate] = useState("Hello World!")

    return(
    <div className={options.box}>
        <ul type="none">
            <li><h2>Map</h2></li>
            <li><h2>History</h2></li>
            <li><h2>Tracked</h2></li>
        </ul>
      
    </div>
    )
}
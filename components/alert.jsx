import React, { useEffect, useState } from "react";
import Image from "next/image.js";
import Alert from "../styles/alert.module.css";
import LittleAy from "../images/alert.png";

export default function() {

    let [Left, setLeft] = useState(2)

    const styleBox = {
        left: `-${Left}%`
}
    if (process.browser) {
        const X = document.querySelector(".X")
        const box = document.querySelector("#box")
        useEffect(() => {
            setTimeout(() => {
                const outPage = setInterval(() => {
                    setLeft(Left++)
                    if (Left == 100) {
                        setLeft(100)
                        clearInterval(outPage)
                    }
                },10 );
            }, 10000);
        }, [])

        useEffect(() => {
            X.addEventListener("click", () => box.remove())
        }, [])
        }



    return(
        <div id="box" className={Alert.box} style={styleBox}>
            <h2>This app you need allow local permissions for use! </h2>
            <Image src={LittleAy} alt="alert"/>
            <button className="X" >X</button>
        </div>
    )
}
import React from "react";
import Image from "next/image.js";
import Alert from "../styles/alert.module.css";
import LittleAy from "../images/alert.jpg";

export default function a () {
    return(
        <div className={Alert.box}>
            <Image src={LittleAy} alt="alert"/>
        </div>
    )
}
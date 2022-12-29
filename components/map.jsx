import react, { useEffect, useState } from "react";
import mapcss from "../styles/map.module.css"

export default function () {

const [hello, sethello] = useState(" ")

    useEffect(() =>{
        setTimeout(() => {
           sethello("mamei seu pai")
        }, 2000);
    },[])

    return(

      <div className={mapcss.white}>
        {hello}
      </div>
    )
}
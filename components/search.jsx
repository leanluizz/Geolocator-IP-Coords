import react from "react";
import Search from "../styles/search.module.css"
import Astronaut from "../images/astronaut.gif"
import Image from "next/image"

export default function (props){
    return(
        <div className={Search.box}>
            <div className={Search.Earth}>
                <Image src={Astronaut} className={Search.gif}/>
                <div class={Search.list}>

                </div>
            </div>
           <form className={Search.content_blue}>
                <input type="text" className={Search.input} placeholder="Search ip or coordinates here!" />
                <button className={Search.button}>Go!</button>
           </form>
        </div>
    )
}
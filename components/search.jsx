import react from "react";
import Search from "../styles/search.module.css"
import Astronaut from "../images/astronaut.gif"
import Image from "next/image"

export default function Sear (props){

    //Os 2 Arrays tem que ter o mesmo número de dados

    const listKeys = ["Local", "Rua", "Endereço", "Nº"]
    const listValues = ["CNL", "Levindo Lana da Silva", "Rochedo", "250"]

    return(
        <div className={Search.box}>
            <div className={Search.Earth}>
                <Image src={Astronaut} className={Search.gif}/>
                <div class={Search.list}>
                    <ul>
                  {listKeys.map((e, i) => <li type="none">{e} : {listValues[i]}</li>)}
                    </ul>  
                </div>
            </div>
           <form className={Search.content_blue}>
                <input type="text" className={Search.input} placeholder="Search ip or coordinates here!" />
                <button className={Search.button}>Go!</button>
           </form>
        </div>
    )
}
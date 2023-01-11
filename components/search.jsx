import react, { useEffect, useState } from "react";
import Search from "../styles/search.module.css"
import Astronaut from "../images/astronaut.gif"
import Image from "next/image"

export default function Sear (props){

    fetch("https://maps.google.com", {
       header: {'Access-Control-Allow-Origin': 'http://localhost:3000'},
       mode:"no-cors"
    })
    .then(response => console.log(response))

    let listKeys = []
    let listValues = []
    const [data , setdata] = useState({})

    try {
        useEffect(() => {
            const geoLoc = (pos) => {
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
            .then(response => response.json())
            .then(response => setdata(response.address))
        }
        navigator.geolocation.getCurrentPosition(geoLoc)
        }, [])
        
    } catch (error) {
        console.log(error)
    }

   listKeys.push(Object.keys(data))
   listValues.push(Object.values(data))
   const values = listValues[0]
    return(
        <div className={Search.box}>
            <div className={Search.Earth}>
                <Image src={Astronaut} className={Search.gif} alt="Astronaut"/>
                <div className={Search.list}>
                    <ul>
                  {listKeys[0].map((e, i) => <li type="none" className={Search.list} key={e}>{e} : {values[i]} </li>)}
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
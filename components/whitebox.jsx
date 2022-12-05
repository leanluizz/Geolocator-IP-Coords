import react from "react";
import box from "../styles/box.module.css";
import GPS from "../images/gps-icon.png";
import Image from 'next/image'

export default function (props) {
    const code = () =>{
        if(process.browser)
        {
            let more = 0
            let incrementPersonal = 0
            let down = 100
            const div = document.querySelectorAll("div")
            console.log(div);
        setTimeout(() => {

            const animationBoxGPS = setInterval(() => {
               div[3].style.opacity = `${more++}%`
               if (more == 100) {
                clearInterval(animationBoxGPS)
               }
            }, 10);
            
            setTimeout(() => {
                const outAnimationGPS = setInterval(() => {
                    div[3].style.opacity = `${down--}%`
                    if (down == 0) {
                        clearInterval(outAnimationGPS)
                       }
                }, 10);
            }, 10000); 

            setTimeout(() => {
                const animationBoxPerson = setInterval(() => {
                    div[4].style.opacity = `${incrementPersonal++}%`
                    if (incrementPersonal == 100) {
                     clearInterval(animationBoxPerson)
                    }
                 }, 10);
            }, 11000);

           

            setTimeout(() => {
                const animationBoxGPS = setInterval(() => {
                    console.log(down);
                    div[3].style.opacity = `${down++}%`
                    div[3].style.marginRight = "auto"
                    div[3].style.position = "relative"
                    div[3].style.left= "0%"
                    if (down == 100) {
                     clearInterval(animationBoxGPS)
                    }
                 }, 10);
            }, 30000); //Altere aqui o tempo em que a animação aparece denovo
        }, 10000);
      }
        }
        code()

    
    return(
        
     <div className={box.boxGPS}>
     <Image src={GPS}  className={box.gps} alt="GPS"  />  
     <h1 className={box.h1GPS}>Search Coordinates or IP </ h1>
     <h2 className={box.h2GPS}>Coordinates</h2>
     <p  className={box.pGPS}>Coordinates A pair of numbers that describe the position of a point on a coordinate plane by using the horizontal and vertical distances from the two reference axes. Usually represented by (x,y) the x-value and y-value.</p>
     <h2 className={box.h2GPS}>IP Address</h2>
     <p  className={box.pGPS}>An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.</p>
    </div>
    
    )
}
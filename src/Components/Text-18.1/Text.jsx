
import React, {useState} from "react";
import "./Text.css"



const Text = ({text, max}) => {
    const [fullDisplay, setDisplay] = useState (true);
    const changeDisplay = () => {
        setDisplay(!fullDisplay)
    }
    const shortText = text.substring(0,max)
    // const fullText = <div>
    //     {text}
    //     <span onClick={()=>{changeDisplay()}}>show less</span>
    // </div>
    // TODO: how to take this div to a var?

    return(
        fullDisplay? 
        <div>
        {text}
        <span className="Text-span" onClick={()=>{changeDisplay()}}>show less</span>
        </div>:
        //  {fullText}:
        <div>{shortText}...<span className="Text-span" onClick={()=>{changeDisplay()}}>read more</span></div>

    )
}


export default Text

import React, { useState } from "react";
import "./Text.css"



const Text = ({ text, max }) => {
    const [fullDisplay, setDisplay] = useState(true);
    const changeDisplay = () => {
        setDisplay(!fullDisplay)
    }
    const shortText = text.substring(0, max)
    const fullText1 = () => {
        return (<div>{shortText}...<span className="Text-span"
            onClick={() => { changeDisplay() }}>read more</span></div>)
    }
    // const fullText = <React.Fragment>{shortText}...<span className="Text-span"
    //     onClick={() => { changeDisplay() }}>read more</span></React.Fragment>

    return (
        fullDisplay ?
            <div>
                {text}
                <span className="Text-span" onClick={() => { changeDisplay() }}>show less</span>
            </div> :
            // {fullText}
             fullText1()

            // <div>{shortText}...<span className="Text-span" onClick={() => { changeDisplay() }}>read more</span></div>

    )
}


export default Text
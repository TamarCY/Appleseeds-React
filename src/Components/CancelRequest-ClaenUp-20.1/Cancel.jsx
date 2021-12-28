import React,{useState, useEffect} from "react";
import Countries from "../Countries-19.2/Countries";


const Cancel = () => {
    const [display, setDisplay] = useState (false);
    const renderCountries = () => {
        if(display){
        return <Countries/>
        }
    }
    return (
        <div>
            <button
               onClick = {
                  () =>{ setDisplay(!display)}
                // ()=>{console.log("click")}
               }
            >
                Display Countries
            </button>
            {renderCountries()}
         {/* {display} && <Countries/> */}

        </div>
    )
}


export default Cancel
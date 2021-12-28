import React, { useState, useEffect, useRef } from "react";


const Edit = () => {
    const [buttonText, setButtonText] = useState("edit");
    const [inputDisplay, setInputDisplay] = useState(false);
    const inputRef = useRef()

    

  

    useEffect(()=>{
        if (inputDisplay){
            inputRef.current.focus()
        }
    },[inputDisplay]

    )

    return (
        <div>
            {inputDisplay ? <input type="text"  ref={inputRef}/> : null}
            <button
                onClick={
                    () => {
                        inputDisplay ? setButtonText("edit") : setButtonText("save")
                        setInputDisplay(!inputDisplay);
                    }
                } >
                {buttonText}</button>

        </div>
    )
}


export default Edit
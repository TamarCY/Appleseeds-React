import React, {useState, useRef} from "react";
import image1 from "../../assets/images/img2.jpeg"
import image2 from "../../assets/images/img1.jpeg"
import "./Image.css"



const ImageToggle = () => {
    const [firstImg, setFirstImg] = useState(image1)
    const [secondImg, setSecondImg] = useState(image2)
    const image1Ref = useRef()
    const image2Ref = useRef()

    return (
        <div>

            <img ref={image1Ref} className="first" src={firstImg} alt="bla" 
            onMouseEnter={()=>{
                setFirstImg(image2)
            }}
            onMouseOut={()=>{
                setFirstImg(image1)
            }}/>
            <img ref={image2Ref} className="second" src={secondImg} alt="bla"
            onMouseEnter={()=>{
                setSecondImg(image1)
            }}
            onMouseOut={()=>{
                setSecondImg(image2)
            }}/> 
        </div>
    )
}

export default ImageToggle




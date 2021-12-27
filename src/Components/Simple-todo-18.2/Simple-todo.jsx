import React, {useState} from "react";


const Simple = () => {
 const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ]

const [items, setItems] = useState(data);
const handleClick = (e) => {
   const itemsCopy = [...items];
   const selectedItem = itemsCopy.find((element)=> (element.name === e.target.className));
   selectedItem.completed = !selectedItem.completed;
   setItems(itemsCopy)
}
const renderItems = () => {
    
    return items.map((item)=>{ return(
        <div key={item.name}>
        <div  style={item.completed? {textDecoration: "line-through"}:{}}>
            {item.name}
        </div>
        <button className={item.name} onClick={handleClick}>{item.completed? <span className={item.name}> &#x2713;</span > : <span className={item.name}> &#10060;</span>}</button>
        </div>
        
    )
        
    })
}

    return (
    
     <div>{renderItems()}</div>
 )
}

export default Simple
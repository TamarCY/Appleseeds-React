import React, { useState, useEffect } from "react";
import axios from "axios";



const Algolia = () => {

    const [term, setTerm] = useState("hooks");
    const [input, setInput] = useState("hooks")
    const [results, setResults] = useState([]);


  

    // useEffect(
    //  ()=> {
    //      const foo = async () => {
             
    //      };
    //      foo()

    //  },[]

    //     );
    useEffect(
     ()=> {   
         const getData = async (string) => {
        try {
            const {data} =  await axios.get(`https://hn.algolia.com/api/v1/search?query=${string}`)
            setResults(data.hits)
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    };
        getData(term)
     },[term]);



    const renderResults = () => {
        return (
            results.map((item)=>{return <li key={item.objectID}><a  href={item.url}>
                {item.title}
            </a></li>})
        )
    }

    const handleSearch = () => {
        console.log(input);
        setTerm(input)
    }
    return (
        <div>
            <h1>Algolia search</h1>
            <input type="text"
            value= {input}
            onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
            <ul>{renderResults()}</ul>
        </div>
    )
}

export default Algolia
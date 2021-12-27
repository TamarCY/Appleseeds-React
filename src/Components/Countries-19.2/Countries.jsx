import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import List from "./List";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [term, setTerm] = useState ("")
    useEffect( ()=> {
        const getData = async () => {
        try {
        const {data} = await axios.get("https://restcountries.com/v2/all");
        setCountries(data)
        setFiltered(data)

        } catch (error){
            console.log("error");
        }
    }
    getData();
   
        
    },[]);

    const filterCountries = (e) => {
        setTerm(e.target.value);
        const result = countries.filter((country)=>{return country.name.toLowerCase().includes(e.target.value)})
        setFiltered (result);
    }

    const renderCountries = () => {
        return (
            filtered.map((item)=> {return (<li key={item.alpha2Code}>{item.name}</li>)})
        )
    }
    if(!filtered) return <div></div>
    return (
        <>
            <input type="text" 
                value = {term}
                onChange = {(e)=>(filterCountries(e))}
             />
            <div className="list">
                <ul>
                    {renderCountries()}
                </ul>
            </div>
        </>
    )
}


export default Countries
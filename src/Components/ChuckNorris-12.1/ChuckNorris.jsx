import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const ChuckNorris = () => {
    const [random, setRandom] = useState("");
    const [categories, setCategories] = useState([]);
    //TODO: state or var ?
    const [categoryJoke, setCategoryJoke] = useState("");


    useEffect (
        ()=>{
            const getCategory = async () => {
                try{
                const categoryResponse = await axios.get("https://api.chucknorris.io/jokes/categories");
                setCategories(categoryResponse.data);
                } catch (error){
                    console.error(error);
                }
            }
            getCategory()
        },[]
    )
    
    const renderCategories = () => {
        return categories.map(element => {return  <button  key={element}>{element}</button> })
    }

    const getJoke = async () => {
        try{
        const randomResponse = await axios.get('https://api.chucknorris.io/jokes/random');
        setRandom(randomResponse.data.value)
        } catch (error){
            console.error(error);
        }
    }


    const getCategoryJoke = async (category) => {
        try{
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        setCategoryJoke(response.data.value)
    } catch (error){
        console.error(error);
    
    }
}


    return (
        <>
                <button onClick={getJoke}>Click for a joke</button>
                <div>{random}</div>
                <div className="categories" onClick={(event)=>{getCategoryJoke(event.target.innerText)}}>{renderCategories()}</div>
                <div>{categoryJoke}</div>
            </>
    )
}




export default ChuckNorris
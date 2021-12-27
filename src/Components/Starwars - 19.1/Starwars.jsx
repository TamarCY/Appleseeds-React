import React, {useState, useEffect} from "react";
import axios from "axios";


const Starwars = () => {
    const [movies, setMovies] = useState([])
    useEffect (() => {
        const getData = async () => {
        try {
         const {data} = await axios.get(`https://swapi.dev/api/films/1/`);
         console.log(data);
         setMovies(data);

        } catch (error){
            console.log("error");
        }

        };
        getData()
    },[])
    console.log(movies);
    if(!movies) return <div></div>
    return (
        <>
        <div>{movies.director}</div>
        <div>{movies.title}</div>
        </>
    )
}

export default Starwars
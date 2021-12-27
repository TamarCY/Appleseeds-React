import React, {useState, useEffect} from "react";
import axios from "axios";


const Starwars = () => {
    const [movies, setMovies] = useState("")
    useEffect (() => {
        const getData = async () => {
         const {data} = await axios.get(`https://swapi.dev/api/films/1/`)
         setMovies(data)
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
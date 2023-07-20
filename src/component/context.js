import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();


const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}` ;

const AppProvider = ({children}) =>{

    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState  ([]);
    const [isError, setIsError] =useState ({show:false, msg:""});
    const [query, setQuery] = useState("love")

    const getMovies = async(url)=>{
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(true);
                setMovie(data.Search);
                console.log(data);
                setIsLoading(false);
                setIsError({show: false})
            }else{
                setIsError({
                    show: true,
                    msg:data.Error
                })
            }
        }
        catch(error){
            alert(error)
        }
    }

    useEffect(()=>{
       let timerOut =  setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}`);
        }, 800);
        return ()=> clearTimeout(timerOut);
    },[query]);

    return (
       
    <AppContext.Provider value={{movie, isLoading, isError, query, setQuery}}>
        {children}</AppContext.Provider>
    );
};

const useGlobalContext =()=>{
    return useContext(AppContext); 
};
export {AppContext, AppProvider, useGlobalContext}
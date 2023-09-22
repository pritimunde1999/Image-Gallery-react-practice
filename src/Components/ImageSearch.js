import React,{useState,useEffect} from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const ImageSearch = ({setImages}) =>{
   const [search,setSearch] = useState("");
   
   useEffect(()=>{
        implementSearch();
    },[])
   
   function implementSearch(){
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                query : search || "random"
            },

            headers:{
               Authorization :`Client-ID ${apiKey}`
            }
        })
        .then(response => setImages(response.data.results))
        .catch(err => console.log(err))
   }
   return(
   <div>
        <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
        <button onClick={implementSearch}>Search</button>
    </div>
   )
}


export default ImageSearch;
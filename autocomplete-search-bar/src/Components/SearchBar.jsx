import { useEffect, useState } from 'react'
import '../App.css'
export const SearchBar=()=>{

    let [searchResults,setSearchResults]=useState([])
    let [showResults,setShowResults]=useState(false)
    let [searchInput,setSearchInput]=useState("")
    let [cachedRes,setCachedRes]=useState({})

    const fetchSearchResults=async(inp)=>{
        inp=inp.trim()

        // caching
        if(cachedRes[inp]){
            console.log("fetched from cache", inp);
            setSearchResults(cachedRes[inp])
            return
        }

        // console.log(inp.target.value);
        console.log("API call made",inp)
        const res=await fetch("https://dummyjson.com/recipes/search?q="+inp)
        const finalRes=await res.json()
        // console.log(finalRes.recipes);
        setSearchResults(finalRes.recipes)
        setCachedRes({...cachedRes,[inp]: finalRes.recipes})
    }

    // debouncing
    useEffect(()=>{

        if(!searchInput.trim()){
            setSearchResults([])
            return
        }

        const timer=setTimeout(()=>{
            fetchSearchResults(searchInput)
        },300)

        return ()=>{
            clearTimeout(timer)
        }

    },[searchInput])

    const hideShowSetter=(val)=>{
        setShowResults(val)
    }

    return (
        <div>
            <div className="search-inp-div">
                <input type="text" onChange={(e)=>setSearchInput(e.target.value)} onFocus={()=>hideShowSetter(true)} onBlur={()=>setTimeout(()=>hideShowSetter(false), 100)} />
            </div>

            {showResults && (
                <div className="recommended-div">
                    {
                        searchResults && searchResults.map((item)=>{
                            return (
                                <div key={item.id} className='items'>
                                    <div>{item.name}</div>
                                    <img src={item.image}/>
                                </div>
                            )
                        })
                    }
                </div>
            )}

        </div>
    )
}
const InterestsForm = ({data,setData,errors}) => {

    const handleInterestsChange=(e,item)=>{
        // console.log(item);

        setData({
            ...data,
            [item]: data.interests.includes(e.target.value) ? data.interests.filter(int=>int!==e.target.value) : [...data.interests,e.target.value]
        })
    }
    // console.log(data);
    return (
        <div>
            <div className="">
              

                   <input type="checkbox" checked={data.interests.includes("Web Dev")} onChange={(e)=>handleInterestsChange(e,"interests")} value="Web Dev" />
                   <label>Web Dev</label>

                   <input type="checkbox" checked={data.interests.includes("App Dev")} onChange={(e)=>handleInterestsChange(e,"interests")} value="App Dev" />
                   <label>App Dev</label>

                   <input type="checkbox" checked={data.interests.includes("AI/ML")} onChange={(e)=>handleInterestsChange(e,"interests")} value="AI/ML" />
                   <label>AI/ML</label>

                   <input type="checkbox" checked={data.interests.includes("Blockchain")} onChange={(e)=>handleInterestsChange(e,"interests")} value="Blockchain" />
                   <label>Blockchain</label>
               
            </div>

             <div>
                {errors?.interests && <h1 className="error">{errors.interests}</h1>}    
            </div>
        </div>
    )
}

export default InterestsForm
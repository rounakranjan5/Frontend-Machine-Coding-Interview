const SettingsForm = ({data,setData,errors}) => {

    const handleSettingsChange=(e,item)=>{
        // console.log(item);
        setData({
            ...data,
            settings: {
                ...data.settings,
                [item]: e.target.value
        }})
    }
    // console.log(data);
    return (
        <div>
            <div className="">
                
                <input type="radio" name="theme" value="Dark" checked={data.settings.theme==="Dark"} onChange={(e)=>handleSettingsChange(e,"theme")} />Dark
                <br/>
                <br/>
                <input type="radio" name="theme" value="Light" checked={data.settings.theme==="Light"} onChange={(e)=>handleSettingsChange(e,"theme")}/>Light
               
            </div>

            <div>
                {errors?.theme && <h1 className="error">{errors.theme}</h1>}    
            </div>
        </div>
    )
}

export default SettingsForm
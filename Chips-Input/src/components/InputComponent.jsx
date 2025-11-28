import { useState } from 'react'
import '../App.css'

export const InputComponent=()=>{

    let [inpText,setInpText]=useState("")

    let [chips,setChips]=useState([])

    const handleHit=(e)=>{
        if(e.key=="Enter"){
            console.log("Enter Hit",inpText);
            let newChipsArr=[...chips,inpText]
            setChips(newChipsArr)
            setInpText("")
        }
    }

    const handleCrossClick=(index)=>{
        console.log("cross",index);
        let newChipsArr=[...chips];
        newChipsArr.splice(index,1)
        console.log(newChipsArr);
        setChips(newChipsArr)
    }

    return (
        <div>
            <div className='inp-div'>
                <input type="text" placeholder="Type , Hit , Enter and create Chip" onChange={(e)=>setInpText(e.target.value)} onKeyDown={(e)=>handleHit(e)} value={inpText} />
            </div>

            <div className='chips-div'>
                {
                    chips && chips.map((chip,index)=>{
                        return <div key={index} className='chips-item' >{chip} <span className='cross-icon' onClick={()=>handleCrossClick(index)} >X</span></div>
                    })
                }
            </div>
        </div>
    )
}
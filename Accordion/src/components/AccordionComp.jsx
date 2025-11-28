import { useState } from 'react'
import '../App.css'
export const AccordionComp=({items})=>{
  
  let [showItem,setShowItem]=useState(null)

  let handleClick=(index)=>{
    showItem==index ? setShowItem(null) : setShowItem(index)
  }

  return items.length==0 ? "No items Available" : (
    <div>
        {items && items.map((item,index)=>{
            return(
                <div key={index} className='item-div'>
                    <h3 className='title' onClick={()=>handleClick(index)}>{item.title} 
                    {showItem==index ? <span>&nbsp;&nbsp;⬆</span> :
                        <span>&nbsp;&nbsp;⬇</span>}
                    </h3>
                    {showItem==index && <p className='item-content'>{item.content}</p>}
                </div>
            )
        })}
    </div>
  )
}
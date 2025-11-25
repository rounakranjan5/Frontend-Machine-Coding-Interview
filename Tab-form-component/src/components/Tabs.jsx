import { Component, useState } from "react"
import ProfileForm from "./ProfileForm"
import InterestsForm from "./InterestsForm"
import SettingsForm from "./SettingsForm"

const Tabs=()=>{

    const [activeTab,setActiveTab]=useState(0)
    const [errors,setErrors]=useState()

    const [data,setData]=useState({
        name:"",
        age:"",
        email:"",
        gender:"",
        interests:[],
        settings:{
            theme:null
        }
    })

    const TabConfig=[
        {
            name:'Profile',
            Component: ProfileForm,
            validate:()=>{
                let err={};
                if(data.name.trim().length<=2)
                    err.name="Name must be at least 3 characters long"
                const validateEmailRegex = /^\S+@\S+\.\S+$/;
                if(!validateEmailRegex.test(data.email))
                    err.email="Email is not valid"  
                if(data.age<18)
                    err.age="Age must be at least 18"
                if(data.gender.trim().length===0)
                    err.gender="Select a gender"
                setErrors(err)
                return err
            }
        },

        {
            name:'Interests',
            Component: InterestsForm,
            validate:()=>{
                let err={};
                if(data.interests.length===0)
                    err.interests="Select at least one interest"
                setErrors(err)
                return err
            }
        },

        {
            name:'Settings',
            Component: SettingsForm,
            validate:()=>{
                let err={};
                if(!data.settings.theme)
                    err.theme="Select a theme"
                setErrors(err)
                return err
            }
        },
    ]

    const handleActiveTab=(ind)=>{
        if(ind<0 || ind>=TabConfig.length) return
        if(ind > activeTab){
            const err = TabConfig[activeTab].validate();
            if(Object.keys(err).length > 0) return; 
        }
        setActiveTab(ind)
    }

    const handleSubmit=()=>{
        if(Object.keys(TabConfig[activeTab].validate()).length>0) return;
        alert("Form Submitted Successfully")
        console.log("submitted form data",data);
    }

    const ActiveComponent=TabConfig[activeTab].Component

    return (
        <div>
            <div className="parent-tab">

                { 
                    TabConfig.map((tab,ind)=>{
                        return <div className={ind===activeTab? "tabs active" : "tabs"} onClick={()=>handleActiveTab(ind)} key={ind} >{tab.name}</div>
                    })
                }
                
                
            </div>

            <div className="profile-form">
               <ActiveComponent data={data} setData={setData} errors={errors} />
               <div  className="btns">
                    {activeTab>=1 && <button onClick={()=>handleActiveTab(activeTab-1)} >Prev</button>}
                    {activeTab<TabConfig.length-1 && <button onClick={()=>handleActiveTab(activeTab+1)}>Next</button>}
                    {activeTab==TabConfig.length-1 && <button onClick={()=>handleSubmit()} >Submit</button>}
                </div>
            </div>
            
            

        </div>
    )
}

export default Tabs
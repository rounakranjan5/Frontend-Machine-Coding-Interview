const ProfileForm = ({data,setData,errors}) => {

    const handleProfileChange=(e,item)=>{
        // console.log(item);
        setData({
            ...data,
            [item]: e.target.value
        })
    }
    // console.log(data);
    return (
        <div className="profile-form-custom-styling">
                

                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={data?.name} onChange={(e)=>handleProfileChange(e,"name")} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Email" value={data?.email} onChange={(e)=>handleProfileChange(e,"email")}/>
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="Number" placeholder="Age" value={data?.age} onChange={(e)=>handleProfileChange(e,"age")}/>
                    </div>

                    <div>
                        <label>Gender</label>
                        <select className="dd" value={data?.gender} onChange={(e)=>handleProfileChange(e,"gender")}>
                            <option value="" disabled hidden>Pick one</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div>
                        {errors?.email && <h1 className="error">{errors.email}</h1>}    
                        {errors?.age && <h1 className="error">{errors.age}</h1>}
                        {errors?.name && <h1 className="error">{errors.name}</h1>}
                        {errors?.gender && <h1 className="error">{errors.gender}</h1>}
                    </div>
        </div>
    )
}

export default ProfileForm
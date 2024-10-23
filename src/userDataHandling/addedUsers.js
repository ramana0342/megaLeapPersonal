

import React, { useContext } from 'react';
import { useState} from 'react';
import axios from 'axios';
import "./index.css";
import { store } from './userApp';



const  AddedUsers= ()=>{
    const{UsersData,setUsersData,state,setState,addUserButton,setAdduserButton} = useContext(store)
    const [formData,setFromData] = useState({name:"",email:"",number:"",company:{name:""},address:{city:""}})
    
   
    

    const handleChange = (field, value) => {
      if (field === "address.city") {
        setFromData((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            city: value,
          },
        }));
      } else if (field === "company.name") {
        setFromData((prev) => ({
          ...prev,
          company: {
            ...prev.company,
            name: value,
          },
         
        }));
        
      } else {
        setFromData((prev) => ({
          ...prev,
          [field]: value,
        }));
      }
    };
    
   const handleSubmit=(e)=>{
    setAdduserButton((prev)=>!prev)
     e.preventDefault()
     console.log("Submitting form with data:", formData);
     //console.log(formData)
     axios.post("https://jsonplaceholder.typicode.com/users" , formData).then((res)=>{
       console.log(res.data)
      
       setUsersData((prevData) => [...prevData, res.data])
       setFromData({ name: "", email: "" ,number:"",company:{name:""},address:{city:""}});
       setAdduserButton((prev)=>!prev)
     }).catch((err)=>{
       console.log(err)
     })

   }
 
   

  return (<>
  
  <div className='container'>
    <div className='row'>
  <section className='FormSection'>
  <div>
                <form onSubmit={handleSubmit}>
                  <div>
              <label>Enter User Name:</label><br/>
              <input value={formData.name} onChange={(e)=>{handleChange("name",e.target.value)}} type="text" placeholder="User Name" required></input >
              </div>
              <div>
                <label>Enter User Email:</label><br/>
              <input value={formData.email} onChange={(e)=>{handleChange("email",e.target.value)}} type="email" placeholder="User mail" required></input>
              </div>
              <div>
                <label>Enter User Mobile Number:</label><br/>
              <input value={formData.number} onChange={(e)=>{handleChange("number",e.target.value)}} type='number' placeholder="User Number" required />
              </div>
              <div>
                <label>Enter User address:</label><br/>
              <input value={formData.address.city} onChange={(e)=>{handleChange("address.city",e.target.value)}} type='text' placeholder="Ente User Address" required />
              </div>
              <div>
                <label>Enter Company Name:</label><br/>
              <input value={formData.company.name} onChange={(e)=>{handleChange("company.name",e.target.value)}} type='text' placeholder="Enter User Company" required />
              </div>
              <div style={{textAlign:"center", padding:"10px"}}>{addUserButton ? <button type="submit" className="btn btn-primary" >Add User</button>
                   :<button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span></button>}</div>
              </form>
              </div>
  </section>
  </div>
  

</div>

  </>
    
  )
}

export default AddedUsers
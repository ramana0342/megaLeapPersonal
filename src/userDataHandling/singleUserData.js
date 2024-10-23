
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const SingleUserData=()=>{
          let {id}=useParams()
          console.log(id)
      const [state,setState]= useState([])
         useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                let  data=res.data
                let UserData=data.filter((item,index)=>{
                    if(item.id==id){
                        return true
                    }
                })
                console.log(UserData)
                setState(UserData)
            })
     
           
         },[])

    return(<>
       <h1>User Data</h1>

       <div className="container">
        
       {state.map((item,index)=>{
                             return(<>
                               <div class="card"  >
                                      <p>Name: {item.name}</p>
                                      <p>Email : {item.email}</p>
                                      <p>Company Name : {item.company.name}</p>
                                      <p>address : {item.address.city}</p>
                                      <p>phone : {item.phone}</p>
                               </div>
                             </>)
                 })}
       </div>
        

    </>)



}

export default SingleUserData
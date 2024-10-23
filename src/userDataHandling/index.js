import { useState,useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./index.css";
import FilterData from "./filterData";
import InitialData from "./initialData";
import { store } from "./userApp";
import AddedUsers from "./addedUsers";



const Home=()=>{

    const navigate=useNavigate()
    const {UsersData,setUsersData,setState} = useContext(store)
    const[userfilterData,setFilterData] = useState([])
    const[inputValue,setInputValue] = useState("")
    const[isSearchVisible,setisSearchVisible] = useState(true)
  
  
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
               console.log(res.data)
               setUsersData(res.data)
         })
    },[])

   
    useEffect(()=>{
      let filterData=UsersData.filter((item,index)=>{
        // console.log(item.name.toUpperCase()==value.toUpperCase())
                  if(`${item.email}${item.name}`.toUpperCase().includes(inputValue.toUpperCase())==true){
                              return true
                  }
       })
       setFilterData(filterData)
    },[inputValue])
      
      const display=()=>{
        if(UsersData.length===0  ){
          return <div className="loadingDiv"><h1>Loading....</h1></div>
        }
        else if(userfilterData.length>0 && inputValue!==""){
          return  <FilterData userfilterData={userfilterData}/>
        }
        else if(userfilterData.length===0 && inputValue!==""){
            return <div className="loadingDiv"><h1>Data Not Find</h1></div>
        }
        return <InitialData UsersData={UsersData} deleteUserFun={deleteUserFun}  />
        
      }


      const deleteUserFun= (i)=>{
        let removeUser = UsersData.splice(i,1)
        console.log(removeUser)
        setUsersData(UsersData)
        setState(prev=>!prev)
     
     }
     
  

     


    

    return(<>
       <div className="container">
        <div class="row">
          <section>
            <div class="navBar">
               <button onClick={()=>{setisSearchVisible((prev)=>!prev)}}>Search</button>
               <button onClick={()=>{setisSearchVisible((prev)=>!prev)}}>Add User</button>
            </div>
          </section>
        </div>
        <div className="row" >
           {isSearchVisible ? <section className="searchInputSection" >
          <input className="SearchInput" onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder="Search user By UserName or UserEmail" />
            </section> : <section>
              <AddedUsers/>
            </section> }
            
             
            
              
           
           
            
        
         
          
           
          </div>

          <div className="row">
        
                 {display()}
                 
              
          </div>
        </div>
    </>)

}
export default Home
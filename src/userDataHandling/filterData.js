import React from "react"
import { useNavigate } from "react-router-dom"

const FilterData=React.memo(({userfilterData})=>{

    const navigate=useNavigate()

           return(<>
             <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
    { userfilterData.map((item,index)=>{
                             return(<>
                              <div class="col">
    <div class="card" onClick={()=>{navigate(`/singleuserData/${item.id}`)}} style={{cursor:"pointer"}} >
      <div class="card-body">
      <p>Name: {item.name}</p>
      <p>Email : {item.email}</p>
      <p>Company Name : {item.company.name}</p>
      </div>
    </div>
  </div> 
                              
                             </>)
                 }) }
            

            </div>    


           </>)
})

export default FilterData
  import Home from "./index";
  import { BrowserRouter,NavLink,Route,Routes } from "react-router-dom";
  import "./index.css"
  import SingleUserData from "./singleUserData";
  
 

  const Main=()=>{

    
   return(
   
   <>

     <BrowserRouter>
        
     <div className="buttons">
          
              
             
            
            </div>

       <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/singleuserData/:id" element={<SingleUserData/>}/>
        </Routes>
       

     </BrowserRouter>
   
   </>)
  
  }

  export default Main
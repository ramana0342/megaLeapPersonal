import React from 'react'
import { createContext ,useState} from 'react';

import Main from './main';

export const store= createContext()

function UserApp() {
    const [UsersData,setUsersData]= useState([])
    const [state,setState]= useState(false)
    const[addUserButton,setAdduserButton]=useState(true)
    
  return (
    <store.Provider value={{UsersData,setUsersData,state,setState,addUserButton,setAdduserButton}}>
    <>
     <Main/>
    </>
    </store.Provider>
  )
}

export default UserApp
import { createContext, useEffect, useState } from "react";
import { food_list } from "./frontend_assets/assets";

const data = food_list
export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{

    const[cartitem,setcartitem]=useState({})

    const addbtn =(itemId)=>{
        if(!cartitem[itemId]){
            setcartitem((prev)=>({...prev,[itemId]:1}))
            
        }
        else{
            setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removebtn =(itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1 }))
    
    }
     useEffect(()=>{
     },[cartitem])
    const contextvalue ={
        data,
        cartitem,
        setcartitem,
        addbtn,
        removebtn

    }
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
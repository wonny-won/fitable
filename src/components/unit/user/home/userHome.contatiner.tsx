import { useEffect, useState } from "react"
import UserMainUI from "./userHome.presenter"

export default function UserMain(){
    const [scrollIsActive,setScrollIsActive] = useState(0)
    useEffect(()=>{
        window.addEventListener('scroll', () => { 
            setScrollIsActive(window.scrollY);
          })
    },[])    
    return <UserMainUI scrollIsActive={scrollIsActive}/>
}
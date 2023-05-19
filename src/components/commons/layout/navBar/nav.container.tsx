import { useEffect, useState } from "react"
import NavBarUI from "./nav.presenter"
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { userlogOut } from "../../../../commons/util/functions/firebase/logInOut.ts/logOut"
import { useIsLogInUser } from "../../../../commons/util/hooks/signUpIn"

export default function NavBar(){
    let isLoggedInUser = useIsLogInUser()
    const [isActive,setisActive] = useState(false)
    const routing = useRoutingPageHooks()
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    console.log(isLoggedInUser)
    const signOut = ()=>{userlogOut()}

    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}
                     isLogin={isLoggedInUser}
                     routing={routing}
                     signOut={signOut}/>
}
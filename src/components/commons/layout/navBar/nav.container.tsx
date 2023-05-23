import NavBarUI from "./nav.presenter"
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { userlogOut } from "../../../../commons/util/functions/firebase/logInOut.ts/logOut"
import { useIsActive } from "./navBarFn/isActive"

export default function NavBar(props:any){
    const {isActive,onClickMenuBt} = useIsActive()
    const routing = useRoutingPageHooks()
    const signOut = ()=>{userlogOut().then(()=>{routing('/')()})}
    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}
                     isLogin={props.isLogin}
                     routing={routing}
                     signOut={signOut}
                     onClickBt={props.onClickBt}/>
}
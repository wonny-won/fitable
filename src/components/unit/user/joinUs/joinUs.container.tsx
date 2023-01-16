import JoinUsUI from "./joinUs.presenter";
import { RoutingPageHooks } from "../../../../commons/util/hooks/routing"

export default function JoinUs(){
    const routing = RoutingPageHooks()
    return <JoinUsUI router={routing} />
}
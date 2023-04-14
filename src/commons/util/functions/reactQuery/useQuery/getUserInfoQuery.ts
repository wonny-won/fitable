import { useQuery, useQueryClient } from "@tanstack/react-query"
import { loggedInUser } from '../../firebase/read/getUserInfo'

export const getUserInfoQuery = () =>{
    useQueryClient()

    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })  
    
    return getUserInfo
}

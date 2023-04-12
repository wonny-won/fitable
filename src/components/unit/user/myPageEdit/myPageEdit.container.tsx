import { useQuery, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../pages/_app"
import { loggedInUser } from "../../../../commons/util/functions/firebaseFunctions"
import MyPageEditUI from "./myPageEdit.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { useUploadImage } from "../../../../commons/util/hooks/imageUpload";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useRouter } from "next/router"

export default function MyPageEdit(){
    const {onChangeInputs, inputs} = useOnchangeInputs()
    const {uploadImage,image} = useUploadImage()
    const routerhook = useRoutingPageHooks()
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    // 유저 프로필 업데이트 함수
    const onClickUpdateProfile = async()=>{
        const updateUser:any = {}
        if(inputs.displayName) updateUser.displayName = inputs.displayName
        if(inputs.phoneNumber) updateUser.phoneNumber = inputs.phoneNumber
        if(image) updateUser.photoURL = image
        try{
            await updateProfile(auth.currentUser, {...updateUser})
            routerhook('/mypage')()
        }catch(error){
            console.log(error)
        }
    }
    return <MyPageEditUI onChangeInput={onChangeInputs}
                         onClickUpdateProfile={onClickUpdateProfile}
                         getUserInfo={getUserInfo.data}
                         uploadImage={uploadImage}
                         image={image}
                         routerhook={routerhook}/>
}
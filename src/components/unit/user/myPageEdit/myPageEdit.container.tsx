import MyPageEditUI from "./myPageEdit.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"
import { onClickUpdateProfile } from "./myPageEditFn/onClickUpdateProfile"
import { useAuth } from "../../../../commons/util/hooks/useAuth";

export default function MyPageEdit(){
    useAuth()
    const {onChangeInputs, inputs} = useOnchangeInputs()
    const {onChangeFile,fakeURL,files} = useUploadFiles()
    const routerhook = useRoutingPageHooks()
    const getUserInfo:any = getUserInfoQuery()
    const updateProfile = onClickUpdateProfile({inputs,file:files[files.length-1],userUID:getUserInfo.data?.result?.localId,docId:getUserInfo.data?.getUserDatas?.[0]?.id})
    return <MyPageEditUI onChangeInput={onChangeInputs}
                         getUserInfo={getUserInfo.data?.result}
                         onClickUpdateProfile={updateProfile}
                         uploadImage={onChangeFile}
                         image={fakeURL}
                         routerhook={routerhook}
                         getUserData={getUserInfo.data?.getUserDatas} />
}
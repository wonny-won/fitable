import MyPageEditUI from "./myPageEdit.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"
import { onClickUpdateProfile } from "./myPageEditFn/onClickUpdateProfile"

export default function MyPageEdit(){
    const {onChangeInputs, inputs} = useOnchangeInputs()
    const {onChangeFile,fakeURL,files} = useUploadFiles()
    const routerhook = useRoutingPageHooks()
    const getUserInfo = getUserInfoQuery()
    const updateProfile = onClickUpdateProfile({inputs,file:files[files.length-1]})
    return <MyPageEditUI onChangeInput={onChangeInputs}
                         getUserInfo={getUserInfo.data?.result}
                         onClickUpdateProfile={updateProfile}
                         uploadImage={onChangeFile}
                         image={fakeURL}
                         routerhook={routerhook} />
}
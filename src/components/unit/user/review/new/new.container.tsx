import NewReviewUI from "./new.presenter"
import { NewReviewContainer } from "./new.types";
import { useRouter } from "next/router";
import { onChangeInput } from "./reviewNewFn/onChange";
import { getUserInfoQuery } from "../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useUploadFiles } from "../../../../../commons/util/hooks/filesUpload";
import { onClickChangeValue } from "../../../../commons/atom/user/starRate/starFn/onClickChangeValue";
import { useSubmitReview } from "./reviewNewFn/onClickSubmitReview";

export default function NewReview(props : NewReviewContainer){
    const router = useRouter()
    const { register,handleSubmit,handleChange } = onChangeInput()
    const getloginUser = getUserInfoQuery()
    const { fakeURL,file,onChangeFile } = useUploadFiles()
    const { realvalue,setValue } = onClickChangeValue()
    const onClcickSubmitReview = useSubmitReview({program:router.query.program,userId:getloginUser.data?.result?.localId,file,starValue:realvalue})

    return <NewReviewUI onClcickSubmitReview={onClcickSubmitReview}
                        program={router.query.program}
                        realvalue={realvalue}
                        userInfo={getloginUser.data?.result}
                        register={register}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        onChangeFile={onChangeFile}
                        imgURL={fakeURL}
                        setValue={setValue}/>
}
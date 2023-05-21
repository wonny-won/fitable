import NewReviewUI from "./new.presenter"
import { NewReviewContainer } from "./new.types";
import { useRouter } from "next/router";
import { getUserInfoQuery } from "../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useUploadFiles } from "../../../../../commons/util/hooks/filesUpload";
import { onClickChangeValue } from "../../../../commons/atom/user/starRate/starFn/onClickChangeValue";
import { useSubmitReview } from "./reviewNewFn/submit";
import { useBranchAuthority } from "./reviewNewFn/authority";
import { useUpdateReview } from "./reviewNewFn/update";

export default function NewReview(props : NewReviewContainer){
    const router = useRouter()
    const getloginUser = getUserInfoQuery()
    // useBranchAuthority({program:router.query.program,isEdit:props.isEdit})
    const { fakeURL,files,onChangeFile } = useUploadFiles()
    const { realvalue,setValue } = onClickChangeValue()
    const onClickSubmitReview = useSubmitReview({program:router.query.program,userId:getloginUser.data?.result?.localId,files,starValue:realvalue,writer:getloginUser.data?.result?.displayName,writerProfile:getloginUser.data?.result?.photoUrl})
    const onClickUpdateReview = useUpdateReview({files,docId:router.query.reviewId})
    return <NewReviewUI onClickSubmitReview={onClickSubmitReview}
                        program={router.query.program}
                        realvalue={realvalue}
                        userInfo={getloginUser.data?.result}
                        onChangeFile={onChangeFile}
                        imgURL={fakeURL}
                        setValue={setValue}
                        isEdit={props.isEdit}
                        data={props.data}
                        onClickUpdateReview={onClickUpdateReview} />
}
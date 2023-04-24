import NewReviewUI from "./new.presenter"
import { NewReviewContainer } from "./new.types";
import { useRouter } from "next/router";
import { onChangeInput } from "./reviewNewFn/onChange";
import { getUserInfoQuery } from "../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useUploadFiles } from "../../../../../commons/util/hooks/filesUpload";

export default function NewReview(props : NewReviewContainer){
    const router = useRouter()
    const {register,handleSubmit,handleChange} = onChangeInput()
    const getloginUser = getUserInfoQuery()
    const { fakeURL,file,onChangeFile } = useUploadFiles()

    return <NewReviewUI program={router.query.program}
                        register={register}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        userId={getloginUser.data?.result?.localId}
                        onChangeFile={onChangeFile}
                        imgURL={fakeURL}
                        file={file}/>
}

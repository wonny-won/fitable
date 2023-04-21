import NewReviewUI from "./new.presenter"
import { NewReviewContainer } from "./new.types";
import { useRouter } from "next/router";
import { onChangeInput } from "./reviewNewFn/onChange";
import { getUserInfoQuery } from "../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";

export default function NewReview(props : NewReviewContainer){
    const router = useRouter()
    const {register,handleSubmit,handleChange} = onChangeInput()
    const getloginUser = getUserInfoQuery()   

    return <NewReviewUI program={router.query.program}
                        register={register}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        userId={getloginUser.data?.result?.localId}
                        />
}

import NewReviewUI from "./new.presenter"
import { NewReviewContainer } from "./new.types";
import { useRouter } from "next/router";
import { onChangeInput } from "./reviewNewFn/onChange";

export default function NewReview(props : NewReviewContainer){
    const router = useRouter()
    const {register,handleSubmit,handleChange} = onChangeInput()    
    console.log(router.query.program)

    return <NewReviewUI program={router.query.program}
                        register={register}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}/>
}

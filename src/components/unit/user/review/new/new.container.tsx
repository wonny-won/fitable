import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";

export default function NewReview(){
    const { register,handleSubmit } = useForm()
    const onClickBtSubmit = (data:any)=>{
        console.log(data)
    }

    return <NewReviewUI register={register}
                        handleSubmit={handleSubmit}
                        onClickBtSubmit={onClickBtSubmit}/>
}
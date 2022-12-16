import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";
import { DB } from "../../../../../../pages/_app";
import { collection,addDoc } from "firebase/firestore"

export default function NewReview(){
    const { register,handleSubmit } = useForm()
    const onClickBtSubmit = async (data:any)=>{
        console.log(data)
        try{
            await addDoc(collection(DB,"programReview"),data)
        }catch(error){
            console.log(error)
        }
    }

    return <NewReviewUI register={register}
                        handleSubmit={handleSubmit}
                        onClickBtSubmit={onClickBtSubmit}/>
}
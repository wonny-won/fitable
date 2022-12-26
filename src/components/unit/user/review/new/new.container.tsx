import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";
import { addDocs } from "../../../../../commons/util/functions/addDoc";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export default function NewReview(){
    const { register,handleSubmit } = useForm()
    const [program,setProgram] = useState("")
    // const router = useRouter()
    const onClickBtSubmit = async (data:any)=>{
        try{
            addDocs({colletionName:"programReview", data:{...data, program: program}})
            .then((res)=>{console.log(res)})
        }catch(error){
            console.log(error)
        }
    }
    const onClickGetProgramValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setProgram(e.target.id)
    }

    return <NewReviewUI register={register}
                        handleSubmit={handleSubmit}
                        onClickBtSubmit={onClickBtSubmit}
                        onClickGetProgramValue={onClickGetProgramValue}/>
}
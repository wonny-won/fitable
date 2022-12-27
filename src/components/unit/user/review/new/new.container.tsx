import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";
import { addDocs } from "../../../../../commons/util/functions/firebaseFunctions";
import { ChangeEvent, useState } from "react";
import { useUploadFlie } from "../../../../../commons/util/hooks/imageUpload";
import UseStarRate from "../../../../commons/atom/user/starRate/starRate";

export default function NewReview(){
    const { register,handleSubmit } = useForm()
    const [program,setProgram] = useState("")
    const { onChangeFile,ImageUrl } = useUploadFlie()
    const { realvalue } = UseStarRate()
    const onClickBtSubmit = async (data:any)=>{
        console.log({ program,...data,ImageUrl,realvalue })
        // try{
        //     addDocs({colletionName:"programReview", data:{...data,program,ImageUrl}})
        //     .then((res)=>{console.log(res)})
        // }catch(error){
        //     console.log(error)
        // }
    }
    const onClickGetProgramValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setProgram(e.target.id)
    }

    return <NewReviewUI register={register}
                        handleSubmit={handleSubmit}
                        onClickBtSubmit={onClickBtSubmit}
                        onClickGetProgramValue={onClickGetProgramValue}
                        onChangeFile={onChangeFile}/>
}
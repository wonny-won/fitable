import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";
import { addDocs } from "../../../../../commons/util/functions/firebaseFunctions";
import { ChangeEvent, useState } from "react";
import UseStarRate from "../../../../commons/atom/user/starRate/starRate";
import { useUploadImage } from "../../../../../commons/util/hooks/imageUpload";

export default function NewReview(){
    const { register,handleSubmit } = useForm()
    const [program,setProgram] = useState("")
    const { realvalue } = UseStarRate()
    // 이미지 업로드 훅스
    const {uploadImage ,image} = useUploadImage()
    // 리뷰 등록함수 
    const onClickBtSubmit = async (data:any)=>{
        console.log({ program,...data,realvalue,image })
        try{
            addDocs({colletionName:"programReview", data:{ program,...data,realvalue,image }})
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
                        onClickGetProgramValue={onClickGetProgramValue}
                        uploadImage={uploadImage}
                        image={image}/>
}
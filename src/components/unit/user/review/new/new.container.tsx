import NewReviewUI from "./new.presenter"
import { useForm } from "react-hook-form";
import { addDocs, updateDatas } from "../../../../../commons/util/functions/firebaseFunctions";
import { ChangeEvent, useState } from "react";
import { useUploadImage } from "../../../../../commons/util/hooks/imageUpload";
import { NewReviewContainer } from "./new.types";

export default function NewReview(props : NewReviewContainer){
    console.log(props)
    const { register,handleSubmit } = useForm()
    const [program,setProgram] = useState("")
    // 이 부분다시
    const [realvalue,setRealvalue] = useState()
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

    // 리뷰 수정 함수
    const onClickUpdateBt = async (data:any)=>{
        const updateData:any = {}
        if (data?.OneSentenceExplain) updateData.OneSentenceExplain = data?.OneSentenceExplain
        if (data?.realReview) updateData.realReview = data?.realReview
        // if (data?.program) updateData.OneSentenceExplain = data?.program
        console.log("수정",updateData)
        try{
            updateDatas({docCollection:"programReview",docId:"FjVHGhGz46V34wWBEb0K"},updateData)
        }catch(error){
            console.log(error)
        }
    }

    return <NewReviewUI register={register}
                        handleSubmit={handleSubmit}
                        onClickBtSubmit={onClickBtSubmit}
                        onClickGetProgramValue={onClickGetProgramValue}
                        uploadImage={uploadImage}
                        image={image}
                        onClickUpdateBt={onClickUpdateBt}
                        isEdit={props.isEdit}
                        data={props.data}/>
}
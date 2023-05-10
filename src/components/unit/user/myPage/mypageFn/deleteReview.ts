import { daleteMutation } from "../../../../../commons/util/functions/reactQuery/useMutation/deleteMutation"

// 리뷰 삭제 클릭시
export const deleteReview = (docId:string)=>{
    const deleteMyReview = daleteMutation(docId)
    return async ()=>{
    try{
        alert('정말 삭제하시겠습니까?')
        return await deleteMyReview.mutate()
    }catch(error){
        console.log(error,'수정에 실패했습니다.')
    }
}}
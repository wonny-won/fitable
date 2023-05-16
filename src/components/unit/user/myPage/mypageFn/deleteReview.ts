import { daleteMutation } from "../../../../../commons/util/functions/reactQuery/useMutation/deleteMutation"

// 리뷰 삭제 클릭시
export const deleteReview = ()=>{
    const deleteMyReview = daleteMutation()
    return (docId:string)=>()=>{
    try{
        alert('정말 삭제하시겠습니까?')
        return deleteMyReview.mutate(docId)
    }catch(error){
        console.log(error,'수정에 실패했습니다.')
    }
}}
import { getOneDoc } from '../../../../../../commons/util/functions/firebase/read/getData'
import { updateDocMutaionQuery } from './updateDocMutaion';

// 도움돼요/안돼요 버튼 클릭시
export const onClickhelpfulBt = (docId:any,field:string)=> {
    const updateDocMutaion = updateDocMutaionQuery(docId)

    return async()=>{
    const getData:any = await getOneDoc({collection:'programReview',docId})
    const likeprev = getData?.likeCount
    const dislikeprev = getData?.dislikeCount
    const likeCount:any = {[field]: field==='likeCount' ? likeprev+1 : dislikeprev+1}
    try{
        return await updateDocMutaion.mutate(likeCount)
    }catch(error){
        console.log('수정 실패')
    }
    }
}
import { updateData } from "../../../../../../commons/util/functions/firebase/update/updateData";
import { getOneDoc } from '../../../../../../commons/util/functions/firebase/read/getData'

interface Params{
    docId: string;
}

// 도움돼요 버튼 클릭시
export const onClickhelpfulBt = (docId:string,field:string)=> async(e:any)=>{
   const getData = await getOneDoc({collection:'programReview',docId})
   const likeprev = getData?.likeCount
   const dislikeprev = getData?.dislikeCount
   const likeCount = {[field]: field==='likeCount' ? likeprev+1 : dislikeprev+1}
    try{
        await updateData({collection:'programReview',docId,data:likeCount})
        console.log('수정완료')
        return likeCount
    }catch(error){
        console.log('수정 실패')
    }
}
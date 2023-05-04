import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getOneDoc } from '../../../../../../commons/util/functions/firebase/read/getData'
import { updateMutation } from "../../../../../../commons/util/functions/reactQuery/useMutation/updateMutaion";
import { updateData } from '../../../../../../commons/util/functions/firebase/update/updateData';

// 도움돼요/안돼요 버튼 클릭시
export const onClickhelpfulBt = (docId:string,field:string)=> {
    const queryClient = useQueryClient()
    const {data} = useQuery({
        queryKey: ['fetchProgramReview',docId],
        queryFn: ()=> getOneDoc({collection:'programReview',docId}),
    })

    const updateDocMutaion = useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess:()=>{
            console.log('실행된다~')
            return queryClient.invalidateQueries({queryKey: ['fetchProgramReview'],refetchType: 'all'},{ throwOnError:true })
        }
    })

    return async()=>{
    const getData = await getOneDoc({collection:'programReview',docId})
    const likeprev = getData?.likeCount
    const dislikeprev = getData?.dislikeCount
    const likeCount = {[field]: field==='likeCount' ? likeprev+1 : dislikeprev+1}
    try{
        // await updateData({collection:'programReview',docId,data:likeCount})
        return await updateDocMutaion.mutate(likeCount)
    }catch(error){
        console.log('수정 실패')
    }
    }
}
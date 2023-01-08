import NewReview from "../../../../src/components/unit/user/review/new/new.container"
import { getData } from "../../../../src/commons/util/functions/firebaseFunctions"
import { useEffect, useState } from "react"

export default function ReviewEditPage(){
    const [data,setData] = useState([])
    useEffect(()=>{
        getData({docCollection:"programReview",docId:"FjVHGhGz46V34wWBEb0K"}).then((res:any)=>{
            console.log(res)
            setData(res)
        })
    },[])
    return <NewReview isEdit={true}
                      data={data}/>
}
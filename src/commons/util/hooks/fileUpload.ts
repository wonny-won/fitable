import { ChangeEvent, useState} from "react";
import { getStorage,ref,uploadBytes } from 'firebase/storage'

export const useUploadFile = () => {
    const [file,setFile] = useState("")  
    
    //스토리지에 파일 업로드하는 함수
    const uploadFile = (storageName:string)=>
        function uploadFiles(e:ChangeEvent<HTMLInputElement>){
        // 있을수도 있고 없을수도 있어서 옵셔널체이닝 붙임
        const fileInfo = e?.target?.files?.[0]
        console.log(fileInfo)
        if(!fileInfo) return 
    
        const storage = getStorage()
        // 파일 참조 만들기
        console.log(storageName)
        const storageRef = ref(storage,`${storageName}/${fileInfo.name}`)
        uploadBytes(storageRef,fileInfo).then((res)=>{
            setFile(res.metadata.fullPath)
        })

        } 
    return {
        uploadFile,
        file
    }
}    

    

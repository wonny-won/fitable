import { ChangeEvent, useState} from "react";
import { getStorage,ref,uploadBytes } from 'firebase/storage'

export const useUploadImage = () => {
    const [image,setImage] = useState("")  
    
    //스토리지에 이미지 업로드하는 함수
    const uploadImage = (e:ChangeEvent<HTMLInputElement>,storageName:string)=>{
        // 있을수도 있고 없을수도 있어서 옵셔널체이닝 붙임
        const imgFile = e?.target?.files?.[0]
        if(!imgFile) return 
    
        const storage = getStorage()
        // 파일 참조 만들기
        const storageRef = ref(storage,`${storageName}/${imgFile.name}`)
        uploadBytes(storageRef,imgFile).then((res)=>{
            setImage(res.metadata.fullPath)
        })
    }
    console.log(image)

    return {
        uploadImage,
        image
    }
}    

    

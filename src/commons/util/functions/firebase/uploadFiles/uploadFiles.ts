import { getStorage, ref, uploadBytes } from "firebase/storage"

export const UploadFiles = async(storageName:string,file:File)=>{
    const storage = getStorage()
    // 파일 참조 만들기
    console.log(file.name)
    const storageRef = ref(storage,`${storageName}/${file.name}`)
    const result = await uploadBytes(storageRef,file)
    return result.metadata
}

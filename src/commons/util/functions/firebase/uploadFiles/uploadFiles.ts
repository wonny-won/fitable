import { getStorage, ref, uploadBytes } from "firebase/storage"

// 진짜 스토리지에 올리는 함수(스토리지 찌거기 안남도록 제일 나중에!)
export const UploadFiles = async(storageName:string,file:File)=>{
    const storage = getStorage()
    // 파일 참조 만들기
    const storageRef = ref(storage,`${storageName}/${file.name}`)
    const result = await uploadBytes(storageRef,file)
    return result.metadata
}

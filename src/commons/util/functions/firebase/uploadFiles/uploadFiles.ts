import { getStorage, ref, uploadBytes } from "firebase/storage"

// 진짜 스토리지에 올리는 함수(스토리지 찌거기 안남도록 제일 나중에!)
export const UploadFiles = async(storageName:string,files:File[])=>{
    const storage = getStorage()

    const fileResult = await Promise.all(files.map( (item,index)=>{
        const storageRef = ref(storage,`${storageName}/${item.name}`)
        const result = uploadBytes(storageRef,item)
        return result
    }))
    const resultUrls = fileResult.map((item) => {
        return item.metadata
    });
    return resultUrls
}

export const getImgName = (fileURL:string)=>{
    const fileName = fileURL?.split('/')
    return fileName?.[1]
}
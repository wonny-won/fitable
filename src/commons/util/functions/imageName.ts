interface Params {
    fileURL:string;
    isEdit:boolean;
}

export const getImgName = ({fileURL,isEdit}:Params)=>{
    if(!isEdit) return
    const fileName = fileURL?.split('/')
    console.log(fileName)
    return fileName?.[1]
}
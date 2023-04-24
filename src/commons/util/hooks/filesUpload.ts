import { ChangeEvent, useState} from "react";

export const useUploadFiles = () => {
    const [fakeURL,setFakeURL]= useState('')  
    const [file,setFile] = useState('')

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>)=> {
		const file = event.target.files?.[0]
		console.log(file);
			if (!file) {
				alert("파일이 없습니다.");
				return
			}
		
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file);
		fileReader.onload = (data) => {
			// 파일리더의 결과값이 string이 아닐수도 있으니 string일때만 실행되도록 
			if(typeof data.target?.result === "string"){
				console.log(data.target?.result);
				setFakeURL(data.target?.result)
                setFile(file)
			}	
		}
    }


    return {
        fakeURL,
        file,
        onChangeFile
    }





    // const [image,setImage] = useState("")  
    
    // //스토리지에 이미지 업로드하는 함수
    // const uploadImage = (storageName:string)=>
    //     function uploadImages(e:ChangeEvent<HTMLInputElement>){
    //     // 있을수도 있고 없을수도 있어서 옵셔널체이닝 붙임
    //     const imgFile = e?.target?.files?.[0]
    //     if(!imgFile) return 
    
    //     const storage = getStorage()
    //     // 파일 참조 만들기
    //     console.log(storageName)
    //     const storageRef = ref(storage,`${storageName}/${imgFile.name}`)
    //     uploadBytes(storageRef,imgFile).then((res)=>{
    //         setImage(res.metadata.fullPath)
    //     })

    //     } 
    // return {
    //     uploadImage,
    //     image
    // }
}    

    

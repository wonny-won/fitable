import { ChangeEvent, useState} from "react";

export const useUploadFiles = () => {
    const [fakeURL,setFakeURL]= useState([])  
    const [files,setFile] = useState([])

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>)=> {
		const file = event.target.files?.[0]
			if (!file) {
				alert("파일이 없습니다.");
				return
			}
		
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file);
		fileReader.onload = (data) => {
			// 파일리더의 결과값이 string이 아닐수도 있으니 string일때만 실행되도록 
			if(typeof data.target?.result === "string"){
				// setFakeURL(data.target?.result)
                // setFile(file)
				const urlArr = [...fakeURL,data.target?.result]
				// urlArr[index] = data.target?.result
				setFakeURL(urlArr)
				// DB에 넣을 Url들
				const fileUrlArr = [...files,file] 
				// fileUrlArr[index] = data.target?.result
				setFile(fileUrlArr)
			}	
		}
    }
    return {
        fakeURL,
        files,
        onChangeFile
    }
}
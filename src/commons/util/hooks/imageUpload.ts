import { ChangeEvent } from "react";

export const useOnChangeFile = (e:ChangeEvent<HTMLInputElement>) => {
        // 있을수도 있고 없을수도 있어서 옵셔널체이닝 붙임
        const imgFile = e.target.files?.[0]
        if(!imgFile) return alert("파일이 없습니다.")

        // 이미지 URL 생성(진짜 URL이다.)
        const fileReader = new FileReader()
        // 선택한 파일 읽어오기
        fileReader.readAsDataURL(imgFile)
        // 선택한 파일 읽기에 성공하면 실행
        fileReader.onload = (data)=>{
            //파일리더의 결과값이 string이 아닐 수 있음. 따라서 string일때만 실행되도록
            if(typeof data.target?.result === "string"){
                console.log(data.target?.result)
                return data.target?.result
            }
        }
    }

    

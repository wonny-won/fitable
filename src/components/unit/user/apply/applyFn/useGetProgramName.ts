import { ChangeEvent, useState } from "react"

export const useGetProgram = ()=>{
    const [program,setProgram] = useState('')
    const onChangeProgram = (e:ChangeEvent<HTMLInputElement>)=>{
        setProgram(e.target.id)
    }
    return{
        program,
        onChangeProgram
    }
}
import { ChangeEvent, useState } from "react"

export default function useOnchangeInputs (){
    const [inputs,setInputs] = useState({})
    const onChangeInputs = (event:ChangeEvent<HTMLInputElement>)=>{
        const inputsKey = event.target.id
        setInputs({...inputs, [inputsKey] :event.target.value})
        console.log(inputs)
    }
    
    return {
        onChangeInputs,
        inputs
    }
}
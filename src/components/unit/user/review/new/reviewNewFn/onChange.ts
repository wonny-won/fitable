import { useForm } from "react-hook-form";

export const onChangeInput = ()=>{
    const { register,handleSubmit,setValue,trigger } = useForm({
        mode: "onchange"
    })
    const handleChange = (value: string) => {    
        setValue("reviewContents", value === "<p><br></p>" ? "" : value);
        trigger("reviewContents");
      };
      
    return{
        register,
        handleSubmit,
        handleChange
    }
}


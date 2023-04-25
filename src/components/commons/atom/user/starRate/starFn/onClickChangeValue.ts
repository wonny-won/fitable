import { useState } from "react";

export const onClickChangeValue = ()=>{
    const [realvalue, setValue] = useState(5);
    return {
        realvalue,
        setValue
    }
}
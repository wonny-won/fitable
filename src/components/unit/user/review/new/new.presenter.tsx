import { NewReview } from "./new.types";

export default function NewReviewUI(props:NewReview){
    return(
        <form onSubmit={props.handleSubmit(props.onClickBtSubmit)}>
            작성자 : <input type="text" {...props.register("writer")}/>
            비밀번호 : <input type="password" {...props.register("password")}/>
            내용 : <input type="text" {...props.register("contents")}/>
            <button>등록하기</button>
        </form>
    )
}
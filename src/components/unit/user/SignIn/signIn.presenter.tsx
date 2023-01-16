import Head from "next/head"
import { SignInPresenter } from "./signIn.type"

export default function SignInUI(props:SignInPresenter){
    return(
        <>
        <Head>
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>회원가입 | fitable</title>
        </Head>
            <h1>회원가입 페이지</h1>
            <input type="text" id="email" onChange={props.onChangeInput} />
            <input type="text" id="password" onChange={props.onChangeInput}/>
            <button onClick={props.onSubmit}> 회원가입하기 </button>
        </>
    )
}
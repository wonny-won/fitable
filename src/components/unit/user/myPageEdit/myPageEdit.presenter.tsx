import Head from "next/head";
import { MypageEditPresenter } from "./myPageEdit.types";

export default function MyPageEditUI(props:MypageEditPresenter){
    return(
        <>
            <Head>
                <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
                <title> 내정보 수정 | fitable</title>
            </Head>
            <div>
                <h1> 회원정보 수정 </h1>
                <section>
                    <div>
                        <h2>이미지</h2>
                        <input id="photoURL" type="text" onChange={props.onChangeInput}/>
                    </div>

                    <div>
                        <h2>이름</h2>
                        <input id="displayName" type="text" placeholder="이름을 입력해주세요." onChange={props.onChangeInput}/>
                    </div>
                    <div>
                        <h2>이메일</h2>
                        <input id="email" type="text" placeholder="이메일을 입력해주세요." onChange={props.onChangeInput}/>
                    </div>
                    <div>
                        <h2>전화번호</h2>
                        <input id="phoneNumber" type="text" placeholder="전화번호를 입력해주세요." onChange={props.onChangeInput}/>
                    </div>
                    <button onClick={props.onClickUpdateProfile}>회원정보 수정</button>
                </section>
            </div>
        </>
    )
}
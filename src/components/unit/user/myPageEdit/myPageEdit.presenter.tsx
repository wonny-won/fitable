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
                        <input id="photoURL" type="file" onChange={props.uploadImage('userProfile')}/>
                    </div>

                    <div>
                        <h2>이름</h2>
                        <input id="displayName" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.displayName}/>
                    </div>
                    <div>
                        <h2>이메일</h2>
                        <input id="email" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.email}/>
                    </div>
                    <div>
                        <h2>전화번호</h2>
                        <input id="phoneNumber" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.phoneNumber}/>
                    </div>
                    <button onClick={props.onClickUpdateProfile}>회원정보 수정</button>
                </section>
            </div>
        </>
    )
}
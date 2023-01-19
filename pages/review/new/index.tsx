import { useRouter } from "next/router";
import { useEffect } from "react";
import NewReview from "../../../src/components/unit/user/review/new/new.container";
import { auth } from "../../_app";

export default function NewReviewPage(){
    const router = useRouter()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user) {
                alert("로그인이 필요한 페이지입니다.")
                router.push("/joinus")
            }
        })
    })
    return <NewReview isEdit={false}/>
}
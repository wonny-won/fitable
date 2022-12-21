import Footer from "./footer/footer.container";
import Header from "./header/header.container"
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    const router = useRouter()
    const HIDDEN_HEADER = ['/review/new']
    const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)
    return(
        <>
            <Header />
            {!isHiddenHeader && <Banner />}
             <div style={{marginTop:"130px"}} >{props.children}</div>
            <Footer />
        </>
    )
}
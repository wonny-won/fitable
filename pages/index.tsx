import { logOut } from "../src/commons/util/functions/firebaseFunctions";
import UserMain from "../src/components/unit/user/home/userHome.contatiner";

export default function Home() {
  const onClcickLogout = () => {
    logOut()
  }
  return (
    <>
    <button onClick={onClcickLogout}>로그아웃</button>
      <UserMain />
  </>
  )
}

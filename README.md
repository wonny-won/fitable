# [ 🌱fitable ]
**↗️ 방문하기**(https://fitable.online/)

---

# 💡 Background

온라인/인프런 멘토링 중 수강생들이 가장 많은 요청을 하기도 했고, 많은 도움이 되었다는 것에 아이디어를 얻어 **나의 포트폴리오와 이력서를 피드백해주는 사이트 🌱fitable이 탄생하게 되었습니다.**

### 아이템 설명

개발자의 포트폴리오를 페이지 단위와 기능단위로 나눠 한페이지 또는 기능 하나의 코드에 대한 피드백을 받을 수 있도록 합니다.
또한 전체 페이지를 빠르게 훑고, 전반적 방향성에 대한 피드백 또한 받을 수 있습니다.
이외에도 이력서 관련한 피드백을 받을 수 있습니다.

### 서비스 목표

1. 내 포트폴리오 코드 또는 이력서를 첨삭받고 더 나은 방향성으로 포트폴리오 혹은 이력서를 발전시키는 것.
2. 서비스 이용자들이 해당 프로그램에 대한 리뷰를 남겨 다른 사람들과 공유할 수 있는 것.

### 주요 이용자

이직 또는 취업을 원하는 신입 혹은 주니어 개발자

---

# 🛠 Development

### ✨ **Front-end ✨**

**유지보수, 확장, 보안, 성능, 안정성** 5가지를 최우선으로 고려한 프로젝트 입니다.
   - **유지보수 / 확장성** <br/>
    1. **유지보수를 고려해 기능 함수 단위로 파일을 분리해 개발** <br/>
    컨테이너 부분은 함수단위로 분리해 코드량을 최대한 줄이며 해당 함수 파일로 찾아가 부분 수정이 빠르게 이뤄질 수 있도록 개발.
        <img width="710" alt="스크린샷 2023-05-22 오전 12 19 18" src="https://github.com/wonny-won/fitable/assets/97152701/f74aa07f-d37d-48a4-af51-85be77429ff4"> <br/>
    2. **재사용,유지보수성을 고려해 공통 함수, 컴포넌트 commons에 개발** <br/>
    공통적으로 사용되는 함수와 컴포넌트는 commons로 분리해두어 재사용성을 높이고 부분 수정이 빠르게 이뤄질 수 있도록 개발.<br/> 
    3. **당장은 재용되지 않지만 나중에라도 재사용 가능성이 있는 함수는 확장성을 고려해 공통으로 분리** <br/>
    payment나 pagination같은 훗날 재사용 가능성이 높은 다양한 쿼리나 함수를 공통으로 빼둠으로써 확장성을 고려해 개발.<br/>

- **보안성**
    - react-quill 이용시 XSS공격을 대비해 dompurify를 이용.
        <img width="1140" alt="스크린샷 2023-05-22 오전 12 29 02" src="https://github.com/wonny-won/fitable/assets/97152701/9d3ab7f8-e9ad-4d1d-bdb9-483cc3ddd93f">
    
    - 로그인 데이터를 브라우저 스토리지에 넣지 않아 토큰노출의 위험성을 줄임.
        - 로그인 부분은 refreshToken 로직으로 업데이트 할 예정.
- **프로젝트 성능**
    - 스토리지의 찌거기를 최소화 하기위해 fileReader를 사용 및 스토리지에 업로드 하는 함수를 분리해 게시글 작성 혹은 수정시에 스토리지에 업로드 되도록 개발.<br/>
       <img width="611" alt="스크린샷 2023-05-22 오전 12 31 26" src="https://github.com/wonny-won/fitable/assets/97152701/c57ca056-afeb-4fa8-a276-429661248460">
       <img width="626" alt="스크린샷 2023-05-22 오전 12 31 54" src="https://github.com/wonny-won/fitable/assets/97152701/cd5219f0-4fc9-4680-acb5-6dbe70444def">

    
    - react-query를 이용해 백엔드 데이터와 프론트 데이터를 분리하고 캐시를 통해 캐시에서 프레쉬한 캐시를 먼저 받아올 수 있도록 개발.
    - 검색엔진 최적화를 위한 시멘틱 태그를 적용해 개발하고자 노력(완벽한 마크업은 아니기에 노력중)
    - 상황에 따른 비제어 / 제어 컴포넌트 선택
        - 리뷰 등록페이지<br/>
            → 글자수가 많고, 오류가 나도 크게 문제가 되지 않는 페이지이기 때문에 비제어 컴포넌트 선택 <br/>
              [ 결과 ] 빈번한 재렌더 제거
        - 결제, 회원가입, 로그인 페이지<br/>
            → 데이터에 오류가 나면 안되는 민감한 페이지들이라고 생각해 제어 컴포넌트 선택<br/>
              [ 결과 ] 데이터가 변경 될 때마다 재렌더를 통해 정확한 전달

### Tech Stack

- Front-end
    - TypeScript, Next.js
    - FireBase, react-query
    - react-hook-form, yup, react-quill, dompurify, react-slick, antd, import(portone)
    - AWS[S3,EC2]

### Features & Screens
- **메인 화면**
<img width="1271" alt="스크린샷 2023-05-22 오후 4 36 11" src="https://github.com/wonny-won/fitable/assets/97152701/f067992e-e1a9-439a-a840-042bf5618e21">

- **신청서 작성 화면**
<img width="865" alt="스크린샷 2023-05-22 오후 4 38 34" src="https://github.com/wonny-won/fitable/assets/97152701/0d04eaaa-b01e-4461-aa72-b96f01b3f036">

- **리뷰 리스트 페이지**
<img width="868" alt="스크린샷 2023-05-22 오후 4 41 24" src="https://github.com/wonny-won/fitable/assets/97152701/a0ed2074-8b12-4ee0-8471-046350b5c438">

- **리뷰 디테일 페이지**
<img width="396" alt="스크린샷 2023-05-22 오후 4 41 35" src="https://github.com/wonny-won/fitable/assets/97152701/49227941-2138-4dfb-a749-587eca8d2f28">

- **리뷰 등록 & 수정 페이지**
<img width="400" alt="스크린샷 2023-05-22 오후 4 41 51" src="https://github.com/wonny-won/fitable/assets/97152701/757ab183-8ae5-4fc7-b81e-83dc5b23d30d">

- **마이 페이지**
<img width="818" alt="스크린샷 2023-05-22 오후 4 42 21" src="https://github.com/wonny-won/fitable/assets/97152701/d2d6544f-dc20-4da0-962b-9ee1ed8d5105">

- **로그인 / 회원가입 페이지**
<img width="862" alt="스크린샷 2023-05-22 오후 4 42 40" src="https://github.com/wonny-won/fitable/assets/97152701/d60b4fad-a54d-470b-9ed5-dfae6d1aa884">

---

# 🏹 Trouble Shooting & Future Schedule

### 1️⃣ 중.꺾.마! 이겨낸 trouble들

[fitable 트러블 슈팅 모음](https://www.notion.so/fitable-32d624a01c2e4447bcecf1fd7f2f8d31)

### 2️⃣ fitable은 ver.2를 준비중!

[fitable 미래계획 ](https://www.notion.so/fitable-9d8b0873bb9c437e8fa6ae6c5c1d5b11)

---

# ✅ Result

- ver.1
    - 배포 주소 : [https://fitable.online/](https://fitable.online/)
    - 깃허브 : [https://github.com/wonny-won/fitable](https://github.com/wonny-won/fitable)

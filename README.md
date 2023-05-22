![스크린샷 2023-05-22 오전 12.46.51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7845f511-4c47-4748-a64e-87d7a131759f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.46.51.png)

# 💡 Background

온라인/인프런 멘토링 중 수강생들이 가장 많은 요청을 하기도 했고, 많은 도움이 되었다는 것에 아이디어를 얻어 **나의 포트폴리오와 이력서를 피드백해주는 사이트 🌱fitable이 탄생하게 되었습니다.**

## 아이템 설명

개발자의 포트폴리오를 페이지 단위와 기능단위로 나눠 한페이지 또는 기능 하나의 코드에 대한 피드백을 받을 수 있도록 합니다.
또한 전체 페이지를 빠르게 훑고, 전반적 방향성에 대한 피드백 또한 받을 수 있습니다.
이외에도 이력서 관련한 피드백을 받을 수 있습니다.

## 서비스 목표

1. 내 포트폴리오 코드 또는 이력서를 첨삭받고 더 나은 방향성으로 포트폴리오 혹은 이력서를 발전시키는 것.
2. 서비스 이용자들이 해당 프로그램에 대한 리뷰를 남겨 다른 사람들과 공유할 수 있는 것.

## 주요 이용자

이직 또는 취업을 원하는 신입 혹은 주니어 개발자

---

# 🛠 Development

### ✨ **Front-end ✨**

**유지보수, 확장, 보안, 성능, 안정성** 5가지를 최우선으로 고려한 프로젝트 입니다.

- **유지보수 / 확장성**
    - 컨테이너 부분은 함수단위로 분리해 코드량을 최대한 줄이며 해당 함수 파일로 찾아가 부분 수정이 빠르게 이뤄질 수 있도록 개발.
    
    ![스크린샷 2023-05-22 오전 12.19.18.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f1985f3-c50c-4786-9de8-c6fdf931a6ec/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.19.18.png)
    
    - 공통적으로 사용되는 함수와 컴포넌트는 commons로 분리해두어 재사용성을 높이고 부분 수정이 빠르게 이뤄질 수 있도록 개발.
    
    ![스크린샷 2023-05-22 오전 12.21.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59cb7a60-c429-4f68-90a1-725c2e15166f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.21.27.png)
    
    - payment나 pagination같은 훗날 재사용 가능성이 높은 다양한 쿼리나 함수를 공통으로 빼둠으로써 확장성을 고려해 개발.
- **보안성**
    - react-quill 이용시 XSS공격을 대비해 dompurify를 이용.
    
    ![스크린샷 2023-05-22 오전 12.29.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe1123d1-85cb-4333-9135-4a86e3d0f0ca/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.29.02.png)
    
    - 로그인 데이터를 브라우저 스토리지에 넣지 않아 토큰노출의 위험성을 줄임.
        - 로그인 부분은 refreshToken 로직으로 업데이트 할 예정.
- **프로젝트 성능**
    - 스토리지의 찌거기를 최소화 하기위해 fileReader를 사용 및 스토리지에 업로드 하는 함수를 분리해 게시글 작성 혹은 수정시에 스토리지에 업로드 되도록 개발.
    
    ![스크린샷 2023-05-22 오전 12.31.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/992ecfe9-7514-4c82-ac4b-b46221c6e411/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.31.26.png)
    
    ![스크린샷 2023-05-22 오전 12.31.54.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a3ec950-0031-427f-baed-b87835b788d5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.31.54.png)
    
    - react-query를 이용해 백엔드 데이터와 프론트 데이터를 분리하고 캐시를 통해 캐시에서 프레쉬한 캐시를 먼저 받아올 수 있도록 개발.
    - 검색엔진 최적화를 위한 시멘틱 태그를 적용해 개발하고자 노력(완벽한 마크업은 아니기에 노력중)

## Tech Stack

- Front-end
    - TypeScript, Next.js
    - FireBase, react-query
    - react-hook-form, yup, react-quill, dompurify, react-slick, antd, import(portone)
    - AWS[S3,EC2]

## Features & Screens

- **메인 화면**

![스크린샷 2023-05-22 오전 12.46.51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7845f511-4c47-4748-a64e-87d7a131759f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.46.51.png)

![스크린샷 2023-05-22 오전 12.47.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d5ebc19-acf5-453b-bb95-d7e2950b6eeb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.47.10.png)

![스크린샷 2023-05-22 오전 12.47.24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84252210-7364-4834-a0ff-3622c9292353/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.47.24.png)

- **신청서 작성 화면**

![스크린샷 2023-05-22 오전 12.49.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8d1089e6-7501-4d4c-9a37-83516a86abd8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.49.28.png)

![스크린샷 2023-05-22 오전 12.48.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e39f6abf-66a0-49d7-b201-fa68f8dbe31d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.48.58.png)

- **리뷰 리스트 페이지**

![스크린샷 2023-05-22 오전 12.52.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd7a8f85-9c3c-4719-8534-77559006464c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.52.10.png)

![스크린샷 2023-05-22 오전 12.56.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3692791b-6d30-4ac6-8483-c8d659f99a5a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.56.40.png)

![스크린샷 2023-05-22 오전 12.58.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68a846a5-a351-4cb6-bb9f-e4c21c0f2413/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.58.48.png)

- **리뷰 디테일 페이지**

![스크린샷 2023-05-22 오전 1.00.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2585a50e-60cb-4392-bd2e-289866759e39/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.00.40.png)

- **리뷰 등록 & 수정 페이지**

![스크린샷 2023-05-22 오전 1.04.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f35bc263-c40c-4ddd-93f9-05a30bb0abcb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.04.26.png)

- **마이 페이지**

![스크린샷 2023-05-22 오전 1.02.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15fead43-37f9-4ebf-b293-8b813a557e0a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.02.07.png)

![스크린샷 2023-05-22 오전 1.02.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff754444-c8b7-4cec-b8c0-f27d5206ba1c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.02.22.png)

- **로그인 / 회원가입 페이지**

![스크린샷 2023-05-22 오전 1.05.47.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/502b181b-7302-4246-b795-9ee45ee2c7f2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.05.47.png)

![스크린샷 2023-05-22 오전 1.05.59.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fd44a4d-a7fc-4311-bd6d-454e138c1277/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.05.59.png)

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

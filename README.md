# nextjs-times-bestseller
### Main Page Preveiw
 ![image](https://github.com/hyer0705/nextjs-times-bestseller/assets/50125734/a74ee980-3bba-457e-a17a-b540ec1f5c6f)

> 개발기간: 2023.10.12 ~ 2023.10.15

## 배포주소
https://nextjs-times-bestseller.vercel.app
   
## 프로젝트 소개
뉴욕 타임즈의 베스트 셀러 목록을 보여주는 App
   
## 기술스택
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/papercss-0D0D0D?style=for-the-badge&logo=css&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
   
## 마무리
* vercel로 배포를 해봤는데 fetch API로 외부 api를 요청하는 부분에서 요청 URL을 찾지 못해서 애를 먹었다.
* list id 로 api를 요청할 때, 없는 id 로 요청할 경우 빈 배열로 인해 발생하는 에러를 error.js 와 React Error Boundary로 사용자에게 개발자들이 보는 에러 메시지를 보지 않도록 처리를 했는데 맞는 방식인지 잘 모르겠다. 그리고 error.js 를 이런 상황에 쓰는 건지 이해가 덜 된 것 같아 공식문서를 다시 읽어봐야 겠다.

# nextjs-times-bestseller
 
> 개발기간: 2023.10.12 ~ 2023.10.15

## 배포주소
https://nextjs-times-bestseller.vercel.app
   
## 프로젝트 소개
뉴욕 타임즈의 베스트 셀러 목록을 보여주는 App
   
## 기술스택
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/papercss-0D0D0D?style=for-the-badge&logo=css&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
   
## 마무리
* vercel로 배포를 해봤는데 api url의 rewrites 설정때문에 에러가 나서 찾느라고 시간을 보냈다. 다음에는 vercel 공식문서를 좀 더 자세히 읽어보면서 배포를 해봐야겠다.
* vercel로 배포하거나 local에서 작업하거나 fetch API를 사용하여 외부 api를 요청할 때, 상대경로(ex. fetch('/api/lists'))가 아닌 절대경로(ex. http://localhost:3000/api/lists)를 써줘야하는지 이유를 찾지 못했다. 상대 경로를 쓸 수 있다면 편할 것 같은데 어떻게 설정하는지 좀 더 찾아봐야할 것 같다.

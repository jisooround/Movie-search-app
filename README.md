# 🎬 OMDb API 활용 영화검색 사이트 'Cinema Box'

## 결과물
[Cinema Box 보기](https://remarkable-torrone-b8727f.netlify.app/)

##  작업 기간
2022년 10월 31일 ~ 11월 16일

## 기술 스택
<div>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat&logo=JAVASCRIPT&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=SASS&logoColor=white"/>

## 요구사항

### ❗  필수

- [x] 영화 제목으로 검색 가능하고 검색된 결과의 영화 목록이 출력돼야 합니다.
- [x] jQuery, React, Vue 등 JS 라이브러리와 프레임워크는 사용하지 않아야 합니다.
- [x] 스타일(CSS) 라이브러리나 프레임워크 사용은 자유입니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [ ] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있도록 만들어보세요.
- [ ] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요.(실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.

## 구현한 내용
#### 버튼을 활용한 스크롤 이동
nav바 버튼을 이용하여 원하는 화면으로 쉽고 빠르게 이동하도록 구현하였습니다.

#### 정보가 없을 경우 에러 처리
요청한 페이지 수 보다 결과가 작으면 총 개수를 알려주도록 하였습니다.
예를 들어 'totoro' 검색 결과는 9개인데 30개를 요청하면 총 결과물은 9개라고 알려줍니다.

#### 영화 상세정보의 평점 정보가 없다면 결과가 없다고 알려줍니다.

#### 기능별로 모듈화를 하였습니다.

## 어려웠던 점
- 영화 상세 정보를 새로운 페이지에 보여주고 싶었으나 화면 전환을 어떻게 해야하는지 몰라서 한 화면에 나타나도록 하였습니다.
- 반응형 웹으로 구현하지 못한점이 아쉽습니다.
- 모듈화가 아직 익숙하지 않아서 억지로 끼워 맞춘듯한(?) 느낌이 많습니다.

## 피드백 바라는 점 & 궁금한 점
- 모듈화가 잘 되어있는지, 필요없는 모듈이나 모듈화가 필요한 부분은 어디인지
- DOM을 다루는 부분이 가독성이 떨어지지는 않는지, 개선 방법
- parcel-bundeler를 사용하였는데 dist 폴더를 어떻게 관리하는지 잘 모르겠습니다. (dist폴더는 git에 올리면 안 된다고 들어서 gitignore에 포함 하였더니 netlify 배포가 되지 않아서 부득이하게 dist 폴더를 업로드하였습니다.)

## 1차 코드 리뷰 후 변경된 내용 (22.11.24 작성)
- 이미지 리사이징 코드를 추가하여 고화질로 출력 되도록 하였습니다.
- 스크롤 기능을 모듈화 하였습니다. 
- 웹 접근성을 위하여 `background-image` 사용한 곳에 부가 정보를 넣어주었습니다.
```js
  posterEl.style.backgroundImage = `url(${highQualityDetailPoster})`;
  posterEl.role = 'img';
  posterEl.title = 'Poster';
```
- html 시맨틱 태그 사용 (html 56번째 줄 리뷰)
```js
// 기존
 <div class="main section">
 // 변경
 <main>
```
- scss 파일을 css로 변환 후 다시 `<link>` 하였습니다.
- `<span>`태그를 쿼리 셀렉터로 사용 했던 부분을 클래스 네임을 부여하여 수정하였습니다. (스크롤 부분)
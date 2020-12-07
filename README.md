# 프로젝트 소개

 ## 배경

요즘 식당의 정보는 앱이나, 웹, TV광고 등 다양한 플랫폼에서 쉽게 접할 수 있다. 그러나 식당이 아닌 노점의 경우, 그에 관한 정보는 찾기 힘들다. 이렇게 된 이유로는, 비위생적인 관리와 탈세 등 불법노점에 관한 인식이 그리 좋지 않다는 것과 이러한 안 좋은 인식에도 불구하고 아직까지도 우리나라에는 ''불법노점''들이 꽤 많다는 것에 있다.

노점의 경우, 문화나 역사적 경험에 따라 국가별 인식이 매우 다르다. 한국의 경우 부정적인 인식이 주를 이루지만, 노점 허가제가 도입된 서양권과 일본에서는 노점 거리가 관광명소가 될 정도로 위생도 준수하고 깔끔하여 시민들에게 인식이 좋다. 

최근 정부는 시민 보행권 회복과 거리가게의 생존권을 위하여 무허가 노점을 허가하여 관리하는 '거리가게 허가제'를 전 자치구로 확대추진하고 있다. 특히, 올해 7월 말( 2020.7 )에는 약 40년간 정비작업이 정체됐던 ‘흥인지문-동묘앞 역’의 약 1.2km구간, 약 100여개의 노점을 대상으로 ‘거리가게’ 특별 정비 시범사업을 준공하였다. 약 40여년동안 이 일대를 메웠던 노점은 방문자가 더 안심하고 이용할 수 있는 깔끔한 ‘거리가게’로 거듭나고, 동묘앞 구제거리와 동대문 일대 쇼핑지역을 잇는 새로운 명소로 발전하였다. 

이 프로젝트는 거리의 활성화와 거리 상인들의 생존권 보장을 위해 제안되었다. 이를 위해서는 지금의 노점의 불법적인 행태와 인식을 바로잡는 것이 필요한데, 현재 시행중인 '거리가게 허가제' 같은 정책들과 탈세와 비위생적인 영업을 하는 노점을 잡아내는 노력을 통해 이 프로젝트가 지향하는 거리가게 활성화를 이뤄낼 수 있을 것이다.

 

## 필요성

노점의 경우, 영업시간, 음식의 맛, 위생 등 소비자의 리뷰를 단순 검색만으로는 얻기 어렵다. 보통 지역 주민들만의 입소문을 통해 노점의 위치를 알고, 정보를 얻는다. 다른 곳에서 온 사람들은 주변의 작은 가게의 정보를 세세히 알지 못하며, 내비게이션이나 각종 지도 앱에 등록되어 있지 않아 주소 정보로 찾아가는 것이 불가능하다는 특성이 있다. 사소하지만 나중에 거리가게활성화가 이루어질 시 불편사항을 초래할 수 있다고 생각했기에 이 프로젝트는 당장은 아닐 수 있지만 추후에 필요한 기능이 될 것이다.

 

## 프로젝트(웹앱)의 구성



> 프레임워크 선정 : 
>
> 현재 가장 많이 사용되고, 라이브러리도 다양하며, redux를 통해 상태관리를 간편하게 할 수 있으며, 프로젝트 특성상 동적인 웹사이트로 만들어야 하기 때문에 리액트를 선정하였다.



>  지도 API 선정 : 
>
> 카카오지도API도 괜찮지만, 자바스크립트기반의 API이고 리액트에 연동할 수 있는 관련 라이브러리를 찾기가 어려운 문제점이 있었다. 
>
> 따라서 리액트에 연동할 수 있게 하는 라이브러리도 다양하고, 관련 문서도 많은 구글맵 API를 채택하였고, 최신 리액트 표준인 함수형 컴포넌트에 맞춰 작성된 @react-google-maps/api 라이브러리를 쓰기로 하였다.



1)  메인화면

지도와 노점 목록이 있다. 서버에서 노점 목록을 불러와 각 노점의 위치정보를 읽어서 지도에 마커들을 생성한다. 유저를 admin과 일반유저로 나누어 일반유저가 사용할 수 있는 기능과 어드민이 사용할 수 있는 기능을 구분하였다. 

\- 일반유저 : 지도에 있는 마커를 클릭하여 클릭한 마커에 해당하는 리뷰의 상세보기 페이지로 넘어갈 수 있다.

\- 어드민 : 지도를 클릭하여 해당 위치에 마커를 생성할 수 있으며, 이 마커는 드래그로 위치를 변경 할 수 있다. 마커를 클릭해서 가게 등록 버튼을 활성화 할 수 있으며, 노점 등록 페이지에서는 클릭한 마커의 위치정보가 그대로 넘어가서, 가게를 등록할 시 노점 데이터 베이스에 마커의 위치정보가 저장된다. 일반유저와 마찬가지로 생성되어 있는 마커를 클릭하여 리뷰의 상세보기 페이지로 넘어갈 수 있다.

\- 검색기능

가게에 등록된 tag를 검색하여 사용자가 원하는 가게를 검색할 수 있다. material-ui를 사용하여 SearchBar의 틀을 만들었으며 검색창을 클릭하면 창의 길이가 늘어나고 다른곳을 클릭하면 다시 창의 길이가 줄어든다. 입력된 값을 리덕스스토어로 전달하여 filter함수를 통해 해당입력값과 같은 태그값을 가진 post만 화면에 출력한다

 

2) 로그인/회원가입 페이지

상단의 로그인 버튼으로 로그인페이지로 이동할 수 있으며, 하단의 회원가입 버튼으로 회원가입 페이지로 넘어갈 수 있다. 아이디는 영어로 최소 3자에서 최대 20자로 제한되어 있다.

 

3) 노점 상세보기 페이지

등록한 노점의 상세정보를 확인할 수 있다.

노점 상세보기 페이지에 선호도를 볼 수 있는 버튼이 좋아요/평범해요/별로에요 으로 나뉘어져 있으며 클릭하여 값을 증가시킬 수 있다. 클릭할 시에 노점 데이터베이스의 likeButton 멤버의 값이 변경되고, 서버에 저장된다. 만약 로그인이 되어있지 않다면 클릭할 시에 값은 바뀌지않고 로그인페이지로 이동한다.

각 버튼을 클릭하면 다른 버튼은 클릭을 못하며, 이미 클릭한 버튼을 다시 눌러서 누른걸 취소 할 수 있고, 다른 버튼을 클릭할 수 있게 된다.

노점 선호도는 메인화면의 노점목록에서 노점들의 정보와 함께 확인할 수 있다.

admin의 경우 삭제버튼으로 노점을 삭제할 수 있으며, 수정버튼으로 노점의 정보를 수정할 수 있다. 수정버튼을 클릭할 시에 노점 등록 페이지로 작성된 노점의 정보들이 같이 넘어가서 다시 작성할 수 있다. 페이지에 있는 지도의 마커를 드래그해서 간편하게 노점의 위치정보를 변경할 수 있다.



4) 노점 등록 페이지

admin 전용 페이지. 제목, 내용, 위치정보, 태그를 작성하여 노점을 서버에 등록할 수 있다.

 

## 사용메뉴얼

### 메인페이지 (로그인 전)



<img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207131338198.png" alt="image-20201207131338198" style="zoom: 33%;" />

- 앱을 실행하면 처음으로 보이는 페이지이다.  관리자가 사전에 등록해놓은 몇 개의 노점의 정보가 보이며 왼쪽에는 노점 위치 정보가 구글맵 위에 핀으로 꽂혀있다.

- 로그인을 하지 않았기에 리뷰를 남기는 것이 불가능하다.

  ### 회원가입  & 로그인 화면

  - 메인 페이지 우측 상단에 있는 '로그인' 버튼을 눌러 회원가입과 로그인을 진행한다. 회원가입을 하지 않았다면 회원가입 버튼을 눌러 회원가입을 진행한다.

    

    <img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207132049773.png" alt="image-20201207132049773" style="zoom:33%;" />

  <img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207132639590.png" alt="image-20201207132639590" style="zoom:33%;" />

  ​											회원 가입은 아이디와 비밀번호, 그리고 비밀번호 확인으로 이루어진다. 

  ### 메인 페이지 (로그인 후 화면)

  <img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207133008104.png" alt="image-20201207133008104" style="zoom:33%;" />

  ​				입력한 비밀번호가 일치한다면 '회원가입' 버튼을 누름과 동시에 로그인 된 메인페이지 화면으로 전환된다.

  

  <img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207132049773.png" alt="image-20201207132049773" style="zoom:33%;" />

  회원 가입 완료 후 앱의 페이지를 닫고 다시 앱에 접속하려면, 로그인을 거쳐야 한다. 메인 페이지의 우측 상단에 있는 '로그인' 버튼을 누르면 위와 같은 페이지로 전환된다. 노점에 대한 후기를 남기기 위해서는 반드시 회원가입과 로그인 과정이 필요하다.

  ### 메인페이지 ( 마커클릭 )

  <img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207133610037.png" alt="image-20201207133610037" style="zoom:33%;" />

  찾고 싶은 노점의 핀을 클릭하면 해당 노점이 선택되었다는 팝업 메시지가 뜬다. 아래에 있는 '이동' 버튼을 눌러 선택한 노점에 대한 리뷰 페이지로의 전환이 가능하다.

  ### 노점 상세보기 페이지

  

  ![image-20201207135639694](C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207135639694.png)

선택한 노점의 상세 리뷰를 보여주는 페이지이다.  리뷰를 남기는 것은 정보의 정확성과 사용자들의 오정보 제보를 방지하기 위해 관리자만이 노점의 정보를 업데이트 할 수 있는 방식으로 운영된다. 오픈시간, 메뉴 등의 정보를 볼 수 있으며, 노점의 전반적인 평가를 좋아요/별로예요/싫어요 의 개수로 남길 수 있게 하였다. 사용자는 세 개의 평가항목 중 단 한 개의 평가만을 선택하여 남길 수 있으며,  마구 버튼을 눌러 개수가 남용되는 것을 방지하기 위해 사용자 당 숫자가 1씩만 올라가게 하였다. 

### 키워드 검색 페이지	

<img src="C:\Users\syhon\AppData\Roaming\Typora\typora-user-images\image-20201207142851940.png" alt="image-20201207142851940" style="zoom:33%;" />

사용자가 원하는 키워드를 검색하여 태그되어있는 노점의 리스트들이 보이게 한다. 위의 예시는 '스무디'를 검색하여 스무디가 태깅되어있는 노점 리스트들을 출력하도록 하였다.  좌측 상단 헤더의 street vendor 로고를 눌러 메인 페이지로 돌아올 수 있다.

 

## 참고문헌,서적, URL



Develop : 

React Google Maps API Style Guide, (powered by react-styleguidist)

“[https://react-google-maps-api-docs.netlify.app/](file://https:/react-google-maps-api-docs.netlify.app/)” 

Material ui : https://material-ui.com/

React : https://www.youtube.com/playlist?list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB

React-사용자 인터페이스를 만들기 위한 JavaScript 라이브러리, 

https://ko.reactjs.org/

CSS: Cascading Style Sheets, mozilla

https://developer.mozilla.org/ko/docs/Web/CSS

서적 : 리액트를 다루는 기술(개정판)(길벗, 2019, 김민준)

아마 이게 제일 이해하기 쉬울걸요? React + Redux 플로우의 이해, carrot useless, 

[https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6](https://medium.com/@ca3rot/아마-이게-제일-이해하기-쉬울걸요-react-redux-플로우의-이해-1585e911a0a6)

 

Deploy :

Heroku Dev Center, 

https://devcenter.heroku.com/categories/nodejs-support

Node js와 mongoDB, Heroku로 만드는 다이어리앱 (서버편), 센치한 개발자

https://kplog.tistory.com/227?category=833643

 

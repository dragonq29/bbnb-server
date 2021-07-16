1. npm init
2. npm install express
3. server.js //생성
4. node server.js //서버 실행
5. (옵션) npm install -g nodemon //js파일을 저장하면 바로 서버를 다시 실행해줌
    실행은 nodemon server.js 로 실행





### nginx proxy server setting (for Https)

* duckdns.org에 dns 생성

* aws에 인스턴스 ubuntu로 생성

  ```
  sudo apt-get update // 패키지 업데이트
  sudo apt-get install nginx
  ```

* https://certbot.eff.org/ 가서 해당하는 Software, System 설정해서 순서대로 수행

* npm 설치

  ```
  sudo apt-get install npm
  ```

  

* /etc/nginx/sites-available/default 파일에 443 부분에 아래와 같이 추가

* ```
  location / {   #이걸 찾아가서
     proxy_pass http://127.0.0.1:8000; #이 부분 추가
  }
  ```

* 실행

  ```
  nohup node server.js &
  ```
  
  
  
* 참고

  * (Nginx 프록시 관련 좋은 참고 자료) https://velog.io/@jeff0720/2018-11-18-2111-%EC%9E%91%EC%84%B1%EB%90%A8-iojomvsf0n
  * https://youtu.be/Msu1UAbd_bY?t=1112
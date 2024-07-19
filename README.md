# 실시간 멀티 유저 채팅 애플리케이션

이 프로젝트는 Spring Boot, Thymeleaf, MySQL, Lombok, WebSocket을 사용하여 실시간 멀티 유저 채팅 애플리케이션을 구축한 것입니다. 사용자는 채팅방에 접속하여 메시지를 주고받을 수 있으며, 모든 메시지는 데이터베이스에 저장됩니다.

## 주요 기능

- WebSocket을 사용한 실시간 통신
- 멀티 유저 채팅방
- MySQL 데이터베이스에 채팅 메시지 저장
- Bootstrap을 이용한 스타일링
- 보낸 메시지와 받은 메시지의 구분

## 사용된 기술

- JAVA
- Spring Boot
- Thymeleaf
- MySQL
- Lombok
- WebSocket
- Bootstrap
- JavaScript (jQuery, SockJS, STOMP)

## 설치 방법

1. **레포지토리 클론**
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **MySQL 데이터베이스 설정**
    - `chat_db`라는 이름의 데이터베이스를 생성합니다.
    - `src/main/resources/application.properties` 파일에서 데이터베이스 설정을 업데이트합니다.
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/chat_db
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    ```

3. **애플리케이션 빌드 및 실행**
    ```bash
    ./gradlew bootRun
    ```

4. **브라우저에서 애플리케이션 열기**
    ```
    http://localhost:8080/chat
    ```

## 사용 방법

1. **이름 입력** 후 채팅에 참여합니다.
2. **메시지 입력** 필드에 내용을 입력하고 Enter 키를 누르거나 Send 버튼을 클릭하여 메시지를 전송합니다.
3. **실시간으로** 다른 사용자의 메시지를 확인합니다.

## 프로젝트 구조

- `src/main/java/com/example/chat` - 메인 애플리케이션 소스 코드
- `src/main/resources/templates` - Thymeleaf 템플릿
- `src/main/resources/static/css` - CSS 파일
- `src/main/resources/static/js` - JavaScript 파일

---

## 추가할 만한 기능
- 소셜 로그인
- 파일 전송 기능
- 채팅방 관리 기능
- 사용자 프로필
- 메시지 읽음 확인
- 알림 기능
- 메시지 검색 기능
- 이모티콘 및 스티커

 ---
![스크린샷(1)](https://github.com/Lee2ee/WebScoketChat/assets/89178750/504a2d2d-666d-48f6-814d-4f985c3de189)

![스크린샷(2)](https://github.com/Lee2ee/WebScoketChat/assets/89178750/a31a13bc-53d5-47d4-aa4d-862962d31676)

![스크린샷(3)](https://github.com/Lee2ee/WebScoketChat/assets/89178750/8090a635-b205-4b54-ace7-ebff20901a36)


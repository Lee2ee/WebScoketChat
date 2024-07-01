var stompClient = null;

// 채팅 연결
function connect() {
    // SockJS를 사용하여 '/ws' 엔드포인트에 소켓 연결을 생성
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    // 소켓 연결 설정
    stompClient.connect({}, function(frame) {
        // 연결이 성공하면 사용자 이름 입력 폼을 숨기고 채팅 방을 표시
        $("#usernameForm").hide();
        $("#chatRoom").show();
        // 서버에서 '/topic/public' 채널로 보내는 메시지를 구독
        stompClient.subscribe('/topic/public', function(chatMessage) {
            showMessage(JSON.parse(chatMessage.body));
        });
    });
}

// 메시지 전송
function sendMessage() {
    var messageContent = $("#message").val();
    // 메시지 내용이 있고, STOMP 클라이언트가 연결되어 있을 경우
    if(messageContent && stompClient) {
        // 사용자 이름과 메시지 내용을 포함한 객체 생성
        var chatMessage = {
            username: $("#username").val(),
            content: messageContent
        };
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        $("#message").val("");
    }
}

// 새로운 채팅 메시지를 화면에 표시하는 함수
function showMessage(message) {
    // 메시지 목록에 새로운 메시지를 추가 (HTML 형태로)
    $("#messages").append("<li><strong>" + message.username + ":</strong> " + message.content + "</li>");
}

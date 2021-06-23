const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080') // 잘 열리면 이 콘솔로그 출력됨
});


//누군가가 /pet 으로 방문을 하면
//pet관련 안내문을 띄워줌
app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑 할 수 있는 페이지 입니다.')
})

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
})
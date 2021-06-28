const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
// 객체 안에 하위 객체가 존재할때 : extended: true
app.use(express.urlencoded({extended: true}));
// 요청 본문이 객체 형식일때 파싱해줌
app.use(express.json())
app.use(cors())
app.post("/smartfood/todaymenuGf/todayMenu_nList_pro.do" , (req , res) => {
    const data = req.body;
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Origin", "*");
    // const data = {
    //     "end_dt": "20210621",
    //     "st_dt": "20210621",
    //     "bizplc_cd": "10095"
    // };

    axios.post('https://sfv.hyundaigreenfood.com/smartfood/todaymenuGf/todayMenu_nList_pro.do', data)
    .then(response => res.send({...response.data}))
    .catch(error => res.send({...error.message}));
})
app.listen("8000",() => console.log("Server started"))
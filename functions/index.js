const functions = require('firebase-functions');
//http request -> end point request 
exports.randomNumber = functions.https.onRequest((resquest, respone)=>{
    const number = Math.round(Math.random() * 100);
    respone.send(number.toString());
})

exports.redirectLink = functions.https.onRequest((resquest, respone)=>{
    respone.redirect('http://localhost:5000');
})

//callable function (can call directly from our code)
exports.sayHello = functions.https.onCall((data, context)=>{
    const mes = data.mes;
    return `Hello, ${mes}`
})
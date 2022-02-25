// Первая цифра минуты, вторая цифра часы. Строка '10 15 * * *' это 15:10 (десять минут четвертого)

var strSendMail1=require('../SQL/mail_send1');
var strSendMail2=require('../SQL/mail_send2');

function sendCV() {

    console.log('sendCV',strSendMail1);
}

function sendVC() {

    console.log('sendVC',strSendMail2);
}


module.exports = {
    sendCV: sendCV,
    sendVC: sendVC
};


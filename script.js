/* اتصال المنت های اچ تی ام ال به جاوااسرکیپت */

const message = document.getElementById('message')
const NumOfSms = document.getElementById('num-of-sms')
const remainingChars = document.getElementById('remain-chars')
const btnSend = document.getElementById('remain-chars')


message.addEventListener('input', () =>{
    /* محاسبه تعداد پیامک */
   let smsCount = parseInt((message.value.length / 70) + 1)
    
   NumOfSms.innerText = `(${smsCount}  پیامک)`

   /* محاسبه تعداد کاراکتر */
   remainingChars.innerText = (70 * smsCount) - message.value.length
})
/* اتصال المنت های اچ تی ام ال به جاوااسرکیپت */

const message = document.getElementById('message')
const NumOfSms = document.getElementById('num-of-sms')
const remainingChars = document.getElementById('remain-chars')
const btnSend = document.getElementById('btn-send')


message.addEventListener('input', () =>{
    /* محاسبه تعداد پیامک */
   let smsCount = parseInt((message.value.length / 70) + 1)
    
   NumOfSms.innerText = `(${smsCount}  پیامک)`

   /* محاسبه تعداد کاراکتر */
   remainingChars.innerText = (70 * smsCount) - message.value.length
})

/* ارسال پیام و ایجاد یک بلک لیست ساده از کلمات */

const blackList = ['احمق', 'نفهم' , 'نادان' ,'بیشعور']

btnSend.addEventListener ('click', () =>{
    const words = message.value.split(" ")
    
    for (let blackWords of blackList){

        if(words.includes(blackWords)){
            alert('شما نمی توانید از کلمات زننده و خارج از ادب استفاده کنید')
            return
        }
    }
    alert ('پیام شما ارسال شد!')
})
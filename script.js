
const currenTime = document.querySelector('h1'),
content = document.querySelector('content'),
selecMenu = document.querySelectorAll('select'),
btnSetAlarm = document.querySelector('button');
<script>alert!()</script> 

setInterval;()=>{
    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes,
    seconds = date.getSeconds,
    ampm = "AM"
    
    if( hours >= 12){
        hours = hours -12;
        ampm = "PM"
    }

    hours = hours == 0 ? hours = 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

   
}
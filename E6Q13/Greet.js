let fname = window.prompt("Enter your full name");
var now = new Date();
var hour = now.getHours();
greet = document.getElementById('para');
greet.addEventListener('click',function run()
{
    greet.style.display='none';
})

if(hour >= 6 && hour < 12)
{
    greet.innerHTML = "Good Morning "+fname +"The time is: ";	
}
else if(hour == 12)
{
    greet.innerHTML = "Good Noon "+fname;	
}
else if(hour >= 12 && hour <= 17)
{
    greet.innerHTML = "Good Afternoon "+fname;	
}
else if (hour >= 18 && hour <= 21) {
    greet.innerHTML = "Good Evening "+fname;
}
else
{
    greet.innerHTML = "Good Night "+fname;
}
   /* time=time-12; 
    if(time<6)
    {
        greet.innerHTML = "Good Afternoon "+fname;	
    }
    else
    {
        greet.innerHTML = "Good Evening "+fname;	
    }
}*/



function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour > 12) {
        hour -= 12;
    
    }
    if (hour == 0) {
        hr = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec;

    document.getElementById("digClock")
        .innerHTML = "The time is "+currentTime;
}
setInterval(showTime, 1000);
showTime();
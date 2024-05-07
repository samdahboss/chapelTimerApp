import {endTime} from './script.js'

console.log(countdownDisplay.innerText)
// if(countDownBoolean){}
timer=setInterval(function(){
        let currentTime=new Date()

        let timeLeft=1000+(endTime-currentTime);
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        if (timeLeft < 0) {
            clearInterval(timer);
            countdownDisplay.style.color="red"
            countdownDisplay.innerText="TIME IS UP"
        }else{
            countdownDisplay.innerText=(hours <10 ? ("0"+hours):hours)+"H:"+(minutes <10 ? ("0"+minutes):minutes)+"M:"+(seconds <10 ? ("0"+seconds):seconds)+"S"
        }
},1000)
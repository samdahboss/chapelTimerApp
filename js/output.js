let presenterSessionDisplay=document.getElementById('presenterSessionNameDisplay')
let presenterCountDownDisplay=document.getElementById('presenterCountdownDisplay')

let timer=setInterval(function(){
    presenterSessionDisplay.innerText=localStorage.getItem('sessionNameContent')
    presenterCountDownDisplay.innerText=localStorage.getItem('countDownDisplayContent')
},1000)



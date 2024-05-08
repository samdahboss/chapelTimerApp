let presenterSessionDisplay=document.getElementById('presenterSessionNameDisplay')
let presenterCountDownDisplay=document.getElementById('presenterCountdownDisplay')

let timer=setInterval(function(){
    presenterSessionDisplay.innerText=localStorage.getItem('sessionNameContent')
    if (presenterCountDownDisplay.innerText=="TIME IS UP"){
        presenterCountDownDisplay.style.color="red"
        presenterCountDownDisplay.style.animationName="presenterBlink"
    }else{
        presenterCountDownDisplay.style.color="black"
        presenterCountDownDisplay.style.animationName="none"
    }
    presenterCountDownDisplay.innerText=localStorage.getItem('countDownDisplayContent')
    
},1000)



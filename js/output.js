let presenterSessionDisplay=document.getElementById('presenterSessionNameDisplay')
let presenterCountDownDisplay=document.getElementById('presenterCountdownDisplay')

let timer=setInterval(function(){
    presenterSessionDisplay.innerText=localStorage.getItem('sessionNameContent')
    presenterCountDownDisplay.style.color="black"
    if (presenterCountDownDisplay.innerText=="TIME IS UP"){
        presenterCountDownDisplay.style.color="red"
    }
    presenterCountDownDisplay.innerText=localStorage.getItem('countDownDisplayContent')
    
},1000)



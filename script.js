let title = document.getElementById('title')
let displayBtn=document.getElementById('display')
/*notes*/
let notes =document.getElementById('notes')
let saveNotesBtn= document.getElementById('saveNotesBtn')

/*timer*/
let sessionNameInput=document.getElementById('sessionName')
let hourInput=document.getElementById('hour')
let minutesInput=document.getElementById('minutes')
let secondsInput=document.getElementById('seconds')

/*timerDisplay*/
let sessionNameDisplay=document.getElementById('sessionNameDisplay')
let countdownDisplay=document.getElementById('countdownDisplay')

/*session row*/
let sessionRow= document.getElementById('sessionRow')
let addSessionBtn= document.getElementById('addSessionBtn')



class sessionCard{
    constructor(sessionName,  noOfHours,noOfMinutes,noOfSeconds){
        this.sessionName=sessionName;
        this.noOfMinutes=noOfMinutes;
        this.noOfHours=noOfHours;
        this.noOfSeconds=noOfSeconds;
    }
    draw(){
        let cardDiv=document.createElement('div')
        cardDiv.className="card"
        let sessionTitle=document.createElement('h2')
        let sessionTime=document.createElement('h3')
        let cancelBtn=document.createElement('span')
        cancelBtn.innerText="X"
        cancelBtn.className="cancel"
        cancelBtn.addEventListener('click',function(){
            cancelBtn.parentElement.remove()
        })
        cardDiv.addEventListener('click',()=>{
            this.displayTime()
        })
        sessionTitle.innerText=this.sessionName;
        sessionTime.innerText=this.noOfHours?(this.noOfHours+" H:"+ ((this.noOfMinutes?(this.noOfMinutes+" M:"+(this.noOfSeconds?this.noOfSeconds:"0")+" S"):(this.noOfSeconds+" S")))):
                            (this.noOfMinutes?(this.noOfMinutes+" M:"+(this.noOfSeconds?this.noOfSeconds:"0")+" S"):(this.noOfSeconds+" S"))
        cardDiv.append(sessionTitle,sessionTime,cancelBtn)
        sessionRow.append(cardDiv)
    }
    displayTime(){
        sessionNameDisplay.innerText=this.sessionName;
        countdownDisplay.style.color="black";
        countdownDisplay.innerText=(this.noOfHours.length>1?(this.noOfHours):this.noOfHours.length==1?("0"+this.noOfHours):"00")+"H:"
                                   +(this.noOfMinutes.length>1?(this.noOfMinutes):this.noOfMinutes.length==1?("0"+this.noOfMinutes):"00")+"M:"
                                   +(this.noOfSeconds.length>1?(this.noOfSeconds):this.noOfSeconds.length==1?("0"+this.noOfSeconds):"00")+"S"
    }

}

/*TIMER CONTROL FUNCTION*/
let countDownBoolean;
let timer;
/*START TIMER FUNCTION*/
document.getElementById('start').addEventListener('click',()=>{
    countDownBoolean=true;
    let startTime=new Date()
    /*GETTING THE HOUR, MINUTES AND SECOND AT THE TIME START IS CLICKED*/
    let startTimeArray=[startTime.getHours(),
                        startTime.getMinutes(),
                        startTime.getSeconds()]
    /*GETTING THE COUNTDOWN TIME SET BY THE USER FROM THE countDownDisplay div*/
    let countDownTime=[parseInt(countdownDisplay.innerText.slice(0,2)),
                       parseInt(countdownDisplay.innerText.slice(4,6)),
                       parseInt(countdownDisplay.innerText.slice(8,10))
                    ]
    /*Calculating the endTime by adding the time set by the user to the current time*/
    let endTimeArray=[startTimeArray[0]+countDownTime[0],
                      startTimeArray[1]+countDownTime[1],
                      startTimeArray[2]+countDownTime[2]]
    let endTime=new Date()
    endTime.setHours(endTimeArray[0])
    endTime.setMinutes(endTimeArray[1])
    endTime.setSeconds(endTimeArray[2])
                    
    
    if(countDownBoolean){
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
    },1000)}
})
/*PAUSE TIMER FUNCTION*/
document.getElementById('pause').addEventListener('click',function(){
    countDownBoolean=false;
    clearInterval(timer)
})
/*RESET TIMER FUNCTION*/
document.getElementById('reset').addEventListener('click',function(){
    clearInterval(timer)
    countdownDisplay.innerText="00H:00M:00S"
})
document.getElementById('setSession').addEventListener('click',function(){
    let newSessionName=sessionNameInput.value;
    let newSessionHour=hourInput.value;
    let newSessionMinutes=minutesInput.value;
    let newSessionSeconds=secondsInput.value;
    if(newSessionName){
        let newSession=new sessionCard(newSessionName,newSessionHour,newSessionMinutes,newSessionSeconds);
        newSession.draw()
    }else{
        window.alert('Please enter a Session Name')
    }
    sessionNameInput.value=""
    hourInput.value=""
    minutesInput.value=""
    secondsInput.value=""
})

/*FUNCTION FOR TITLE RESPONSIVENESS*/
let titleWidth=title.style.width;
document.addEventListener('scroll',function(){
    if(window.scrollY>30){
        title.style.width="100%"
        title.style.left="0"
    }else{
        title.style.width=titleWidth
    }
})

/*FUNCTION FOR DISPLAYING OUTPUT IN A NEW SCREEN*/
displayBtn.addEventListener('click',function(){
    window.open()
})

/*FUNCTION FOR SAVING NOTES ITEM*/
saveNotesBtn.addEventListener('click',function(){
    localStorage.setItem('note',notes.value)
})
window.onload(
    notes.value=localStorage.getItem('note')
)

    


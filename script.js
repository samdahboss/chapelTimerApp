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



let session={}

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
        countdownDisplay.innerText=(this.noOfHours.length>1?(this.noOfHours):this.noOfHours.length==1?("0"+this.noOfHours):"00")+"H:"
                                   +(this.noOfMinutes.length>1?(this.noOfMinutes):this.noOfMinutes.length==1?("0"+this.noOfMinutes):"00")+"M:"
                                   +(this.noOfSeconds.length>1?(this.noOfSeconds):this.noOfSeconds.length==1?("0"+this.noOfSeconds):"00")+"S"
    }

}

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
let titleWidth=title.style.width;
document.addEventListener('scroll',function(){
    if(window.scrollY>30){
        title.style.width="100%"
        title.style.left="0"
    }else{
        title.style.width=titleWidth
    }
})
displayBtn.addEventListener('click',function(){
    window.open()
})
saveNotesBtn.addEventListener('click',function(){
    localStorage.setItem('note',notes.value)
})
window.onload(
    notes.value=localStorage.getItem('note')
)

    


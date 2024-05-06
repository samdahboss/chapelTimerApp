let title = document.getElementById('title')
let displayBtn=document.getElementById('display')
/*notes*/
let notes =document.getElementById('notes')
let saveNotesBtn= document.getElementById('saveNotesBtn')

/*timer*/
let sessionNameInput=document.getElementById('sessionName')
let hourInput=document.getElementById('hour')
let minutesInput=document.getElementById('minutes')
let secondsInput=document.getElementById('hour')

/*session row*/
let sessionRow= document.getElementById('sessionRow')
let sessionCards=document.getElementsByClassName('card')
let addSessionBtn= document.getElementById('addSessionBtn')

let cancel=document.querySelector('.cancel')

cancel.addEventListener('click',function(){
    console.log('lol')
})
let session={}

class sessionCard{
    constructor(sessionName, noOfMinutes){
        this.sessionName=sessionName;
        this.noOfMinutes=noOfMinutes;
    }
    draw(){
        let cardDiv=document.createElement('div')
        cardDiv.className="card"
        let sessionTitle=document.createElement('h2')
        let sessionTime=document.createElement('h3')
        let cancelBtn=document.createElement('span')
        cancelBtn.innerText="X"
        cancelBtn.className="cancel"
        sessionTitle.innerText=this.sessionName;
        sessionTime.innerText=this.noOfMinutes+"min"
        cardDiv.append(sessionTitle,sessionTime,cancelBtn)
        sessionRow.append(cardDiv)
    }
}
addSessionBtn.addEventListener('click',function(){
    let newSessionName=sessionNameInput.value;
    let newSessionTime=minutesInput.value;
    if(newSessionName && newSessionTime){
        let newSession=new sessionCard(newSessionName,newSessionTime);
        newSession.draw()
    }else{
        window.alert('Please enter a session name and time')
    }
    sessionNameInput.value=""
    minutesInput.value=""
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

    


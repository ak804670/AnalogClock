setInterval(setClock, 1000);

const hourHand= document.querySelector("[data-hour-hand]")
const secHand= document.querySelector("[data-sec-hand]")
const minHand= document.querySelector("[data-min-hand]")

function setClock(){
    const currentDate= new Date()
    const secondsRatio= currentDate.getSeconds() /60;
    const miniutsRatio= (secondsRatio + currentDate.getMinutes()) /60;
    const hoursRatio= (miniutsRatio + currentDate.getHours()) /12;

    setRotation(secHand,secondsRatio)
    setRotation(minHand,hoursRatio)
    setRotation(hourHand,miniutsRatio)
}

function setRotation(ele,rotationRatio){
    ele.style.setProperty('--rotation',rotationRatio * 360)
}

setClock
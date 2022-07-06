setInterval(setClock, 1000)//calling this function every 1000 milisecond

const hourhand = document.querySelector('[data-hourhand]')

const minuteshand = document.querySelector('[data-minuteshand]')

const secondshand = document.querySelector('[data-secondshand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12

    setRotation(secondshand,secondsRatio)
    setRotation(minuteshand, minutesRatio)
    setRotation(hourhand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()

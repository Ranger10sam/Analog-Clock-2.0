//  setInterval(setClock, 1000);

//  const hourhand = document.getElementsById("hour")
//  const minutehand = document.getElementsById("minute")
//  const secondhand = document.getElementsById("second")

//  function setClock(){
//      const currentDate= new Date();
//      const secondsratio = currentDate.getSeconds() / 60;
//      const minutesratio = (secondsratio + currentDate.getMinutes()) / 60;
//      const hoursratio = (minutesratio + currentDate.getHours()) / 12;

//      setRotation(secondhand, secondsratio);
//      setRotation(minutehand, minutesratio);
//      setRotation(hourhand, hoursratio);
//  }

//  function setRotation(element, rotationratio){
//      element.style.setProperty('--rotation', `rotate(${rotationratio}deg)` * 360);
//  }

//  setClock()

setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrot = 30*hr + min/2;
    minrot = 6*min;
    secrot = 6*sec;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${minrot}deg)`;
    second.style.transform = `rotate(${secrot}deg)`;

}, 1000);
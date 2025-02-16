const clock = document.getElementById('clock')
//const clock =document.querySelector('#clock') ye bhi le skte h 

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();

}, 1000); // 1000 means hr 1 sec baad agr 2000 krte to hr 2 sec hota 
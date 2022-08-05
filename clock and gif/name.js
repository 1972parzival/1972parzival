b = 70;
b++;

console.log("test " + b);

function clockRefresh() {
    
    var current = new Date();

    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    var minutesString = minutes.toString().padStart(2, '0')
    var timeis = `${hours}:${minutesString}`

    document.getElementById("currentTime").innerHTML = timeis;

    console.log(`The current time is: ${timeis}`)
    console.log(`The seconds are: ${seconds}`)
    console.log(`The minutes are: ${minutes}`)
    console.log(`The hours are: ${hours}`)
}




function clockRefreshCheck() {
    var current = new Date();
    console.log(current.getSeconds())
    if (current.getSeconds() == 0) {
        clockRefresh()
    }
}

var myVar = setInterval(clockRefreshCheck, 1000);
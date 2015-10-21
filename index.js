var Gpio = require("onoff").Gpio;
var led = new Gpio(14, "out");


led.writeSync(1);
setTimeout(function(){
  led.writeSync(0);
  led.unexport();
}, 1000)

var clientio = require("socket.io-client");
var client = clientio.connect("http://localhost:1234");
var Gpio = require("onoff").Gpio;

var slot = {}
slot.led1 = new Gpio(14, "out");


client.emit("join-end");
client.on("command", function(data){
  console.log("change " + data.key +  " status to : " + data.value);
  slot[data.key].writeSync(parseInt(data.value));
})

// This is an example, the pi trigger a switch.
setTimeout(function(){
  client.emit("switch1", 1);
  client.on("message", function(data){
    console.log(data);
  });
}, 5000)

var exit = function(){
  led.unexport();
  process.exit();
}

process.on("SIGINT", exit);

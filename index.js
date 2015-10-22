var clientio = require("socket.io-client");
var hostname = process.env.HOST || "localhost";
var port = process.env.PORT || 3001;
var client = clientio.connect(host + ":" + port.toString());
var Gpio = require("onoff").Gpio;

var slot = {}
slot.led1 = new Gpio(14, "out");


client.emit("join-end");
client.on("command", function(data){
  console.log("change " + data.key +  " status to : " + data.value);
  slot[data.key].writeSync(parseInt(data.value));
})
  
client.on("message", function(data){
  console.log(data);
});

// This is an example, the pi trigger a switch.
setTimeout(function(){
  client.emit("switch1", 1);
}, 5000)


var exit = function(){
  slot.led1.unexport();
  process.exit();
}
process.on("SIGINT", exit);

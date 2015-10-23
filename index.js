var clientio = require("socket.io-client");
if (!process.env.HOST || !process.env.PORT) {
  console.log("You must specify a middleware instance's HOST and PORT");
  process.exit();
}
var client = clientio.connect("http://" + process.env.HOST + ":" + process.env.PORT);
var Gpio = require("onoff").Gpio;

var slot = {}
slot.led1 = new Gpio(14, "out");

// Let it bip once
slot.led1.writeSync(1);
setTimeout(function(){slot.led1.writeSync(0);}, 300);

client.on("whoareu", function(){
  client.emit("join-end");
})

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

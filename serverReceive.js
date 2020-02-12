var mqtt = require('mqtt');

var options = {
  port: 16086,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: "qkjtffif",
  password: new Buffer('JlqxGc-L0ocS')
};

var client = mqtt.connect('mqtt://yourweblink.cloudmqtt.com', options);
console.log("Received");

client.on('connect', function() { // When connected
  //Subscribe to a topic
  client.subscribe('topic1/test', function() {
    //When a message arrives, print it to the console
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });
});

let mqtt = require('mqtt')

let options = {
  port: 16086,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: "qkjtffif",
  password: new Buffer('JlqxGc-L0ocS')
};

let client = mqtt.connect('mqtt://yourweblink.cloudmqtt.com', options);

client.on('connect', function() { // When connected
  //Subscribe to a topic
  client.subscribe('topic1/test', function() {});

  //Publish a new message to the broker every 4 seconds
  setInterval(function(){
    //Create a random number (0-100)
    let rand = Math.random() * 100;
    //Publish a message to a specific topic
    //The message HAS to be converted to a String
    client.publish('topic1/test', String(rand), function() {
      console.log("Pushed: " + rand);
      //client.end(); // Close the connection when published
    });
  }, 4000);
});

# Communication System with Node.js and MQTT

## Introduction
This tutorial uses Node.js and MQTT to create a communication system with clients and a main broker. The level is intended for users that have a basic understanding of JavaScript, and ideally prior knowledge with Node.js.

### MQTT Broker Set Up
MQTT is a lightweight communication protocol optimized for Internet of Things applications, and it allows the development and control of networks, and interconnected devices. It uses a publish/subscribe to topics structure, and it is especially useful "for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium" (http://mqtt.org/).s

An MQTT system uses a decentralized architecture of a broker and multiple clients that communicated by exchanging messages under certain topics. If a client is subscribed to a particular topic, then all messages from the channel can be forwarded to it.

In this example, we will be using CloudMQTT as the main broker, as it offers a free plan for connections with 5 users, making it ideal for the needs of this tutorial. In addition, CloudMQTT offers a very convenient and flexible setup, including a console that displays the messages received on the subscribed topic(s). Directions for setting up a free account are found here https://www.cloudmqtt.com/plans.html.

<p align="center">
<img alt="CloudMQTT" src="assets/cloudMQTT.png" width="420" /></p>

After your instance has been created (as in the image above), you will receive the instance's details that are important to have available especially when you are configuring the Node.js application.

you may test your broker by using the Websocket UI selection on the left menu of the interface, you may find

## Node.js
Node.js is a JavaScript runtime environment that it allows an easy and cross-platform development without the need to execute code inside of a web browser. It allows the development of command line tools and server-side scripting with the use of the JavaScript language, allowing for dynamic web pages, applications, or interactive experiences.

In our example, we are going to use Node.js to develop two MQTT clients that are going to communicate remotely by sending and receiving messages via the CloudMQTT broker. To start developing with Node.js, you would need to download the package - setup instructions can be found here. The following example has been created with Node 7.9.0.

<b>Create a API and Socket IO<b>

First, I'm using Window 10 for this project.

Open Terminal</br>
copy the word below to continue</br>
npm install -g nodemon </br>
npm install mysql</br>
npm install socket.io</br>
npm install body-parser</br>

After install completed you can continue.</br>
If you plan to start this project, please open Terminal and input the keyword as below.</br>
nodemon app.js


Create a app.js. Below is the script file will be handle.</br>
-Setup require that I need, like express, http, socket.io, mysql and body-parser</br>
-Using MYSQL as Database.</br>
-Setup CORS allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. </br>
-io.on('connection') method in server listens for any new client-side socket connections. When the client loads a page with Socket.IO on the client side, a new connection will be created here.</br>
-Setup Socket name call "listening" to listen the port and getting real time data.</br>
-Using app.listen() to bind and listen the connections on the specified host and port.</br>
-Use Http creates a server to listening Socket.io.</br>
-Final, setup a port for WebSocket(2500) and API(3100).</br>

Create a item.js script to handle the Router callback function.</br> 
-Use Router specify a callback function called when the application receives a request to the specified endpoint and HTTP method.</br>
-Setup GET request to get all information item with review Data. 



Database Detail</br>
Schemas </br>
·ratechallenge

Generate TABLE
CREATE TABLE `ratechallenge`.`item` (
  `id` BIGINT NOT NULL,
  `name` LONGTEXT NULL,
  `active` LONGTEXT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ratechallenge`.`rate` (
`id` BIGINT NOT NULL,
`star` LONGTEXT NULL,
`review` LONGTEXT NULL,
`item_id` LONGTEXT NULL,
`created_at` DATETIME NULL,
PRIMARY KEY (`id`));

Table 'item' column 'active' is to display or hide the product at Front-end.

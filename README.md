Create a API and Socket IO

First, I'm using Window for this project

Open Terminal
copy the word below to continue
npm install -g nodemon 
npm install mysql
npm install socket.io
npm install body-parser

After install completed you can continue.


Create a app.js. Below is the script file will be handle. 
-Setup require that I need, like express, http, socket.io, mysql and body-parser
-Using MYSQL as Database.
-Setup CORS allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
-io.on('connection') method in server listens for any new client-side socket connections. When the client loads a page with Socket.IO on the client side, a new connection will be created here.
-Setup Socket name call "listening" to listen the port and getting real time data
-Using app.listen() to bind and listen the connections on the specified host and port.
-Use Http creates a server to listening Socket.io.
-Final, setup a port for WebSocket(2500) and API(3100).

Create a item.js script to handle the Router callback function. 
-Use Router specify a callback function called when the application receives a request to the specified endpoint and HTTP method.
-Setup GET request to get all information item with review Data. 



Database Detail
Schemas 
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

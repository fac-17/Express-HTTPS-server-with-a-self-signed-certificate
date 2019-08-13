# Express-HTTPS-server-with-a-self-signed-certificate
Express HTTPS server with a self-signed certificate

```
npm install
npm start
```

## Demo how to generate certificates and use them in a node project

Check this :smile: [TUTORIAL](https://flaviocopes.com/express-https-self-signed-certificate/)

Run this command in your project directory to generate certificate and key. If using Ubuntu you will have openssl installed by default. If on MacOS you can install it with: **_brew install openssl_**
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
The utilitiy will walk you through the process. Just remember to put *localhost* on the common name section.

![](https://i.imgur.com/6t1S9m5.png)

Then we can create a simple node server with express.

```javascript=
const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello HTTPS!");
});

https.createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });

```
![](https://i.imgur.com/XqVa5dh.png)


![](https://i.imgur.com/9HcpFId.png)
Click on Advanced and proceed to page. You can see that localhost is using the https protocol, although it's a self-signed certificate hence it's not legit but you get the gist.
![](https://i.imgur.com/5K18CxZ.png)
![](https://i.imgur.com/GVS52aW.png)
![](https://i.imgur.com/Lqow97q.png)

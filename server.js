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

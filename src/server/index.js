const express = require("express");
var proxy = require("express-http-proxy");
const app = express();
// app.use("/abc/11", (req, res) => {
//   res.json(11);
// });
app.listen(9007);

app.use("/proxy", proxy("https://dmp.sinoxk.com/user-portrait"));

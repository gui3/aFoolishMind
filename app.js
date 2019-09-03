const express = require("express");

const app = new express();

const routes = require("./app/routes/index")
app.use('/', routes);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

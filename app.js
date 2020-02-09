const express = require("express");
const morgan = require("morgan");
const routes = require('./routes/pages');
const models = require('./models');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

const PORT = 3000;

const init = async() => {
  await models.User.sync();
  await models.Page.sync();
  console.log ('synced!');
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
};

init();


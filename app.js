const express = require('express');
const morgan = require('morgan');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

const models = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res,next)=> {
  res.redirect('/wiki');
})

app.use('/wiki', wiki);
app.use('/user', user);

const PORT = 3000;

const init = async () => {
  await models.db.sync({ force: true });
  console.log('synced!');
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
};

init();

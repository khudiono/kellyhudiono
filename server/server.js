const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get('*.gz', function (req, res, next) {
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(__dirname + '/../public'));

app.get('/foodblog', (req, res) => {
  let options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html', options, (err) => {
    if(err) {
      console.log(err);
      res.end();
    }
  });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

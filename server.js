// Express
const express = require('express');
const app = express();
const request = require('request');

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname,'/dist')));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// - - - - = = = = Server Listener = = = = - - - -
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));

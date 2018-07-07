// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname,'/dist')));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Mysportsfeed
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.2", true);
msf.authenticate("djxtremor", "tjdev456");

const leagueController = {
  index: (request, response) => {
    console.log('requesting api')
    msf.getData('mlb', '2018-regular', 'overall_team_standings', 'json', {})
      .then(league => response.json(league))
      .catch(error => console.log(error))
    // var data = msf.getData('mlb', '2018-regular', 'overall_team_standings', 'json', {});
    // console.log(data);
    // response.json(data);
  }
}

app
  .get('/', leagueController.index)
  .all('*', (req, res, next) => {
  res.sendFile(path.resolve('dist/index.html'))
});



// - - - - = = = = Server Listener = = = = - - - -
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));

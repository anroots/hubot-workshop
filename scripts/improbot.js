// Description:
//  Improbot knows about improv
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot get schedule - List upcoming imporov events
//   hubot show <ID> - Get information about a show
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   <github username of the original script author>
const moment = require('moment');
moment.locale('et');

formatDate = function (dateString) {
  let time = moment(dateString);
  return time.format('DD MMMM HH:mm');
};


module.exports = robot => {

  robot.respond(/show (.*)/i, function (res) {
    return robot.http("https://api.improvision.eu/v1/events/schedule")
      .get()((err, httpRes, body) => {
        let data = JSON.parse(body).data;
        data.forEach(function (entry) {
          if (entry.uid === res.match[1]) {
            let link = 'https://improvision.eu/#/events/'+entry.uid+'<<Open event page>>';
            return res.send('*' + entry.production.title + "*\n\n" + entry.production.description + "\n\n" +link);
          }
        });
      });
  });

  robot.hear(/sad/i, function(res){
    res.reply('Dont be sad');
  });

  robot.respond(/get schedule/i, function (res) {
    robot.logger.debug('Fetching improv events...');

    return robot.http("https://api.improvision.eu/v1/events/schedule")
      .get()((err, httpRes, body) => {
        let data = JSON.parse(body).data;
        let schedule = "";
        schedule += "Here is the latest improvised theatre schedule from https://improvision.eu<<Improvision.eu>>.\n\n"

        data.forEach(function (entry) {
          schedule += "- `" + entry.uid + "` " + formatDate(entry.times.start) + " " + entry.production.title + "\n";
        });

        schedule += "\nFor more info about a show, use `improbot show <UID>`";
        return res.send(schedule);
      });

  });

};

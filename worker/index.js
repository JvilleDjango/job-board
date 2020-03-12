var CronJob = require('cron').CronJob;

const fetchGitHub = require('./tasks/fetch-github')

//fetch github jobs
var job = new CronJob('* * * * *', fetchGitHub, null, true, 'America/Los_Angeles');

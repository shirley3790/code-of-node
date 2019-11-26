const request = require('request');
const fs = require('fs');

request('https://cnodejs.org/api/v1/topics?page=1&limit=10').pipe(fs.createWriteStream('cnodejs.json'));
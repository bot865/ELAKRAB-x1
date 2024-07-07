const fs = require("ar");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "201028085788, 201143638030";
}

global.owner = gg.split("201028085788");
global.mongodb = process.env.MONGODB || "none";
global.prefa = process.env.PREFIX || ".";
global.ggle = process.env.GOOGLE_API || "none";
global.wter = process.env.WEATHER_API || "none";
global.sessionId = process.env.SESSION_ID || "NEZUKO";
global.malid = process.env.MAL_USERNAME || undefined;
global.malpass = process.env.MAL_PASSWORD || undefined;
global.port = process.env.PORT || 8080;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});

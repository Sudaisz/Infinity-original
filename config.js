//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sudaisabubakar221@gmail.com";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Sudaisz/INFINITY_AND_BEYOND-MD.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaoi15YAojYuT1dU8q2H";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaoi15YAojYuT1dU8q2H";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://tinyurl.com/ry4d6j4d";
global.devs = "23490197600221";
global.sudo = process.env.SUDO || "2349019760022";
global.owner = process.env.OWNER_NUMBER || "2349019760022";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://tinyurl.com/2t55s8kx";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://malvin-session-fzow.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tzb2tsTmFjcjAwVGxDa1paMnZZZzczaWorQXQ3Y1lLb1U2WE1hdG1Fbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEwvRHRoVGowdzh6Vktyb0tOaXdQVlA0K0VLZnZIbGxlSDNmSy8wRnhURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTURWQUoyN2wvUDVVS2d4cFJLNFdKOUpEZXRSNlQ0Szk4Ylc1SEVlZ2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZXUzTlNBU05CVGRGa2JqWXNBODZPTld1MjBqMkI0U0VwN3RTOXJ1cVdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOL3JiWkJvVWdLcC9vTTB1YjdqZWwxeHhoUDBjOFZnZHovRlo3VFk5MzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIZVRsUkVKbTg1UUZGU29MRTVrK0NxMkhsNS9oMkZnMHcxTXgvUlZFUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZLVWE1VG9FaXFST0VrcC9HdlNDVEg5dWRGKzQvVlFiNTR4K2VPY29YUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1ZSbHBrdVQ3TStLSUJYMFlHODhiSG1MVEJtTC9lT24ra0hwZDZHNjJtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxZ0NsaUJ4bERsdW4vdFJacXYrS0RYY2hUbFlPaUFUNUJLNTVaRUViR1p3TkljNEk3dk5yQlJqNGtrcGdrUVhYVFE2eGRWTWlRbExsMFB1c2JIaGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIweVpoaUtjUi9XOW92bXd0bm1HZTcxZzNFSUd1bWVTV054S2JHREVmcWNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQVW1tNkVsY1IyaXF0REVWSkZHeVpnIiwicGhvbmVJZCI6Ijk3MjNhNWM1LTFiZGQtNDJlZi04MDBlLTJhN2I1ZDhiYWM3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRmxPa0xnZjZtd0hiOEprbFh3ZmwyK3hsQzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVltd0RKZS9Gd0xibW1VVEVFd1A3M2hwK3NFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBOU0ZDWlJSIiwibWUiOnsiaWQiOiIyMzQ5MDE5NzYwMDIyOjcwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNajZpS1VCRUp5ODk3a0dHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJubk9MUGJ4azRyRmhiTDI0Um1URXdXK2dUNWsyYnFNdnc1dXlHUTJNRFcwPSIsImFjY291bnRTaWduYXR1cmUiOiJaTEo2dlRzcTNkanRxMEYzK0FjSktSTTZ6MTRmclpiOHJFMVZscXhpUEl3U1pPTmpuZGZobFBURmRJd2phdVk5eFNVQ0Z3MmNnaEhwYkRuY2tpdGRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0NSM2hYQWVMMElFSW1JRzdrS0RaTnBCYnk5bExUWFFGWlFZMCsza3lFL3h3Rkxia1k1NTYyV2c2eHJnN2RUN053azYwWlN1MEh1YU14RitJQ1diaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE5NzYwMDIyOjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo1eml6MjhaT0t4WVd5OXVFWmt4TUZ2b0UrWk5tNmpMOE9ic2hrTmpBMXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIxMDc4MTh9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝙏𝙤 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮 𝙖𝙣𝙙 𝙗𝙚𝙮𝙤𝙣𝙙 ",
  author: process.env.PACK_AUTHER || "𝕚𝕟𝕗𝕚𝕞𝕚𝕥𝕪",
  packname: process.env.PACK_NAME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪 𝕞𝕕",
  botname: process.env.BOT_NAME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪",
  ownername: process.env.OWNER_NAME || "𝕓𝕖𝕪𝕠𝕟𝕕",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

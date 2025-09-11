//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9xckRCOFlPZ0lseUp3YSthT0J5UDVNOEdtUVB3ODBjbFdXTkNzZkhHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk4rUWh5bFJvMDZqZkdkM0taSzIxOE9jRmUyTmZZSElZL0dJRURZa0dTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSHRtM2NGamU4ZXQ4R2ZXekg5MXFKTEVINzJJeTIrMVpUdmJMdFR6UTA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydWFIeEwxRGJWK1Fpd0EvZnRlRGZXRDY4ZDZIK2VXZks2WlpzUDRoTEJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLU0ZXemtVNEZFNnRaY0ZqWFBKZUhVQ2NjamhjNENKU2ZSSzNVVjBpazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpHR0xYU1F3T3duYlY4Q0l1ZjA1d0tSQ1lmZnFja1VRTGRrM09ZaTIwU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBUODNvdnZaRC9hek5rYWIzSmhGQWl3S256TWxFZWR5VUZUVUl4ZmttWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzVtZFJkTU5lWnpMSURPejIrZE4xSk1WaUx3Snk0bE9PdzhHSVgxWXdVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUwZTVrOGZIczd6emtZVzU0WnV6d2Y1ZzV4OExKYnVJYTZjVmlMZW9BQzZRSUM3bCtURUxxV0dCTTRxZ0Y1SjhhQmtDZGlCRUJFbnZ5V05oakJiVGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJsQ2thSURUUlFMRDNHejNZVGJCdGRaekVPMDl5THpJSHltQlE0Vjd5SmpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwNHlXLUI5WlFqS3h5dUVVcVBDMmVnIiwicGhvbmVJZCI6IjdmNWJkM2Q1LWE3YjMtNDE5NS05MDI3LWQzNWVlYThlOWMxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ZmJXeUNaaHVodW54TE54THZLR3BmTm02dmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjRUekhKM002MFB0SkxXVHg5Q1d0eWNUbG93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpZR1RZWUM3IiwibWUiOnsiaWQiOiI5MjMyODQ5MDU4MjE6OTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDkyOTQ2MzY3ODU3MDg6OTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeXp3cnNFRU1tUWpjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxR0F2NVloaGw2bEp2VWZyMHh6ejB3LzVHRW1IL2I1b1N5eG5hM1BXblFzPSIsImFjY291bnRTaWduYXR1cmUiOiJvUW9EQU13N0F0YnZEbnNVejhkaWR2OCt0Q2ZlZFJFdXI4UnAxeEt5dWx0MUJPQ01vRjZrTXU5emtaNnRPWkhIcWY2bVU0c1JLNTBnRUVyaElRZzBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT25kRVlXczZiZjFIU2loSUVmZ1dRWmxONFJFaVNNS3JmejIyVjNBdXF4TVRqOVpQQXUwOEx5Wkp0RWRGTU5FZk9xUGpMd0xVeDR3eHZpa0tJaHUxaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyODQ5MDU4MjE6OTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWhnTCtXSVlaZXBTYjFINjlNYzg5TVArUmhKaC8yK2FFc3NaMnR6MXAwTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NjI4NTAzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMwWiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923284905821",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

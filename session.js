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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0V0T1pvMmpWdmhud3dabnN2WmhKQnNKVWpUTnByWFRkTWUyYkdvTm1XRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkxWNWdMNGJwSXp5ZmlZekd2Unp0OEtCZU0yVE4yazNnOFhzNnd1akVSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SG4ydnNHZG1OQXM0WEQwOE5VR3g4SG91TGJSWXdKRGFuZmRBU1J2OEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUXlZZkIxbURrTFFUR2hRY1ROd1NnQkNUNkpkK29VeUJlYWh0alE2RkFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFObGg0a0FpNVIxRUtmRHVCUU5HaDVxOFRXTEsyMXMzSitKaWNPTElNWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc5QVpJWkQ4OVQzUlUvaFQ5UnFVdGtXWEpiSDMySTE3MGtmWU1nSWVmaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5yeGVrci9EcGF5RjlOaU5BK1V1M0dLMzBqenlKTDhLVHI2MzJDUmxIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTFLbVdOaEw3bGpTTlRYR3BzR0dSdHhJamNqZU9uZGNPb0I5WVVSTGZ4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVodHVHbzR4N1djRjJBWk1ESzlXZnpqUlAzWS9INGpRaVJtcXlBNzhzSThwUFBnTmNXRVIrL042aGxTTjB2N2lQM3lrcHFqNDE3azNvZ0J2VU9aUkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJRK2hxYS9PNTFoY2U5QytzQ3pxMXBhajlEQWFFUmhOb1hJTkU2ZGs0RFBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDdnM4WER0alFSeTRoN1U0OW0ycE13IiwicGhvbmVJZCI6IjIwMTZiMjAxLTFiNTgtNDExZS1iYTQwLTdiYjdhYzMwMDk4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYWnBGTGdiRkpIcnUvNERPTXQ1UEpaSTE0a2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmxKc0VkVFRWUklsK2hJUTgvTWFUYTZGcTZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5ITTc0NkhDIiwibWUiOnsiaWQiOiI5MjMyODQ5MDU4MjE6OTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDkyOTQ2MzY3ODU3MDg6OTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcXp3cnNFRUpXSGpjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxR0F2NVloaGw2bEp2VWZyMHh6ejB3LzVHRW1IL2I1b1N5eG5hM1BXblFzPSIsImFjY291bnRTaWduYXR1cmUiOiI1Q1J0eTNjWUwvSVBWQnVPVEtUeW0xc2ZtNWt6eWx2UkMxdkFFSm5qTFQ5QW1aYUZOd1JsTzQ2OHM3MW1WWmZYS25LZ1hWRDlFMlBicjZ3MTd2b3NDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0w3cTdSSHJacEZqeldNOThtenltVU1SZnl2L0RnMjhUVjhLMzM1bTd6bHgzYUlMMTQwZzhGU0FDR2F6d0FLdFllbHZRQXltMW1XclNZR0Z3R0pKQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyODQ5MDU4MjE6OTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWhnTCtXSVlaZXBTYjFINjlNYzg5TVArUmhKaC8yK2FFc3NaMnR6MXAwTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NjI3Mjk4LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
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

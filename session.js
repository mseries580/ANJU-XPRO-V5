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
    "",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923284905821",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktaMEYyM25FV1hCak5YbzJCVUNtazUvbDBDNkNndUxiVWdCT1VHN0gyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlJiT3lUaVRzWnhOblJiZ0prM2hNbzc5Wlh0WlByUW5pUzcvbnJuMFFGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRlREbjZFR29kanlQRU1WUGNWaEY1Q3d5VVZVVXgrQ0svMHdCS1dheDE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2YUlXekxONjBFRDBHQWI1ZUtkdEtDMnpMYXFQRVVVelkwaHlYd1puR2xZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DdjhkNUs4akdoYzlsNlc5ZFNQRytvUXowRE05SXJGNXB5TytUampGa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik82elJHNnNZN2QwWXNGdVlNa09WRVd6RkwvVy9VSG9KVFBtUjlZaVJBMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pBWWYrTHhZUkxlajJweTUrOHFudVFTbnRycFRPZjNMTnJtVDVYQi9Fcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEs1VC9zaGNUb0RxMXUyZFFxYWx1L05wNGhydlZWOVl3VTM4SDFGajJDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVyenJIM1NPc0RGT04vRGRtMTlxZnBlRHIxMkZ0VDBONzAvVFdLbDQvSjNGM2xGWlBXYTNYU3NKMXFzVTdPZGlCbloza2dITU1SUG5YQk1BUlhJeEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6InhTd0dnOWp6bTd6MjRNS054VjhIWWJPUzhzR3RhZlBMRDliaVRjQ2dHTDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpvTVVJa1dVU0NTaHFoaWJfcUs4WEEiLCJwaG9uZUlkIjoiNTM1NGQ4NTctODFmZS00YzU3LWFjZTAtZGZiN2UxYmQ5MzMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdXSS9hVzEwQXF2Ym1LQXdjQ0dzZ2dBbnovcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySXM1SUl6MHFnR0RxVndQU0xxM2hwQXNFZmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDZMWjZSQkoiLCJtZSI6eyJpZCI6IjkyMzQzNjg2MzgzMzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRldmVsb3BlciIsImxpZCI6Ijk4NzA3NTI1NTk5MjUwOjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS3h2WWdERU9YT3NjWUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2M1RGa2hnSlZBeUJGMzFpK0hkSXJVSDhLMTFSeEg1QVdmMGtZdFN4NDNJPSIsImFjY291bnRTaWduYXR1cmUiOiJkVkpaRzIrdFFDa1RoTVd1dzJFSnloMEkxdVB5cmo5NmRPbGhEM2syM3lZS3VBUC9CQXpGbDVHc0FPVFY1SlRJRmRidlpYaEY3KzQ5ZTdFbDZMR3pEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRlM0V3puYWxKeHVGRFRMcWVpYUJSUEUxUDVIRzF0UTBvTys5YXUzbmtQREVXeTlobjZpMzh1V1lDbHJxc1FFZE4zT0t1RCtIY1FnU3J5amtJUm91REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MzY4NjM4MzM6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiOTB4WklZQ1ZRTWdSZDlZdmgzU0sxQi9DdGRVY1IrUUZuOUpHTFVzZU55In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgyMjYyOTIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGVuIn0=",
};

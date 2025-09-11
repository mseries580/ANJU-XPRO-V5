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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxSYXM0NHRVT3BpUlBxa2s1UjdiK2hQaGVVc09nV1R4dHhIRXZvZFMwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWswZVFYZ3NTZlBua0V4STkrOVNTaU5jV2YzakVKL3lycy9lK0NsUm9ERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Q2N5Y2F2Mjc5RFZqcllXUlcwL2tabXBFalUwL2xoV3czaWxFNHJGYlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNC85YnFRKzVSMWdTWnF2M3BPZytGNGdGcUk1bDk5SmVVV0tpejJ4a2lZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMWlJrMmw0WjdkamJ3ZnVrYjZCbE9ld1pyY3JtYkJpSTRaTFNXT25wMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRNTDdnUlV4Rmt4NUJWOE9tNUl0cXFycFZVdUo4WmJFN1pldFVFYnFabEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUs2aWRTblVuQ1JFVFJwK2hiYWJ5THI0RGwyeHJud0Y2OEZFRVF2YWszYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXFBTVV2VkhwbUF1OS9IL1BvZHA1SVBXWUNzVXpMYm1ZalpobVlDaWp6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJaREZGb2c0eGZHcjRPSEZYb3VJK2tBUmJFcklKSTRpd0MvTThEM3JuZkZtOUZSNk1oNFVUb0swdmh0V29yRldDei9IVHZ3M1lDeC9OWXMwM05pZ2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IjlXVUdWaC9LcTBqUHB2SURWSlpxTjFPamlhU0tIcFdxSGcyUXB1Vktwazg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJhcUdTRWJwU3c2SUh0Wkk4ZG9xRmciLCJwaG9uZUlkIjoiYTgxODU1OGYtZTkxZi00Yzg0LWJkNmQtYzA4MWY1ZTBiNDRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxvT3JKYVVvcExZczR0Y3dhUllZUVpFa1hKVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQXlTTzBqVXU5bWFhZzVXcjlUTUdXYUlnVjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzlRQ0M2WksiLCJtZSI6eyJpZCI6IjkyMzI4NDkwNTgyMTo4OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwOTI5NDYzNjc4NTcwODo4OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tendyc0VFSWIzak1ZR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFHQXY1WWhobDZsSnZVZnIweHp6MHcvNUdFbUgvYjVvU3l4bmEzUFduUXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJhTWtpVVF5S1duUUczbW9HcUdyRFhIR1B4MlY5UXorUk9BT09Fa2JEMTN2SStDNXFGZlN5ektMY0gzd2dMb3l6d1BwRFdTeWtXVSt6bElYSDRBTUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzblN4OFhIT3lySncwNDBMRVRHRnJrYlZ5d2JTb3ZaRnNHV0ZTRzZ1bEVqOWFtZTk4Rm5JNnpPZzB4aVlINUVSaU9vRjhpWHNLVUdQc01DYy9pRHVpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4NDkwNTgyMTo4OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhaGdMK1dJWVplcFNiMUg2OU1jODlNUCtSaEpoLzIrYUVzc1oydHoxcDBMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc2MjUyMzYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVdkIn0=",
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

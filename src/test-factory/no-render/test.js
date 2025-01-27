// const userId = "WS106";
// const password = "123456";
// const stringToBase64 = (str) => {
//   const Buffer = require("buffer").Buffer;
//   const buffer = Buffer.from(str, "utf8");
//   return buffer.toString("base64");
// };
// const idPassEncoded = stringToBase64(`${userId}:${password}`);
// const Authorization = `Basic ${idPassEncoded}`;
// console.log(Authorization);
import dayjs from "dayjs";

// const unlockTime = 1734509916173;

// console.log(dayjs(unlockTime).format("HH:mm"));

// YYYYMMDDHHmmss
const expiration = "2026-01-26 15:28:09";
// YYYY-MM-DD HH:mm:ss

const expirationDayjs = dayjs(expiration, "YYYY-MM-DD HH:mm:ss");

console.log(expirationDayjs.format("YYYY-MM-DD"));
const now = dayjs();

const isExpired = expirationDayjs.isBefore(now);

console.log(isExpired);

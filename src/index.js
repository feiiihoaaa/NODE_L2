const os = require("os");
require("dotenv").config();

function getOSInfo() {
  console.log(`Платформа: ${os.platform()}`);
  console.log(`Свободная память: ${os.freemem() / 1024 ** 2} MB`);
  console.log(`Главная директория: ${os.homedir()}`);
  console.log(`Имя хоста: ${os.hostname()}`);
  console.log(`Сетевые интерфейсы: ${JSON.stringify(os.networkInterfaces())}`);
}

function checkFreeMemory() {
  const freeMemoryMB = os.freemem() / 1024 ** 2;
  if (freeMemoryMB > 4096) {
    console.log("Свободной памяти больше 4 ГБ");
  } else {
    console.log("Свободной памяти меньше 4 ГБ");
  }
}

function restrictedOSInfo() {
  const mode = process.env.MODE;
  if (mode === "admin") {
    getOSInfo();
  } else {
    console.log("Доступ запрещён. Требуется режим admin.");
  }
}

getOSInfo();
checkFreeMemory();
restrictedOSInfo();

require("dotenv").config();

const firstName = process.env.FIRST_NAME;
const lastName = process.env.LAST_NAME;
const group = process.env.GROUP;
const listNumber = process.env.LIST_NUMBER;

console.log(`Имя: ${firstName}`);
console.log(`Фамилия: ${lastName}`);
console.log(`Группа: ${group}`);
console.log(`Номер по списку: ${listNumber}`);

const port = process.env.PORT;
console.log(`Сервер запущен на порту ${port}`);

// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле mood со значением 'happy'
//     заменяет значение hobby на 'skydiving'
//     заменяет значение premium на false
//     выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userKeys = Object.keys(user);
console.log(userKeys);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

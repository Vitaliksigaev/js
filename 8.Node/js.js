// const path = require('path');
// const fs = require('fs');



//Модуль fs (file system) нужен для работы с файлами и папками. Он умеет создавать и удалять файлы и папки, переименовывать их, записывать и считывать данные.


// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err;
//     console.log('Папка была создана');
// });


// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err;
//         console.log('Файл был создан');
//     }
// );

// fs.appendFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     ' From append file',
//     err => {
//         if (err) throw err;
//         console.log('Файл был изменен');
//     }
// );

// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err;
//         console.log('Файл переименован');
//     }
// );

// let input1 = document.getElementById('input1');
// console.log(input1.value);

// let btn = document.getElementById('saveBtn');
// btn.addEventListener('click', () => {
//     fs.writeFile(
//         path.join(__dirname, 'notes', 'notes.txt'),
//         input1.value,
//         (err) => {
//             if (err) throw err;
//             console.log('Файл был создан');
//         }
//     );
// });


// const path = require('path');

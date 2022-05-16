//1 const {EventEmitter} = require('events');
const fs = require('fs');

//1 const ee = new EventEmitter();
const path = require('path');
const readStream = fs.createReadStream(path.join(__dirname, 'text.txt'));//створюєм рідстрім для text.txt
const writeStream = fs.createWriteStream(path.join(__dirname, 'fileText.txt'));//створюємо врайтстрім для fileText.txt

//1 прорамуєм івент
// ee.on('Log', (name) => {
//     console.log(`Log is work !!! ${name}`)
// });
//
// ee.emit('Log', 'Oleg');
// //якщо треба один івент
// ee.once('Test', () => {
//     console.log('Once is working')
// });
//
// ee.emit('Test');
// ee.emit('Test');
// ee.emit('Test');
//
// //які івенти працюють
// console.log(ee.eventNames());

//2
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     console.log(chunk.toString())
// });
// for(let i=0;i<5000;i++){
//     writeStream.write('new some data \n', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
// }
// writeStream.end()

//3 читаємо файл і перекидаємо його дату в інший файл
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk, (error) => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//     })
//     writeStream.end();
// });

//4 використовуємо для того пайпи
// readStream.pipe(writeStream);


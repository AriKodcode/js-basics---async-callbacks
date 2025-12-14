import fs from 'fs';
// function getUserName(callback) {
//   setTimeout(() => {
//     const username = 'ari';
//     callback(username);
//   }, 1000);
// }
// console.log('1');

// getUserName(function (name) {
//   console.log('user name is: ' + name);
// });

// console.log('2');
//1.2
// function loadScore(callback) {
//   setTimeout(() => {
//     const score = 85;
//     callback(score);
//   }, 1500);
// }

// loadScore(function (score) {
//   console.log('loaded score: ' + score);
// });
// console.log('End of script');
//1.3
// function checkLogin(callback) {
//   setTimeout(() => {
//     let osLoggedIn = true;
//     callback(osLoggedIn);
//   }, 2000);
// }
// checkLogin(function (check) {
//   if (check === true) {
//     console.log('User is logged in');
//   } else {
//     console.log('User is not logged in');
//   }
// });
//1.4
// function getProducrPrice(productId, callback) {
//   setTimeout(() => {
//     const price = 99.9;
//     callback(price);
//   }, 1200);
// }
// getProducrPrice(123, function (price) {
//   console.log(`Price for product ${123} is ${price}`);
// });
// console.log('Requesting product price...');
//1.5
// function loadConfig(callback) {
//   setTimeout(() => {
//     const config = {
//       env: 'dev',
//       debug: true,
//     };
//     callback(config);
//   }, 500);
// }
// loadConfig(function (con) {
//   console.log(`Config loaded: ${con}`);
// });
//1.6
// function addAsync(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 1000);
// }
// addAsync(10, 5, function (sum) {
//   console.log('sum is: ', sum);
// });
//1.7
// function getFirstAsync(array, callback) {
//   setTimeout(() => {
//     const element = array[0];
//     callback(element);
//   }, 700);
// }
// getFirstAsync(['a', 'b', 'c'], function (first) {
//   console.log('the first is: ', first);
// });
//1.8
// function isEvenAsync(number, callback) {
//   setTimeout(() => {
//     if (number % 2 === 0) {
//       callback(true);
//     } else {
//       callback(false);
//     }
//   }, 800);
// }
// isEvenAsync(6, function (iseven) {
//   console.log(iseven);
// });
//1.9
// function downloadFile(url, callback) {
//   setTimeout(() => {
//     console.log(`Downloading from: URL, ${url}`);
//     callback('Download finished');
//   }, 1500);
// }
// downloadFile('http://example.com/file', function (err) {
//   console.log(err);
// });
//1.10
// function doubleAsync(value, callback) {
//   setTimeout(() => {
//     const result = value * 2;
//     callback(result);
//   }, 300);
// }
// doubleAsync(10, function (result) {
//   console.log(`result: ${result}`);
// });
//2
// console.log('1');

// const content = 'Hello from async writeFile';
// fs.writeFile('node.txt', content, 'utf-8', (err) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else {
//     console.log('File written successfully');
//   }
// });
// 2.2;
// fs.readFile('note.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error reading file');
//   } else {
//     console.log('Content: ' + data);
//   }
// });
//2.3
// fs.appendFile('note.txt', '\nNew line added', (err) => {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Line appended');
//   }
// });
//2.4
// fs.mkdir('logs', (err) => {
//   if (err) {
//     console.log('folder allredy exist!');
//   } else {
//     console.log("Directory 'logs' created");
//   }
// });
//2.5
// fs.writeFile('logs/log.txt', 'First log line', (err) => {
//   if (err) {
//     console.log('Error creating log file');
//   } else {
//     console.log('Log file created');
//   }
// });
//2.6
// fs.readdir('logs', (err, files) => {
//   if (err) {
//     console.log('nof found fules in logs');
//   } else {
//     console.log('Files in logs:', files);
//   }
// });
//2.7
// fs.stat('note.txt', (err, Status) => {
//   if (err) {
//     console.log('Error getting stats');
//   } else {
//     console.log('Is file: ' + Status.isFile(), 'Size: ' + Status.size);
//   }
// });
//2.8
// fs.unlink('logs/log.txt', (err) => {
//   if (err) {
//     console.log('file not found');
//   } else {
//     console.log('log.txt deleted');
//   }
// });
//2.9
// fs.writeFile('note.txt', 'New content here', (err) => {
//   if (err) {
//     console.log('Error');
//   } else {
//     console.log('note.txt overwritten');
//   }
// });
// fs.readFile('note.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error');
//   } else {
//     console.log(data);
//   }
// });
//2.10
// fs.mkdir('data', (err) => {
//   if (err) {
//     console.log('folder data allredy exist');
//   } else {
//     fs.writeFile('data/info.txt', 'Some info', (err2) => {
//       if (err2) {
//         console.log('can`t write to info file');
//       } else {
//         console.log('File written successfully');
//       }
//     });
//   }
// });

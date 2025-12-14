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

// EXAMPLE 1 - Convert Bytes to KB, MB, GB or TB using JavaScript

function bytesToSize(bytes, decimals = 2) {
  if (!Number(bytes)) {
    return '0 Bytes';
  }

  const kbToBytes = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    'Bytes',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
    'ZiB',
    'YiB',
  ];

  const index = Math.floor(
    Math.log(bytes) / Math.log(kbToBytes),
  );

  return `${parseFloat(
    (bytes / Math.pow(kbToBytes, index)).toFixed(dm),
  )} ${sizes[index]}`;
}

console.log(bytesToSize(1234)); // 1.21 KiB
console.log(bytesToSize(1234567)); // 1.18 MiB
console.log(bytesToSize(1234567890)); // 1.15 GiB
console.log(bytesToSize(1234567891231)); // 1.12 TiB
console.log(bytesToSize(12345678912312345)); // 10.97 PiB

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Bytes to KB, MB, GB or TB using a while loop in JavaScript

// function bytesToSize(bytes) {
//   if (!Number(bytes)) {
//     return '0 Bytes';
//   }

//   const sizes = [
//     'Bytes',
//     'KiB',
//     'MiB',
//     'GiB',
//     'TiB',
//     'PiB',
//     'EiB',
//     'ZiB',
//     'YiB',
//   ];

//   let index = 0;
//   let n = parseInt(bytes, 10) || 0;

//   const kbToBytes = 1024;

//   while (n >= kbToBytes && ++index) {
//     n = n / kbToBytes;
//   }

//   return `${n.toFixed(n < 10 && index > 0 ? 1 : 0)} ${
//     sizes[index]
//   }`;
// }

// console.log(bytesToSize(1234)); // 1.21 KiB
// console.log(bytesToSize(1234567)); // 1.18 MiB
// console.log(bytesToSize(1234567890)); // 1.15 GiB
// console.log(bytesToSize(1234567891231)); // 1.12 TiB
// console.log(bytesToSize(12345678912312345)); // 10.97 PiB

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the `filesize` package to convert bytes to KB, MB, GB or TB

// import {filesize} from 'filesize';

// // 👇️ 1.23 kB
// console.log(filesize(1234, {base: 10, standard: 'jedec'}));

// // 👇️ 1.23 MB
// console.log(filesize(1234567, {base: 10, standard: 'jedec'}));

// // 👇️ 1.23 GB
// console.log(filesize(1234567890, {base: 10, standard: 'jedec'}));

// // 👇️ 1.23 TB
// console.log(
//   filesize(1234567891231, {base: 10, standard: 'jedec'}),
// );

// // 👇️ 12.35 PB
// console.log(
//   filesize(12345678912312345, {base: 10, standard: 'jedec'}),
// );

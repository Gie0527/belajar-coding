//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let first = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here

console.log (first + " " + second + " "+ third + " "+ fourth + " " + fifth + " " + sixth + " "+ seventh)


// // 2. Index Accessing - 1 by 1
// // Problem
// // Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
// //  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
// //   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// // Hints
// // Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// //  tersebut!

let word = 'wow JavaScript is so cool';
console.log (word + " (Ini Index Accssing 1 by 1)") 
    let exampleFirstWord = word[0] + word[1] + word[2];
    exampleSecondWord = 
    word[4] + 
    word[5] + 
    word[6] + 
    word[7] +
    word[8] + 
    word[9] + 
    word[10] +
    word[11] +
    word[12] + 
    word[13] ;
    exampleThirdWord = word[15] + word[16];
    exampleFourthWord = word[18] + word[19];
    exampleFifthWord = word[21]+ word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log("Second Word:" + exampleSecondWord);
console.log("Third Word:" + exampleThirdWord);
console.log("Fourth Word:" + exampleFourthWord);
console.log("Fifth Word:" + exampleFifthWord);

// // ---------------------------------------
// console.log(' ');
// // ---------------------------------------



// // 3. Breaking Sentence (Again) using Substring
// // Problem
// // Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
console.log(word3 + "(SubString)")
let exampleFirstWord3 = word3.substring(0, 3);
    exampleSecondWord3 = word3.substring(4,14)
    exampleThirdWord3 = word3.substring(15,17)
    exampleFourthWord3 = word3.substring(18,20)
    exampleFifthWord3 = word3.substring(21,25)

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleSecondWord3);
console.log('Third Word: ' + exampleThirdWord3);
console.log('Fourth Word: ' + exampleFourthWord3);
console.log('Fifth Word: ' + exampleFifthWord3);
// // ---------------------------------------
// console.log(' ');
// // ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
console.log(word4 + " (Breaking Sentence + Count each Lenght)")
let exampleFirstWord4 = word4.substring(0,3);
    exampleSecondWord4 = word4.substring(4,14)
    exampleThirdWord4 = word4.substring(15,17)
    exampleFourthWord4 = word4.substring(18,20)
    exampleFifthWord4 = word4.substring(21,25)

let FirstWordLength = exampleFirstWord4.length;
    SecondWordLength = exampleSecondWord4.length;
    ThirdWordLength = exampleThirdWord4.length;
    FourthWordLength = exampleFourthWord4.length;
    FifthWordLength = exampleFifthWord4.length;
    
console.log('First Word: ' + exampleFirstWord + ', with length: ' + FirstWordLength);
console.log("Second Word: " + exampleSecondWord4 + ", with length: " + SecondWordLength);
console.log("Third Word: " + exampleThirdWord4 + ", with length: " + ThirdWordLength);
console.log("Fourth Word: " + exampleFourthWord4 + ", with length: " + FourthWordLength);
console.log("Fifth Word: " + exampleFifthWord4 + ", with length: " + FifthWordLength);
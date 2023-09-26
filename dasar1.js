//cara membuat variable
var a = 'a';
let b = 'b';
const c = 'c';

//variable bisa menampung tipe data string (text), integer/number, bolean,array,object

let nama = 'Egiandi'; //string
let umur = 28; //number
let apakahbenar = true; //bolean
let uang = 123.33 // number tapi ada koma

//operator arimatika

let number1 = 100;
let number2 = 1000;
console.log(number1 + number2, 'Pertambahan');
console.log(number1 - number2, 'Pengurangan');
console.log(number1 * number2, "Perkalian");
console.log(number1 / number2, "Pembagian");
console.log(number1 % number2, "Modulus");

//disini belajar mengisi variable
let PenampungHasilOperatorAritmatika = number1 - number2;
console.log(PenampungHasilOperatorAritmatika); //-900

PenampungHasilOperatorAritmatika = number1 * number2;
console.log(PenampungHasilOperatorAritmatika); //100000

PenampungHasilOperatorAritmatika = number1 / number2;
console.log(PenampungHasilOperatorAritmatika); //0.1

PenampungHasilOperatorAritmatika = number1 % number2;
console.log(PenampungHasilOperatorAritmatika); //100

PenampungHasilOperatorAritmatika = number1 + number2;
console.log(PenampungHasilOperatorAritmatika); //1100

//string pun bisa ditambang namun string tidak bisa dikurang dengan operator aritmatika

let firstname = 'ujang';
let midname = 'kondang';
let lastname = 'burhanudin';
let fullname = firstname + ' ' + midname + ' ' + lastname;
let englishfullname = lastname + ' ' + firstname + ' ' + midname;
console.log(fullname)
console.log(englishfullname)
console.log(firstname + midname - lastname) //NaN

//alur membaca code
//untuk membaca code kalian harus membacannya dari kiri ke kanan, dan dari atas ke bawah
//contoh

let number = 1000;
console.log(number * 2); //2000
number = 2
console.log(number * 1000); //2000
number = false;
console.log(number + 1); //1
number = true;
console.log(number + 1); //2

//membaca error
//jangan takut error, berani error itu baik
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak ada error, itu akan membuat programer merasa
//MUAK untuk mencari letak kesalahannya
//contoh error

// const hewan = 'KUDA';
// console.log(hewan);
// hewan = 'buaya';


//AUTO KOMENTAR BISA DENGAN PENCET CTRL + /
//SELALU TELITI DAN APABILA ADA ERROR DIBACA SAJA, BELAJAR CODING ITU PERLU KEBIASAAN 
//KARENA CODING ADALAH SEBUAH HABBIT

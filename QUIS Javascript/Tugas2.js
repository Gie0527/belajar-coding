// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun.
//  Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
//  Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// let hari = 21; let bulan = 1; let tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi
// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// //code switch case kamu disini

let hari = "27"
    bulan = "05"
    tahun = "1995"

    switch (bulan) {
    case "1":
    case "01" :
    console.log(hari,"Januari",tahun)
    break
    case "2":
    case "02" :
    console.log(hari,"Februari",tahun)
    break 
    case "3":
    case "03":
    console.log(hari,"Maret",tahun)
    break
    case "4":
    case "04":
    console.log(hari,"April",tahun)
    break
    case "5":
    case "05":
    console.log(hari,"Mei",tahun)
    break
    case "6":
    case "06":
    console.log(hari,"Juni",tahun)
    break
    case "07":
    case "7":
    console.log(hari,"Juli",tahun)
    break
    case "8":
    case "08":
    console.log(hari,"Agustus",tahun)
    break
    case "9":
    case "09":
    console.log(hari,"September",tahun)
    break
    case "10":
    console.log(hari,"Oktober",tahun)
    break
    case "11":
    console.log(hari,"November",tahun)
    break
    case "12":
    console.log(hari,"Desember",tahun)
    break
    default :
    console.log("Masukan Hari Bulan dan Tahun dengan Benar")
}
    












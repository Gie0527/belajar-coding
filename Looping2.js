// //Menghitung Maju Looping While

let i = 0
while ( i <= 5 )  {
    console.log ("Menghitung Maju " + i) ;
    i++
}

// //Menghitung Mundur Looping While
let j = 10
while (j >= 5) {
    console.log ("Menghitung Mundur " + j) ;
    j--
}


// // Menghitung Maju Looping For

for (i = 0 ; i <= 5 ; i++ ) {
    console.log ("Menghitung Maju " + i)
}

// // Menghitung Mundur Looping For

for (j = 5 ; j >= 0 ; j--){
    console.log ("Menghitung Mundur " + j)
}
    
// Menghitung angka dari 1 sd 50 dan memberikan keterangan ganjil atau genap

for (i = 0 ; i < 50 ; i++){
    if ( i % 2 === 0) {
        console.log(`${i} Genap`)
    } else  {
        console.log(`${i} Ganjil`)
    }
} 

//Membuat 3 Perulangan baru dari 1-100 dengan pertambahan counter sebesar 2, 5 dan 9

console.log ("ini adalah pertambahan 2")
for (i = 0 ; i < 50 ; i +=2) {
    if (i % 3 === 0 && i % 5 === 0 & i % 10 === 0) {
        console.log (`${i} adalah kelipatan 3,5 dan 10`)
    } else if ( i % 3 === 0) {
        console.log(`${i} ini adalah kelipatan 3`)
    } else  if ( i % 5 === 0 ) {
        console.log (`${i} ini adalah kelipatan 5`)
    } else if (i % 10 === 0) {
        console.log (`${i} ini adala kelipatan 10`)
    } else console.log (i)
}
console.log ("Pertambahan 5")

for (i = 0 ; i < 50 ; i +=5) {
    if (i % 3 === 0 && i % 5 === 0 & i % 10 === 0) {
        console.log (`${i} adalah kelipatan 3,5 dan 10`)
    } else if ( i % 3 === 0) {
        console.log(`${i} ini adalah kelipatan 3`)
    } else  if ( i % 5 === 0 ) {
        console.log (`${i} ini adalah kelipatan 5`)
    } else if (i % 10 === 0) {
        console.log (`${i} ini adala kelipatan 10`)
    } else console.log (i)
}

console.log("ini adalah pertambahan 9")
for (i = 0 ; i < 100 ; i +=9) {
    if (i % 3 === 0 && i % 5 === 0 & i % 10 === 0) {
        console.log (`${i} adalah kelipatan 3,5 dan 10`)
    } else if ( i % 3 === 0) {
        console.log(`${i} ini adalah kelipatan 3`)
    } else  if ( i % 5 === 0 ) {
        console.log (`${i} ini adalah kelipatan 5`)
    } else if (i % 10 === 0) {
        console.log (`${i} ini adala kelipatan 10`)
    } else console.log (i)
}

//Bintang Asterik

for (let i = 1 ; i < 10 ; i++) {
    let bintang = "";
    for (let j = 0 ; j <= i ; j++) {
        bintang += "*" ;
    }
    console.log(bintang)
}

for (let i = 1 ; i <= 10 ; i++) {
    let bintang = "" ;
    for (let j = 10 ; j >= i ; j--) {
        bintang += "*" ;
    }
    console.log (bintang)
}




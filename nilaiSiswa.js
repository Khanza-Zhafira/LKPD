// 1. variabel & tipe data
let umur = 17;
let nama = "Rani";
let lulus = true;
 
console.log(nama + " berumur " + umur + " tahun.");


let nilai = 85;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}


// Perulangan mencetak angka 1 sampai 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


function salam() {
    console.log("Selamat Datang");
}
salam();


function hitungRataRata(nilai1, nilai2, nilai3) {
    let total = nilai1 + nilai2 + nilai3;
    let rataRata = total / 3;
    return rataRata;
}

let rata = hitungRataRata(80, 90, 85);
console.log("Rata-rata = " + rata);


function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

let sisiPersegi = 5;
let luas = hitungLuasPersegi(sisiPersegi);
console.log("Luas persegi dengan sisi " + sisiPersegi + " adalah: " + luas);
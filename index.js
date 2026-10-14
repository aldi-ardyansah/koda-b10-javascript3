// Membuat Program Menggambar Bintang Lima Horizontal dan Lima Vertikal
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
        row = row + "*";
    }
    console.log(row);
}

// Membuat Program Menggambar Bintang Semakin ke Bawah Semakin Bertambah
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x <= y; x++) {
        row = row + "*";
    }
    console.log(row);
}
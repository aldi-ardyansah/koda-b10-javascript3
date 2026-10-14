// Program 1
for (let x = 0; x < 5; x++) {
    let row = "";
    for (let y = 0; y < 5; y++) {
        row += "* ";
    }
    console.log(row);
}

// Program 2
for (let y = 0; y < 5; y++) {
    let row = "";

    for (let x = 0; x <= y; x++) {
        row += "* ";
    }
    console.log(row);
}
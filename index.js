// Program 1
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
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

// Program 3
for (let x = 0; x < 5; x++) {
    let row = "";
    for (let y = 0; y < 4 - x; y++) {
        row += " ";
    }
    for (let z = 0; z <= x; z++) {
        row += "* ";
    }
    console.log(row);
}

// Program 4
for (let x = 0; x < 5; x++) {
    let row = "";
    for (let y = 0; y < 5; y++) {
        if (x === 0 || x === 4 || y === 0 || y === 4) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
# JavaScript 3

## Membuat Program Menggambar Bintang Lima Horizontal dan Lima Vertikal

### Flowchart
```mermaid
flowchart LR
    A((Start))
    B[y = 0]
    C{y < 5}
    D[row = #quot; #quot;]
    E[x = 0]
    F{x < 5}
    G[row += #quot;*#quot;]
    H[x++]
    I[/row/]
    J[y++]
    Z(((Stop)))

    A --> B
    B --> C
    C --True--> D
    D --> E
    E --> F
    F --True--> G
    G --> H
    H --> F
    F --False--> I
    C --False--> Z
    I --> J
    J --> C
```

### Kode
```
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
        row = row + "* ";
    }
    console.log(row);
}
```

## Membuat Program Menggambar Bintang Semakin ke Bawah Semakin Bertambah

### Flowchart
```mermaid
flowchart LR
    A((Start))
    B[y = 0]
    C{y < 5}
    D[row = #quot; #quot;]
    E[x = 0]
    F{x <= y}
    G[row += #quot;*#quot;]
    H[x++]
    I[/row/]
    J[y++]
    Z(((Stop)))

    A --> B
    B --> C
    C --True--> D
    D --> E
    E --> F
    F --True--> G
    G --> H
    H --> F
    F --False--> I
    C --False--> Z
    I --> J
    J --> C
```

### Kode
```
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x <= y; x++) {
        row = row + "* ";
    }
    console.log(row);
}
```
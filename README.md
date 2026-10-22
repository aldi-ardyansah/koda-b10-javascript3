# JavaScript 3

## Program 1

### Pola
```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Flowchart
```mermaid
flowchart LR
    A((start))
    B[y = 0]
    C{y < 5}
    D[row = #quot;#quot;]
    E[x = 0]
    F{x < 5}
    G[row += #quot;* #quot;]
    H[x++]
    I[/row/]
    J[y++]
    Z(((stop)))

    A --> B
    B --> C
    C -- true --> D
    D --> E
    E --> F
    F -- true --> G
    G --> H
    H --> F
    F -- false --> I
    I --> J
    J --> C
    C -- false --> Z
```

### Kode
```javascript
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
        row += "* ";
    }
    console.log(row);
}
```

## Program 2

### Pola
```
*
* *
* * *
* * * *
* * * * *
```

### Flowchart
```mermaid
flowchart LR
    A((start))
    B[y = 0]
    C{y < 5}
    D[row = #quot;#quot;]
    E[x = 0]
    F{x <= y}
    G[row += #quot;* #quot;]
    H[x++]
    I[/row/]
    J[y++]
    Z(((stop)))

    A --> B
    B --> C
    C -- true --> D
    D --> E
    E --> F
    F -- true --> G
    G --> H
    H --> F
    F -- false --> I
    I --> J
    J --> C
    C -- false --> Z
```

### Kode
```javascript
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x <= y; x++) {
        row += "* ";
    }
    console.log(row);
}
```

## Program 3

### Pola
```
    *
   * *
  * * *
 * * * *
* * * * *
```

### Flowchart
```mermaid
flowchart LR
    A((start))
    B[y = 0]
    C{y < 5}
    D[row = #quot;#quot;]
    E[x = 0]
    F{x < 5}
    G{x < 4 - y}
    H[row += #quot; #quot;]
    I[row += #quot;* #quot;]
    J[x++]
    K[/row/]
    L[y++]
    Z(((stop)))

    A --> B
    B --> C
    C -- true --> D
    D --> E
    E --> F
    F -- true --> G
    G -- true --> H
    G -- false --> I
    H --> J
    I --> J
    J --> F
    F -- false --> K
    K --> L
    L --> C
    C -- false --> Z
```

### Kode
```javascript
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
        if (x < 4 - y) {
            row += " ";
        } else {
            row += "* ";
        }
    }
    console.log(row);
}
```

## Program 4

### Pola
```
* * * * *
*       *
*       *
*       *
* * * * *
```

### Flowchart
```mermaid

flowchart LR
    A((start))
    B[y = 0]
    C{y < 5}
    D[row = #quot;#quot;]
    E[x = 0]
    F{x < 5}
    G{y == 0 #124;#124; y == 4 #124;#124; x == 0 #124;#124; x == 4}
    H[row += #quot;* #quot;]
    I[row += #quot;  #quot;]
    J[x++]
    K[/row/]
    L[y++]
    Z(((stop)))

    A --> B
    B --> C
    C -- true --> D
    D --> E
    E --> F
    F -- true --> G
    G -- true --> H
    G -- false --> I
    H --> J
    I --> J
    J --> F
    F -- false --> K
    K --> L
    L --> C
    C -- false --> Z
```

### Kode
```javascript
for (let y = 0; y < 5; y++) {
    let row = "";
    for (let x = 0; x < 5; x++) {
        if (y === 0 || y === 4 || x === 0 || x === 4) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
```
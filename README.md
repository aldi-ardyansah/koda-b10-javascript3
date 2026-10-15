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
    C --true--> D
    D --> E
    E --> F
    F --true--> G
    G --> H
    H --> F
    F --false--> I
    I --> J
    J --> C
    C --false--> Z
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
    C --true--> D
    D --> E
    E --> F
    F --true--> G
    G --> H
    H --> F
    F --false--> I
    I --> J
    J --> C
    C --false--> Z
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
    D["row = &quot;&quot;"]
    E[x = 0]
    F{x < 5}
    G{x < 4 - y}
    H["row += &quot; &quot;"]
    I["row += &quot;* &quot;"]
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
    B[x = 0]
    C{x < 5}
    D[row = #quot;#quot;]
    E[y = 0]
    F{y < 5}
    G{x == 0 #124;#124; x == 4 #124;#124; y == 0 #124;#124; y == 4}
    H[row += #quot;* #quot;]
    I[row += #quot;  #quot;]
    J[y++]
    K[/row/]
    L[x++]
    Z(((stop)))

    A --> B
    B --> C
    C --true--> D
    D --> E
    E --> F
    F --true--> G
    G --true--> H
    G --false--> I
    H --> J
    I --> J
    J --> F
    F --false--> K
    K --> L
    L --> C
    C --false--> Z
```

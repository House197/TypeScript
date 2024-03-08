# Sección 03. Tipos Básicos
## Temas
1. ¿Qué son los tipos de datos?
2. Una introducción a los diferentes tipos de datos que existen en TypeScript.
3. Booleanos.
4. Números.
5. Strings.
6. Tipo Any.
7. Arreglos.
8. Tuplas.
9. Enumeraciones
10. Retorno void
11. Null
12. Undefined

## Introducción
- TypeScript ofrece más tipos de datos que JavaScript.
- TypeScript permite:   
    - Crear nuevos tipos.
    - Interfaces.
    - Genéricos.
    - Tuplas.
- En JavaScript se tienen los tipos de datos:
    1. Primitivos.
        - String.
        - Number.
        - Boolean.
        - Symbol.
            - Se usan para garantizar que una propiedad en un objeto sea única.
                - Si se tienen objetos con la misma propiedad y se define un símbolo, esos boejtos a pesar de que se hayan creado exactamente igual, van a tener ese mismo símbolo que apunta al mismo espacio en memoria.
        - null y undefined
    2. Compuestos (objetos).
        - Objetos literales (diccionario).
        - Funciones.
        - Clases.
        - Arreglos.

## Inferir tipos y modo estricto
- TS intentará inferir el tipo todo el tiempo.
- Cuando se crea una constante TypeScript crea ese tipo, y ese tipo sabe qué valor tiene la variable.
    - Esto se debe porque la constante no se puede cambiar.

``` typescript
const a = 10;
// const a: 10

let b = 10;
// let b: number
```

- El tipo se datos se declara por medio de dos puntos después del nombre de la variable.
    - El tipo de dato se coloca después de los dos puntos.

``` typescript
const a: number = 10;

let b: number = 10;
```

- Si se declara una variable pero no se especifica el tipo de datos entonces TS le coloca any.

``` typescript
let b;
```

- TypeScript tiene como regla marcar error si en los argumentos de una función no se indica el tipo de dato.
    - Se deshabilita colocando false al campo noImplicitAny.

``` typescript
function sayHello(msg) {
    console.log(msg);
}
```

## Booleanos
``` typescript
(() => {
    let isSuperman: boolean = true;
    console.log({ isSuperman });
})()
```

## Números
- Se debe tener cuidado con el NaN, ya que es JS es considerado como un número.
- Entonces, TypeScript no indicará algún error si la variable es de tipo número.

# Buenas prácticas
- Definir siempre el tipo de datos de los argumentos de una función y el tipo de dato que retorna.
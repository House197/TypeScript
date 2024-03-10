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

## Strings, cadenas de caracteres
- Existen cuatro formas de crear un string.
- Al usar interpolation JS de fondo usa el método toString para convertir lo que se coloque entre {} a string.

``` typescript
(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;
})()
```

## Tipo Any y casteo
- No se debería usar.
- Su uso no permite saber los métodos que un determinado tipo contiene.

``` typescript
let avenger: any;
```

- En caso de usar any y saber querer manejar una variable como un determinado tipo, entonces se usa un cast.
    - Se usa la palabra reservada as.
    - Esto es un tipo de casteo que le indica a TS que trate a una variable como un tipo de dato específico.
    - Esto no cambia el tipo, solo le indica TS cómo tratar a la variable.

``` typescript
let avenger: any = 124;

avenger = 'Dr Strange';

console.log((avenger as string).chartAt(0));
```

- Segunda forma de casteo.
    - Se usa <> antes de la variable deseada para colocar el tipo de dato.

``` typescript
let avenger: any = 124;

console.log(<number>avenger.toFixed(2));
```

## Arrays - Arreglos
- Se especifica un arreglo de determinado tipo colocando el tipo de dato seguido por las llaves de arreglo.
- Si el arreglo tiene varios tipos de dato, entonces se especifican por medio de () y |.
``` typescript
const mixed: (string | number)[] = [2,3,4,5, '4'];
const numbers: number[] = [2,3,4];

numbers.forEach(number => number.toFixed(2));
```

- Al usar método específicos de los arreglos como forEach, TS es capaz de inferir los tipos de datos que se trabajan en el callback.

## Tuplas - Tuples
- Es propio de TS.
- Se pueden crear también tríos, cuartetos, etc.
- Se especifica por medio de [] y colocando los tipos de datos dentro de éste.
    - En otras palabras, permite definir el tipo de dato de cada posición. 
- Esto ayuda a no poder insertar otro tipo de datos en la posición deseada.
- Para JS esto se ve solo como un arreglo.

``` typescript
const hero: [string, number] = ['Dr Strange', 10];

const villians : [string, number, boolean] = ['Green Goblin', 10, false];
```

## Enum - Enumeraciones
- Es exclusivo de TS.
- La enumeración tiene como objetivo limitar las opciones que se tienen para un determinado propósito.
    - Permite dar significado semántico a valores, como el valor máximo y mínimo del volumen de sonido.
- Se usa la palabra reservada enum.
- En JS se ve como una función.

``` typescript
enum AudioLevel {
    min,
    mediuam,
    max
}

const currentAudio = AudioLevel.medium;
```
- Los valores que reciben las opciones del enum corresponde a su índice.
- Las enum son una forma de manejar números.
    - Es posible indicar que una variable es de tipo de la enum definida y asignarle un valor numérico que no está definido. No es posible hacer esto pero asignando un string.
    - Se pueden especificar los valores que pueden tener las opciones den enum.

``` typescript
enum AudioLevel {
    min = 1,
    medium, // su valor sería 2
    max = 10,
}

const currentAudio = AudioLevel.medium;
```

- Si se imprime el audioLevel se observa un objeto en la consola.
- El código en JS sería:

``` javascript
"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
})();
```

- En una enumeración se pueden repetir valores:

``` typescript
enum enumeracion {
    a = 10,
    b, // su valor sería 11, ya que le precede el valor 10.
    c = 9,
    d, // su valor sería 10, ya que le precede el valor 9.
}

const currentAudio = AudioLevel.medium;
```

## Void - Vacío
- Una función en JS que no tiene un tipo de dato implícito del valor que retorna entonces regresa undefined.
- Se especifica el tipo de datos que retorna una función después de los argumentos.

``` typescript
function callBatman():void {
    return;
}

const callSuperman = ():void => {

}
```
- null no es lo mismo que void, ya que null no es lo mismo que undefined.

## Never
- Una función que retorna never no puede tener un reachable endpoint.
- El never indica que no hay un punto alcanzable al finalizar la función.
- En otras palabras, indica que la función no debe terminar exitosamente. Entonces, al llamar a una función de tipo never indica que el código ya no va a seguir.
- Entonces, una función que tiene un tipo de dato never significa que va a terminar con un error.

``` typescript
const error = ( message: string ): never {
    throw new Error(message);
}

error('Auxilio');
```

## null y undefined
- En tsconfig.json se tiene el campo strictNullChecks, el cual al estar en true entonces no permite asignar undefined o null a una variable de tipo booleano.
- Se tienen 4 varlores permitidos a un valor booleano:
    - true.
    - false.
    - undefined.
    - null.
- Lo anterior ya no es permitido en TS.

# Buenas prácticas
- Definir siempre el tipo de datos de los argumentos de una función y el tipo de dato que retorna.
- Siempre es importante colocar el tipo de datos aunque se use const, ya que las propiedades de un objeto literal pueden cambiar.
- Colocar siempre ;, ya que de lo contrario TS va a tratar de inferir en dónde colocarlos.
- Se debe usar poco any.
    - Se refuerza esto con el campo noImplicitAny en true ubicado en tsconfig.json.
- Las constantes siempre deben estar inicializadas.
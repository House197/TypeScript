# Sección 04. Funciones y objetos
## Temas
1. Declaraciones básicas de funciones
2. Parámetros obligatorios
3. Parámetros opcionales
4. Parámetros por defecto
5. Parámetros REST
6. Tipo de datos "Function"

## Funciones básicas
- Al asignarle el valor retornado a una variable desde una función quien comanda es la función a la hora de determinar el tipo de datos.
``` typescript
function returnName():string {
    return hero;
}

const heroName = returnName();
```

## Parámetros obligatorios de las funciones
- TS no es infalible, ya que solo se asegura que cada cosa sea llamada con los tipos de datos que se esperan.

``` typescript
const fullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`;
}

let noName: any;

const name = fullName(noName, 'Stark');
```

## Parámetros por defecto
- Un parámetro requerido no puede seguir de un parámetro opcional.
- Se puede definir un parámetro como opcional usando ?.
- Un parámetro como defecto se define al darle un valor.

``` typescript
const fullName = (firstName: string, lastName?: string, uppder: boolean = false) => {
    if(upper){
        return `${firstName} ${lastName || '-----'}`.toUpperCase(); 
    }
    return `${firstName} ${lastName || '-----'}`;
}

const name = fullName('Tony', 'Stark');
```

## Parámetros REST (el resto de argumento)
- Se desea que solo el primero argumento se obligatorio, y los restantes sean opcionales.
- Se usa el operador rest seguido por el nombre del parámetro.

``` typescript
const fullName = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(' ')}`;
}

const name = fullName('Tony', 'Stark');
```

## Tipo función
- Para especificar que una variable va a aceptar la referencia de una función entonces se usa Function.
``` typescript
let myFunction: Function;
```
- Para que una variable acepte funciones de cierto tipo entonces se debe usar la notación de arrow function y especificar el tipo de dato que retorna.
    - Esto permite definir la firma de la función que se espera.
    - De igual forma se debe especificar el tipo de datos de los argumento que espera, en donde el nombre de éstos no importa.

``` typescript
const addNumbers = (a: number, b: number) => a+b;

let myFunction: (y: number, z:number) => number;

myFunction = addNumbers;

myFunction(1,2); // Acá TS infiere correctamente lo definido para addNumbers.
```

# Notas
- Todos los objetos se pueden pasar por referencia:
``` typescript
const addNumbers = (a: number, b: number) => a+b;

let myFunction;

myFunction = addNumbers;
```
- En JS todos los parámetros de una función son opcionales, por lo que son TS se obliga al usuario a colocarlos.
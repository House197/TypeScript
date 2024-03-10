# Sección 05. Objetos y tipos personalizados en TS.
## Temas
1. Objetos básicos
2. Crear objetos con tipos específicos
3. Crear métodos dentro de objetos
4. Tipos personalizados
5. Crear variables que soporten varios tipos a la vez.
6. Comprobar el tipo de un objeto.

## 1. Objetos básicos
- Al crear un objeto simple TypeScript muestra el tipo al dejar el cursor sobre la variable.
    - Se aprecia que el tipo es un objeto, más no el objeto con el valor dado:

``` typescript
let flash = {
    name: 'Barry',
}

// Tipo
let flash: {
    name: string;
}
```

## 2. Crear objetos con tipos específicos
- Se utliza type o interface para definir el tipo de dato de un objeto, o también se puede definir en línea.
- No importa el orden en que se defina el tipo de dato de las propiedades de un objeto a diferencia de las funciones.

``` typescript
let flash: {name: string, age: 30, powers: string[]} = {
    name: 'Barry',
    age: 30,
    powers: ['Velocidad'],
}
```

## 3. Métodos dentro de objetos

``` typescript
let flash: {name: string, age: 30, powers: string[], getName?: ()=>string} = {
    name: 'Barry',
    age: 30,
    powers: ['Velocidad'],
    getName(){
        return this.name;
    }
}
```

## 4. Tipos personalizados
- El problema con definición en línea es que la firma del objeto no se puede compartir con otros, sino que en cada uno se debe volver a definir el tipo.
- Se usa type para definir las reglas, tipos y restricciones de objetos, variables, argumentos, etc.
    - Cada elemento de type termina con ;.

``` typescript

type Hero = {
    name: string;
    age: 30;
    powers: string[];
    getName?: () => string;
}

let flash: Hero = {
    name: 'Barry',
    age: 30,
    powers: ['Velocidad'],
    getName(){
        return this.name;
    }
}

let superman: Hero = {
    name: 'Clark',
    age: 32,
    powers: ['Fuerza'],
    getName(){
        return this.name;
    }
}
```

- Si se desea ver el tipo de cada objeto creado en consola su tipo seguiría siendo Object y no Hero.
    - Que el tipo de dato personalizado aparezca en consolo sería posible solo con clases.

## Múltiples tipos personalizados (union)
- Se define que una variable puede ser de diferentes tipos usando union |.
- No es necesario envolver la definición de tipos entre paréntesis, pero ayuda a la legibilidad

``` typescript

type Hero = {
    name: string;
    age: 30;
    powers: string[];
    getName?: () => string;
}

let myCustomVariable: (string | number | Hero ) = 'Cui';

```

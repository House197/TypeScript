# Sección 07. Características de ES6 o JavaScript2015 disponibles a través de TypeScript
## Temas
1. Diferencia entre declarar variables con VAR y con LET
2. Uso de constantes
3. Plantillas literales
4. Funciones de flecha
5. Destructuración de objetos
6. Destructuración de Arreglos
7. Nuevo ciclo, el FOR OF
8. Conocer sobre la programación orientada a objetos
9. Clases

## 1. Variables definidas con LET
- Un objeto declarado como const especifica que la variable no se le puede asignar otro objeto, pero sus propiedades sí pueden cambiar.
    - Las constantes no permiten establecer nuevamente el valor al cual apuntan en la memoria.
    - Esto aplica para es6.
- Se recomienda siempre usar contantes hasta ver que una variable va a cambiar.

## 2. Destructuración de objetos.
- Es posible destructurar desde el argumento de la función.

``` typescript
const printAvenger = ({vision, ...rest}: Avenger) => console.log(vision, resto)
```

## 3. Destructuración de arreglos
``` typescript
const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];
const [ , ironman, ] = avengersArr;
console.log({ironman});
```

## 4. Ciclo - For of

``` typescript
type Avenger = {
    name: string,
    wapon: string;
}

const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
}

const capi: Avenger = {
    name: 'Capi',
    weapon: 'Escudo'
}

const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
}

const avengers: Avenger[] = [ironman, thor, capi];

for (const avenger of avengers) {

}
```

## 5. Clases en ES6
- En JS no se sabe el tipo de dato de los parámetros.
    - Lo que se puede hacer es asignar un valor por defecto.
- Las propiedades son ambiguas.
    - No es necesario colocarlas en el nivel superior de la clase y seguiría funcionando.
        - Esto da a lugar a que aparezcan propiedades de la nada debido a una falta de ortografía.
``` javascript
class Avenger {
    name;
    power;

    constructor(name = 'No name', power = 0) {
        this.name = name;
        this.power = power;
    }
}

class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power){
        super(tname, power);
        this.flying = true;
    }
}

const hulk = new Avenger('Hulk', 9001);
const falcon = new FlyingAvenger('Falcon', 50);

console.log(hulk)
```

# Notas
- El valor de THIS en una función de flecha mantiene puntero de la referncia al THIS antes de entrar a la función.
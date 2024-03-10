# Sección 08. Clases en TypeScript
## Temas
1. Crear clases en TypeScript
2. Constructores
3. Accesibilidad de las propiedades:
4. Públicas
5. Privadas
6. Protegidas
7. Métodos de las clases que pueden ser:
8. Públicos
9. Privados
10. Protegidos
11. Herencia
12. Llamar funciones del padre, desde los hijos
13. Getters 
14. Setters
15. Métodos y propiedades estáticas
16. Clases abstractas
17. Constructores privados.

## 1. Clases en TS
- Si no se define el nivel de acceso de una propiedad o método entonces por defecto es público.
``` typescript
class Avenger {
    private name: string;
    public team: string;
    public realName: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName: string) {
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
}

const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott');
```

### Forma corta de asignar propiedades
- En TypeScript se puede obviar la declaración de las propiedades.
``` typescript
class Avenger {
    static avgAge: number = 35;

    constructor(
        private name: string, 
        public team: string,
         public realName: string
    ) {}
}

const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott');
```

- Si se desea poder cambiar la propiedad estática entonces:
    - No se puede usar la palabra static en los argumentos del constructor.
``` typescript
class Avenger {
    static avgAge: number = 35;

    constructor(
        private name: string, 
        public team: string,
         public realName: string,
         avgAge: number = 55
    ) {
        Avenger.avgAge = avgAge;
    }
}

const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott');
```

## 2. Métodos públicos y privados
- En es6 no hay forma de definido métodos privados.
    - A pesar de que en TS se indica el error de que no se puede usar un método privado, el código correrá en JS.
``` typescript
class Avenger {
    static avgAge: number = 35;
    static getAvgName(){
        return this.name; // Va a retornar el nombre de la clase (Avenger), ya que es un método estático.
    }

    constructor(
        private name: string, 
        public team: string,
         public realName: string,
         avgAge: number = 55
    ) {
        Avenger.avgAge = avgAge;
    }

    public bio() {
        return `${this.name} ${this.team}`
    }
}

const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott');
```

## 3. Herencia, super y extends
- TypeScript de forma automática llama al constructor de la clase padre si la clase hija no presenta constructor.
- El llamado de super debe ocurrir tan pronto sea posible.
- Método private no son accesibles en las clases hija.  
    - Con protected sí es posible. Con Protected solo se puede acceder desde la clase padre y desde las clases hijas.

``` typescript
class Avenger {
    constructor(
        public name: string,
        public realName: string,
    ){
        console.log('Constructor Avenger llamado');
    }

    private getFullName() {
        return `${this.name} ${this.realName}`;
    }
}

class Xmen extends Avenger {
    constructor(
        name: string,
        realName: string,
        public isMutant: boolean
    ){
        super(name, realName)
    }
}

const wolverine: Xmen = new Avenger('Wolvering', 'Logan', true);
```

# Notas.
- Es buena práctica especificar el nivel de acceso de una propiedad de clase.
    - private.
    - public.
    - static.
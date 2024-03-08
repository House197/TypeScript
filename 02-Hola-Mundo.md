# Sección 02. Hola Mundo.
1. Crear archivo html.index.
2. Llenar archivo index.html por medio de atajo !.
3. Crear archivo app.ts.
``` typescript
const msg: string = 'Hola Mundo';
console.log(msg);
```
4. Referenciar archivo app.ts en index por medio de <script>.
5. Transpilar archivo app.ts por medio de comando tsc.
    - Se tuvo que hacer desde cmd, ya que en terminal de vs code no se reconoce tsc.

``` bash
tsc app.ts

o

tsc app
```
## 1. Archivo de configuración TSConfig.json
1. Se genera con el comando:
``` bash
tsc --init
```
- Comúnmente se terminan modificando solo los siguientes campos:
    - target.
    - archivos de salida.
    - nivel de estricto.
- Gracias a TSConfig solo basta con usar el comando tsc para transpilar todos los archivos de TypeScript válidos sin tener que ir uno por uno.

## 2. Modo Observador - Watch mode
- Permite transpilar cada que hay un cambio en algún archivo TypeScript.
1. Se habilita con:

``` bash
tsc --watch 
o
tsc -w
```
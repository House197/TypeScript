# Sección 06. Depuración de errores y el archivo tsconfig.json
## Temas
1. Aprenderemos el ¿por qué siempre compila a JavaScript?
2. Para que nos puede servir el archivo de configuración de TypeScript
3. Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
4. Removeremos todos los comentarios en nuestro archivo de producción.
5. Restringiremos al compilador que sólo vea ciertos archivos o carpetas
6. Crearemos un archivo final de salida
7. Aprenderemos a cambiar la version de JavaScript de salida

## Qué es el archivo tsconfig
- Las líneas comentadas en el archivo muestran los campos con el valor por defecto recomendado.
- Además de las opciones presentadas en el archivo se puede personalizar más, lo cual se puede ver en la página de TS,, en la sección de Compiler Options. https://www.typescriptlang.org/docs/handbook/tsconfig-json.html.
- Normalmente, al trabajar con un Framework la configuración de TS ya está definida.

## Depuración
- Si aparece un error en consola y especifica la línea del error, esta referencia se refiere al archivo JS y no al de TS, en donde el número de línea es diferentes debido a que en TS se tienen más líneas las cuales pueden ser debio a types u otras definiciones de tipo de dato.
- Para saber la línea de TS y no de JS en tsconfig.json se tiene el campo sourceMap.
    - Al descomentar este campo y dejarle su valor por defecto hace que se creen nuevos archivos de JS que terminan con .map.
    - Es una mapa a la representación del código en TS.
    - En los archivos de JS al final se aprecia una línea comentada, la cual le indica al navegador web sobre el path del sourceMap.
    - En la consola no se pueden colocar breakpoints a las líneas de TS, pero sí a las que son de JS al momento de debugear el archivo de TS.
- Los source maps solo deben usarse en desarrollo, en producción deben eliminarse.

## Remover comentarios de archivos JS
- Se eliminan los comentarios con el campo removeComments.
- Los comentarios de TS no importan, ya que esos archivos no son ejecutados por el navegador web.

## Incluir y excluir carpetas y/o archivos
- Se decide qué carpetas deben ser transpiladas o no a JS, p/e: node_modules
    - Por defecto node_modules ya se excluyen.
- Al final de tsconfig.json se coloca el campo "explude", el cual es un arreglo con los paths o archivos que se desean ignorar.

``` json
    },
    "exclude": [
        "objetos/*.ts",
        "node_modules2"
    ]
}
```

- De igual forma se puede usar el campo include.
    - Se debe tener cuidado con include, ya que se deben especificar todos los archivos que se van a usar.

## outFile, archivo de salida
- La configuración de juntar todos los archivos de JS en uno solo ya está hecha si se usa un Framework.
- En tsconfig se tienen los campos:
    - outFile, permite definir el nombre del archivo que se usará como salida.
    - outDir

``` json
"outFile": "./main.js"
"outDir": 
```
- Al especificar un archivo de salida ya se pueden borrar todos los archivos que no son de TS.
    - El mapero seguirá funcionando e indicando el archivo TS de donde viene.

# Notas
- Por defecto los módulos de Node están excluidos.
- Es mejor tener solo un archivo de salida, ya que requiere leer un solo segmento del disco duro (del servidor).
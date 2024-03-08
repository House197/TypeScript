# Sección 01. TypeScript
## JavaScript
- Le falta:
    - Tipado de variables.
    - Errores en tiempo de escritura (linter).
    - Auto completado dependiendo de las variables.
    - Clases y módulos (ES6).
    - Validación de objetos dentro de objetos.
    - Tipado de respuestas http.

## TypeScript
- Es un superset de JavaScript.
    - Es decir, expande funcionalidades de JavaScript.
- No corre directamente en la web, por lo que se transpila a JavaScript (se traduce).
- Permita utilizar características nuevas de JS y traducirlas al estándar de JavaScript deseado.
    - Permite escribir código moderno que será soportado por la mayoría de los navegadores web o plataforma objetivo.
    - Por ejemplo, de ESNext a ES5/6.

## Instalaciones necesarias
1. Node
2. VS Code.
    - Visual Studio Code no es un IDE, ya que no tiene un compilador propio.
        - Utiliza los comandos instalados para realizar la compilación respectiva del código.
    - Es un editor de código.
3. Google Chrome.
4. <a href='https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'>Iconos</a>

### Extensiones VS Code (opcionales)
1. Activatus Bar.
2. TypeScript Importer.

### Google Chrome
1. Json Viewer Awesome

### TypeScript
- Se puede instalar por proyecto, lo cual es lo más usual. Por otro lado, se instalará de forma global para este curso.
1. Instalar de forma global.
``` bash
npm install -g typescript
```
2. Verificar instalación con tsc (typescript compiler).
``` bash
tsc --version
```
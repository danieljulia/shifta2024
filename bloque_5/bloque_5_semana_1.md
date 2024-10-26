

# Bloque 5. Semana 1. Desarrollo FrontEnd con Node.js, npm y Parcel


Índice 
- Node.js y npm 
- Parcel (empaquetador de aplicaciones)
- Gestión de dependencias 
- Ejemplos usando librerias de npm


## Node.js y npm

- Conceptos básicos de Node.js

Node.js es un entorno de ejecución de JavaScript del lado del servidor. Esto significa que permite ejecutar código JavaScript fuera de un navegador web, por ejemplo en el servidor web o directamente en el terminal de nuestro pc.
Esto lo convierte en un lenguaje de programación muy potente, permitiendo crear aplicaciones usando solo javascript (tanto en el servidor como en el cliente)

Una vez instalado lo ejecutamos desde el terminal con la instrucción "node"

La instrucción para saber la versión es: 

```
node -v
```
(nos devolverá por ejemplo v20.7.0)

Podemos ejecutar un archivo en javascript de la siguiente manera 

```
node ejemplo.js 
```

El código en ejemplo.js puede ser para empezar 

```
console.log("Hola Mundo")
````

A diferencia del javascript que podemos usar en los navegadores node permite cargar "módulos" con opciones más avanzadas que normalmente no existen en el javascript del navegador. Por ejemplo el módulo fs nos permite realizar opciones con archivos (leer o escribir)
En el siguiente ejemplo vemos como el código lee un archivo externo (ejemplo.txt) y lo muestra en la consola. 

```
//cargamos este módulo
const fs = require('fs');

// leer el archivo ejemplo.txt
fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
````

Hay que remarcar el carácter asíncrono de node, es decir las lineas de código no se ejecutan necesariamente en orden lineal sino que cuando hay una petición asíncrona (como en el ejemplo al leer el archivo) esta parte de código se espera hasta haberla realizado.
Existen muchos módulos pensados para poder implementar aplicaciones complejas como http, path, os, etc



### El gestor de paquetes npm 


Una de las grandes ventajas de node es el gestor de paquetes aportados la comunidad, npm (node package manager)
Es una libreria inmensa (tiene más de 2 millones de paquetes) que no solo permite añadir esas funcionalidades sinó que también gestiona las dependencias (un paquete puede ser que dependa de otro, y se instalan todos automáticamente), nos permite gestionar las versiones y actualizaciones

Recursos
  - [Repositorio oficial](https://www.npmjs.com/)
  - [Documentación oficial de npm](https://docs.npmjs.com/)
  - [Guía de inicio rápido de npm](https://docs.npmjs.com/cli/v7/commands/npm)


### 2 Maneras de cargar nódulos 



MJS (Módulos ES)
Usando import y export 
Es la manera "moderna"
En package.json debemos tener "type":"module" o la extensión ser .mjs

CJS (CommonJS):
Usando require() y module.exports
Es la manera "antigua"
Se entiende que se usa este modo cuando la extensión es .cjs

### Otros ejemplos con npm

- Ejemplo con ascii art 
- Ejemplo con axios 


### Gestión de dependencias con npm

- Entendiendo package.json
  - [Guía de package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- Dependencias

### npx 

Npx ejecuta paquetes de npm sin necesidad de instalarlos

Ejemplo 

npx cowsay "Hello, I'm a cow"


## Parcel

Parcel es un empaquetador de aplicaciones 
- Introducción a Parcel
  - [Documentación oficial de Parcel](https://parceljs.org/docs/)
- Configuración básica y avanzada
- Optimización con Parcel

Para instalar parcel 

```
npm install --save-dev parcel
```

Luego en package.json podemos editar esta linea 
```
"start" : "parcel src/index.html"
````

De esta manera parcel generará el código "compilado" en /dist


## Recursos

Como crear una web app con Parcel
https://www.youtube.com/watch?v=R02ehdTzi3I&list=PPSV
How to Build a Web App with Parcel.js - Quick & EASY JavaScript Bundler!

Npm cheat sheet 
https://media.jfrog.com/wp-content/uploads/2021/08/23165237/JFrog_NPM_CheatSheet_V4.pdf


Introducción a node y npm
https://eloquentjavascript.net/20_node.html

Curso de node.js desde cero, midulive
https://www.youtube.com/watch?v=yB4n_K7dZV8
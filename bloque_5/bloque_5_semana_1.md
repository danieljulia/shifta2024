# Bloque 5. Semana 1. Desarrollo FrontEnd con Node.js, npm y Parcel


Índice 
- Node.js y npm 
- Parcel (empaquetador de aplicaciones)
- Gestión de dependencias 
- Ejemplos usando librerias de npm


## Node.js


**Node.js es un entorno de ejecución de JavaScript del lado del servidor**. Esto significa que permite ejecutar código JavaScript fuera de un navegador web, por ejemplo en el servidor web o directamente en el terminal de nuestro pc.
Esto lo convierte en un lenguaje de programación muy potente, permitiendo crear aplicaciones usando solo javascript (tanto en el servidor como en el cliente)

Una vez instalado lo ejecutamos desde el terminal con la instrucción "node"

Instalación de node:
https://nodejs.org/en/download
Al instalar node también se instala automáticamente npm

La instrucción para saber la versión es: 

```
node -v
```
(nos devolverá por ejemplo v20.7.0)

Una vez instalado podemos ejecutar un archivo en javascript de la siguiente manera 

```
node ejemplo.js 
```

El código en ejemplo.js puede ser para empezar 

```
console.log("Hola Mundo")
```

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
```

Hay que remarcar el carácter asíncrono de node, es decir las lineas de código no se ejecutan necesariamente en orden lineal sino que cuando hay una petición asíncrona (como en el ejemplo al leer el archivo) esta parte de código se espera hasta haberla realizado.
Existen muchos módulos pensados para poder implementar aplicaciones complejas como http, path, os, etc

Node se puede usar tanto en el frontend como en el backend.
Para utilizarlo en el frontend normalmente se usan herramientas (bundlers) que "traducen" el código javascript para que lo puedan entender los navegadores. Algunos de estos bundlers son WebPack, Vite, Parcel (que veremos más adelante), etc..

## nvm y nvm-windows

Existen herramientas para poder manejar varias versiones de node simultaneamente.
Una de ellas es nvm

````
nvm install 16.14.0     # Instala versión específica
nvm use 16.14.0        # Cambia a versión
nvm list              # Muestra versiones instaladas
````


## El gestor de paquetes npm 


Una de las grandes ventajas de node es el gestor de paquetes aportados la comunidad, npm (node package manager)
Es una libreria inmensa (tiene más de 2 millones de paquetes) que no solo permite añadir esas funcionalidades sinó que también gestiona las dependencias (un paquete puede ser que dependa de otro, y se instalan todos automáticamente), nos permite gestionar las versiones y actualizaciones

Recursos
  - [Repositorio oficial npm](https://www.npmjs.com/)
  - [Documentación oficial de npm](https://docs.npmjs.com/)
  - [Guía de inicio rápido de npm](https://docs.npmjs.com/cli/v7/commands/npm)

Los paquetes instalados se pueden gestionar automáticamente en un archivo llamado package.json 
Con este comando se crea este archivo

```
npm init 
```

Para instalar un package

```
npm install cowsay 
```

o

```
npm i cowsay 
```

para instalar globalmente (si lo queremos usar en multiples proyectos)

```
npm i -g cowsay 
```

Los packages se copian localmente en la carpeta node_modules
Si se instalan globalmente en una carpeta del sistema que podemos saber con este comando

```
npm root -g
```


Para desinstalar 

```
npm uninstall cowsay
```

## 2 Maneras de cargar nódulos 

Luego en nuestro código javascript existen dos maneras diferentes (e incompatibles) de cargar los módulos para poderlos utilizar

MJS (Módulos ES)
Usando import y export 
Es la manera "moderna"
En package.json debemos tener "type":"module" o la extensión debe ser .mjs

CJS (CommonJS):
Usando require() y module.exports
Es la manera "antigua"
Se entiende que se usa este modo cuando la extensión es .cjs


Para crear el archivo package.json 

```
npm init 
```

## Otros ejemplos con npm

- Ejemplo con ascii art (dibuja con carácteres de texto)
- Ejemplo con axios (busca en la wikipedia)
- Ejemplo con chalk
- Ejemplo cowsay
- Ejemplo con pdf-lib

## Gestión de dependencias con npm

- Entendiendo package.json

- [Guía de package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

>  Analizamos uno de los package.json de los ejemplos 


### Dependencias 

Una dependencia quiere decir que muchos de los módulos dependen de otros (para no repetir código) de manera que cuando instalamos uno, automáticamente se instalarán también todos de los cuales depende.

La ventaja de los packages también es que se van actualizando.
Siempre que queramos actualizar las librerias simplemente haremos 

``` js
npm update
```


## npx 

Npx ejecuta paquetes de npm sin necesidad de instalarlos
No todos los paquetes lo permiten

Ejemplo (lo podemos ejecutar en cualquier ruta de nuestro pc)

```
npx cowsay "Hello, I'm a cow"
```

Otro ejemplo que tenemos en este repositorio usa npx y una libreria para convertir los archivos md a formato pdf
Lo podéis encontrar en el directorio "tools" de este repositorio


## Parcel

Que pasa si queremos usar packages en un navegador (mezclado con html, css,etc)
Tenemos que utilizar algún empaquetador (bundler)
Para ello vamos a utilizar Parcel
Existen muchos otros como webpack, vite, etc. pero en este curso nos vamos a centrar en este por su simplicidad.

La ventaja que ofrecen estos entornos son las siguientes:

- Pueden minificar el código (más ligero)
- Traducen el código a javascript más convencional (compatible con todos los navegadores)
- Compila el código para poderlo publicar 
- Permite automatizar tareas


- Optimización con Parcel

Para instalar parcel 

```
npm install -g  parcel
```

Una vez instalado podemos ejecutar los siguientes comandos 

```
parcel index.html	Run a development server.
parcel build index.html	Bundle and optimize for production.
parcel watch index.html	Watch files and rebuild when changes are detected.
```

- Introducción a Parcel
  - [Documentación oficial de Parcel](https://parceljs.org/docs/)
- Configuración básica y avanzada
  https://parceljs.org/getting-started/webapp/



Cuidado! no sirve para ejecutar js sino para publicar webs en html/css/js

Build genera todo el código compilado en /dist 
Watch compila y muestra los cambios a la vez

En package.json podemos añadir scripts para gestionar parcel

```
{
  "name": "ejemplo_parcel",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "source": "index.html",
 "scripts": {
    "start": "parcel",    
    "build": "parcel build"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.9"
  }
}
```

Que se ejecutan por ejemplo así

```
npm run start
```

De esta manera parcel generará el código "compilado" en /dist


## Ejercicios propuestos


- A partir de alguno de los ejemplos proporcionados de librerias npm mejorarlos visualmente y que funcionen en un navegador, con parcel, por ejemplo en caso de la wikipedia que se pueda ver en la página, con estilos. O utilizando otra api de prueba como thedogapi o thecatapi.

- Utilizando la plantilla de un portfolio (html/css) crear una aplicación que lee los datos desde un archivo json


## Recursos

Como crear una web app con Parcel (recomendado)
https://www.youtube.com/watch?v=R02ehdTzi3I&list=PPSV
How to Build a Web App with Parcel.js - Quick & EASY JavaScript Bundler!

Npm cheat sheet 
https://media.jfrog.com/wp-content/uploads/2021/08/23165237/JFrog_NPM_CheatSheet_V4.pdf

Introducción a node y npm
https://eloquentjavascript.net/20_node.html

Curso de node.js desde cero, midulive
https://www.youtube.com/watch?v=yB4n_K7dZV8
# Semana 3. Aplicaciones Web Progresivas (PWA). Firebase para Almacenamiento y Base de Datos

Índice

- Single Page Applications
- Introducción a las PWA
- Progressive Web Applications. App manifest 
- Introducción a Firebase
- Creación de la base de datos del portfolio en firebase realtime database
- Firebase storage para almacenar archivos


## Introducción a las SPA

Una SPA es una aplicación web o sitio web que interactúa con el usuario cargando una única página HTML inicial y actualizando dinámicamente el contenido de esa página a medida que el usuario interactúa con la aplicación, en lugar de cargar páginas completas nuevas desde el servidor.

Caracteristicas:

- Navegación fluida
- Carga asíncrona
- Renderizado del lado del cliente
- Menor carga del servidor

En Vue se puede implementar utilizando vue-router

Ver ejemplo sencillo

## Introducción a las PWA

Las PWA (Progressive Web Apps) son aplicaciones web diseñadas para funcionar de manera similar a las aplicaciones nativas que instalas en tu teléfono o computadora, pero con ventajas únicas al estar basadas en tecnologías web. Combina lo mejor de ambos mundos: la accesibilidad de una página web y la experiencia de usuario de una app tradicional.

- Pueden funcionar sin conexión (offline)
- Se pueden instalar 
- Son responsivas
- Se actualizan automáticamente (como cualquier web)
- Pueden usar notificaciones push 
- Son seguras (https)  

Son más ligeras y menos costosas que una aplicación nativa
En contrapartida no tienen tanto rendimiento (sobre todo en juegos y aplicaciones con gráficos intensivos)

En realidad son una evolución de las páginas web tradicionales 

Video introductorio
https://www.youtube.com/watch?v=BByUknfLTuA&list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY




Si entramos en este ejemplo
https://airhorner.com/
y desconectamos la conexión de internet veremos que sigue funcionando.
Además la podemos instalar en el móvil con su propio icono
https://airhorner.com/manifest.json


> Ver ejemplo sencillo 

## Progressive Web Applications. App manifest 

El manifest es un archivo json con el nombre manifest.json que hay que poner en la raiz de la web

Ejemplo

```
{
  "short_name": "Portfolio",
  "name": "Portfolio shifta",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

En el inspector del navegador podemos ver todos sus campos (en la sección application)

Existen heramientas que permiten crear el archivo manifest 
https://progressier.com/pwa-manifest-generator
https://app-manifest.firebaseapp.com/

Para saber más:
https://web.dev/articles/add-manifest


> Ejemplo. Convertimos nuestro portfolio en una PWA añadiendo en manifest.

## Workbox

Uno de los temas más interesantes de las PWA es que pueden funcionar (opcionalmente) off-line. Esto se consigue mediante los "service workers"
Existe una libreria de google llamada Workbox que facilita mucho esta funcionalidad.

https://developer.chrome.com/docs/workbox

Es un package de npm
npm install --save-dev workbox-cli


workbox --version

workbox wizard

workbox generateSW

Nota: Otra manera de lanzar un servidor local con npx
npx http-server -p 8080


## Introducción a Firebase

Firestore es un servicio de base de datos de Google en la nube que forma parte de Firebase 
Una de sus ventajas es que tiene un ajuste de escala automático (adapta automáticamente los recursos a lo que necesita)
Es gratuito si el uso es limitado

https://firebase.google.com/

Video introducción a Firebase 
https://www.youtube.com/watch?v=p9pgI3Mg-So&t=3s

Realtime database es otro servicio de datos con otras características (mas pensado para optimizar la velocidad)

Storage sirve para almacenar archivos. 

Debemos crear una cuenta y activar los servicios Firestore database (para almacenar nuestros datos en json) y Storage (para poder subir las imágenes y archivos descargables).



## Creación de la base de datos del portfolio en firebase realtime database


Implementar portfolio con firebase 

ver ejemplo firestore_simple


## Backend de escritura 

Una de las ventajas de firestore es que no solo sirve para "leer" datos sino que también nos permite "escribir"
Una aplicación natural teniendo en cuenta esto seria crear un backoffice para gestionar los datos del portfolio.

## Firebase storage para almacenar archivos

Como almacenar archivos y conceptos más avanzados 

## Otros aspectos de firebase

- Permite gestionar la autenticación
- Permite acceso a estadísticas de uso

## Ejercicio

A partir de nuestra maquetación del  portfolio crear una SPA de manera que además de la página de inicio tenga la página única de cada proyecto y una pàgina de contacto.
Vincularlo con la base de datos en firebase (u otro sistema equivalente) de manera que podamos editar los proyectos ahi. 
Convertirla en PWA creando un manifest.json.



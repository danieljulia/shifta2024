# Semana 3. Aplicaciones Web Progresivas (PWA). Firebase para Almacenamiento y Base de Datos

Índice

- Introducción a las PWA
- Progressive Web Applications. App manifest 
- Introducción a Firebase
- Creación de la base de datos del portfolio en firebase realtime database
- Firebase storage para almacenar archivos

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


Ejemplo sencillo 

Si entramos en este ejemplo
https://airhorner.com/
y desconectamos la conexión de internet veremos que sigue funcionando.
Además la podemos instalar en el móvil con su propio icono
https://airhorner.com/manifest.json


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

Existen heramientas que permiten crear el archivo manifest 
https://progressier.com/pwa-manifest-generator
https://app-manifest.firebaseapp.com/

Para saber más:
https://web.dev/articles/add-manifest


> Ejemplo. Convertimos nuestro portfolio en una PWA añadiendo en manifest.

## Introducción a Firebase

Firestore es un servicio de base de datos de Google en la nube que forma parte de Firebase 
Una de sus ventajas es que tiene un ajuste de escala automático (adapta automáticamente los recursos a lo que necesita)
Es gratuito si el uso es limitado

Realtime database es otro servicio de datos con otras características (mas pensado para optimizar la velocidad)

Storage sirve para almacenar archivos. 

Debemos crear una cuenta y activar los servicios Firestore database (para almacenar nuestros datos en json) y Storage (para poder subir las imágenes y archivos descargables).



## Creación de la base de datos del portfolio en firebase realtime database


Implementar portfolio con firebase 

## Backend de escritura 

Una de las ventajas de firestore es que no solo sirve para "leer" datos sino que también nos permite "escribir"
Una aplicación natural teniendo en cuenta esto seria crear un backoffice para gestionar los datos del portfolio.

## Firebase storage para almacenar archivos

Como almacenar archivos y conceptos más avanzados 

## Otros aspectos de firebase

- Permite gestionar la autenticación
- Permite acceso a estadísticas de uso

## Ejercicios

> A partir de nuestro portfolio SPA, PWA, vincularlo con la base de datos en firebase de manera que podamos editar los proyectos ahi.


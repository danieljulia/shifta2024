# Semana 2. Frameworks FrontEnd: Ventajas, Instalación, Comparación y Ejemplos con Vue.js

Índice

- Ventajas respecto javascript puro
- Instalación y configuración
- Ejemplos básicos
- Rutas, componentes, axios, etc
- Ejemplo con el portfolio
- Vue.js vs React
- Referencias

## Ventajas respecto javascript puro

Vue.js y otros frameworks frontend ofrecen ventajas significativas sobre JavaScript puro al simplificar y optimizar el desarrollo de aplicaciones web complejas. Proporcionan una estructura organizada mediante componentes reutilizables, lo que mejora la mantenibilidad y escalabilidad del código. Además, incorporan sistemas de reactividad automática (como el enlace de datos bidireccional en Vue.js) que sincronizan la interfaz con los datos subyacentes sin necesidad de manipular manualmente el DOM, reduciendo errores y código repetitivo. Estos frameworks también incluyen herramientas integradas para gestión de estado, enrutamiento y optimización de rendimiento, junto con un ecosistema de librerías y convenciones que aceleran el desarrollo. A diferencia del "Vanila JavaScript", que requiere soluciones personalizadas para cada funcionalidad, los frameworks estandarizan buenas prácticas y permiten enfocarse en la lógica de negocio, aumentando la productividad y facilitando la colaboración en equipos.

La inversión en el estudio de este tipo de frameworks vale la pena, ya que una vez aprendidos la programación de aplicaciones en javascript se vuelve mucho más sencilla y ágil.

Básicamente existen 3 frameworks

- React
- Angular
- Vue.js  

Enseñaremos aquí Vue.js porqué es el más sencillo y una vez conoces este es mucho más fácil aprender el resto.

Entre las ventajas más importantes de una aplicación desarrollada con esta filosofia podemos encontrar:

- Solo se renderiza lo necesario de manera que mejora mucho el rendimiento de las aplicaciones
- Permiten dividir la interfaz en componentes reutilizables y mantenibles
- Facilita el desarrollo en equipo al poder trabajar en componentes diferentes
- Promueve la reutilización de código
- Gran cantidad de librerías y componentes disponibles
- Estructura más organizada y predecible
- Código más limpio y modular

## Posibles maneras de usar Vue

https://vuejs.org/guide/extras/ways-of-using-vue

- Como un script "standalone"
- Para componentes
- Single-Page Applications (SPA)
- Fullstack / SSR (Server Side Rendering)
- Aplicaciones móviles con Ionic Vue
- Aplicaciones de desktop con Electron

## Instalación y configuración de Vue


Introducción a Vue
Video en el botón "por qué Vue.js"
https://es.vuejs.org/

Instalación de vue 
https://es.vuejs.org/v2/guide/installation

Básicamente existen 3 maneras

- Como script (CDN)

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```

- Como package npm

```
npm install vue
```


- Usando comandos en el terminal

Introducción a vue3 de su creador
https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview



## Ejemplos básicos

En /vue_sencillo tenemos un ejemplo que usa la libreria de vue en cdn
No es necesario compilarla y funciona directamente 
Analizar esta aplicación

Se ejecuta con 

```
parcel index.html
```


## Ejemplo con parcel

En vue_parcel tenemos una plantilla montada para funcionar con parcel un poco más compleja y usando el package npm.
Se debe de compilar y el resultado se guarda en dist 
Podemos ver los cambios en tiempo real

## Ejemplo de portfolio con vue 

En este ejemplo vemos una plantilla de un portfolio sencillo que se alimenta de un archivo json con los contenidos


## Componentes 

Ver ejemplo de portfolio con componentes para el listado de proyectos



## Crear aplicacion usando linea de comandos 

En la linea de comandos vue permite crear un esqueleto completo con funcionalidades extra respondiendo una serie de preguntas
Es un entorno muy completo, por ejemplo para crear SPA

```
npm create vue@latest
```

## Curso de Vue 2 (la mayoria de conceptos sirven para Vue 3)

https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/


## Ejercicio propuesto con Vue

Crear un prototipo de una página implementando alguna parte "reactiva" de vuestro trabajo final.

## Vue.js vs React


Aunque la filosofia de base de Vue.js y React es la misma tienen algunas diferencias

Vue.js fue creado por Evan You, un ex ingeniero de Google, con el objetivo de tomar lo mejor de Angular y React
React fue desarrollado por Facebook como una biblioteca de interfaz de usuario
Vue tiene una curva de aprendizaje más suave y es considerado más fácil de aprender para principiantes

Renderizado del Lado del Servidor

React usa Next.js  
Vue usa Nuxt.js

## Referencias 

Introducción y documentación oficial de vue 

https://vuejs.org/guide/introduction.html

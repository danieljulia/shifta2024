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


## Instalación y configuración de Vue


Introducción a Vue
Video en el botón "por qué Vue.js"
https://es.vuejs.org/

Instalación de vue 
https://es.vuejs.org/v2/guide/installation


https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/


La manera mas sencilla es con un CDN

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```

También se puede instalar con npm
https://es.vuejs.org/v2/guide/installation



## Ejemplos básicos

En /vue_sencillo tenemos un ejemplo que usa la librearia de vue en cdn
No es necesario compilarla y funciona directamente 

## Ejemplo con parcel

En vue_parcel tenemos una plantilla montada para funcionar con parcel.
Se debe de compilar y el resultado se guarda en dist 
Podemos ver los cambios en tiempo real

## Ejemplo de portfolio con vue 

En este ejemplo vemos una plantilla de un portfolio sencillo que se alimenta de un archivo json con los contenidos


## Componentes 

> ejemplo basico 

> convertir todo list en componentes  

> convertir portfolio a componentes  

## Rutas 

## crear aplicacion usando linea de comandos 

En la linea de comandos vue permite crear un esqueleto completo con funcionalidades extra

vue create my-router-project


Cuando queremos crear SPA (Single Page Aplications) es muy importante gestionar las urls

Vue Router: A Tutorial for Vue 3

https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/


npm i vue-router@next


> ejemplo sencillo de SPA con rutas

## Axios 

Podemos usar axios para leer archivos externos (apis json por ejemplo)

## Curso de Vue 

https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/


## Ejercicios

Desarrollar el caso del portfolio en vue como una SPA

## Vue.js vs React


Aunque la filosofia de base de Vue.js y React es lña misma tienen algunas diferencias

Vue.js fue creado por Evan You, un ex ingeniero de Google, con el objetivo de tomar lo mejor de Angular y React
React fue desarrollado por Facebook como una biblioteca de interfaz de usuario
Vue tiene una curva de aprendizaje más suave y es considerado más fácil de aprender para principiantes

Renderizado del Lado del Servidor

React usa Next.js  
Vue usa Nuxt.js

## Referencias 

Introducción a vue 

https://vuejs.org/guide/introduction.html

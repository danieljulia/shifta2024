

# Bloque 1. Semana 2. Herramientas avanzadas

## 1. Control de versiones: Git / GitHub


### El terminal del sistema operativo

El terminal (command prompt) es una interfaz de línea de comandos (CLI) que permite interactuar directamente con el sistema operativo y gestionar archivos, automatizar tareas, instalar software, controlar procesos y facilitar el desarrollo de software ofreciendo control total sobre el sistema y acceso a funciones avanzadas.

Existen versiones más avanzadas del terminal "por defecto" en el sistema operativo, por ejemplo PowerShell en Windows o iTerm en Mac.


###  Introducción a Git: conceptos básicos, instalación y configuración

Git es un sistema de versiones que funciona sobretodo en el terminal, aunque también hay aplicaciones gráficas.

Git es un sistema de control de versiones distribuido que se utiliza para rastrear y gestionar los cambios en el código fuente de un proyecto. Fue creado por Linus Torvalds en 2005 para gestionar el desarrollo del kernel de Linux, y desde entonces se ha convertido en la herramienta estándar para gestionar proyectos de software.

Instalación de git 
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Una vez instalado podemos probar si funciona 

````
git 
````
Este comando nos mostrará las ordenes disponibles. En general si escribimos una instrucción en el terminal sin especificar la orden (parámetros) nos mostrará las ordenes posibles.

```
git -v 
````

Nos muestra la versión instalada

### ¿Para qué sirve Git?

- Control de versiones: Git permite llevar un registro de los cambios realizados en los archivos a lo largo del tiempo. Esto facilita volver a versiones anteriores del código si es necesario, o comparar cambios.

- Colaboración: Con Git, múltiples desarrolladores pueden trabajar en el mismo proyecto simultáneamente, sin interferir con el trabajo de los demás. Cada contribuidor puede trabajar en su propia "rama" o "branch", y luego fusionar los cambios con el proyecto principal.

- Desarrollo distribuido: Al ser distribuido, cada desarrollador tiene una copia completa del historial del proyecto en su máquina. Esto significa que se puede trabajar sin estar conectado a un servidor central, lo que también mejora la robustez frente a fallos.

- Integración con plataformas como GitHub, GitLab o Bitbucket: Git se integra fácilmente con estas plataformas, lo que facilita compartir el código, gestionar colaboraciones y realizar revisiones de código.

### Clonar y trabajar con un repositorio 

Vamos a clonar el repositorio con el material del curso
Nos situamos en algún directorio en nuestro ordenador usando el terminal y escribimos la siguiente instrucción

```
git clone https://github.com/danieljulia/shifta2024.git
```
Esto ejemplo clona  el repositorio que está en https://github.com/danieljulia/shifta2024

De la misma manera podemos clonar cualquier repositorio publico.

Una vez clonada verificamos que tenemos los archivos del repositorio.
Entonces podemos empezar a trabajar y hacer cosas como

- Añadir ficheros al "staging" con git add <nombre archivo>
- Hacer un commit de los cambios, añadir los cambios al repositorio con git commit -m 'un comentario'

También podriamos dsubir los cambios al repositorio remoto con git push, pero para ello debemos registrar una clave en la configuración de github.


### Claves ssh en github 

Para poder publicar (hacer push) un proyecto en github ( y otros repositorios similares) necesitaremos crear una clave en nuestro ordenador y subir la clave pública en la configuración de github.

En la web de github está explicado como hacerlo

Como crear claves ssh en mi pc
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Como añadir la clave pública en github
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

### Creando nuestro repositorio y publicando contenido

Podemos crear un repositorio nuevo en Github
Una vez creado con un nombre en la web, creamos un directorio en nuestro ordenador y empezar a generar archivos para el repositorio

(instrucciones del web de github)

```
echo "# shifta2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:danieljulia/shifta2024.git
git push -u origin main
````

O si los archivos ya existian 
```
git remote add origin git@github.com:danieljulia/shifta2024.git
git branch -M main
git push -u origin main
````

- Introducción a Git: conceptos básicos, instalación y configuración
- Comandos esenciales:
  - `init`
  - `add`
  - `commit`
  - `push`
  - `pull`
  - `clone`
  
- Branching y merging:
  - Crear ramas
  - Cambiar entre ramas
  - Fusionar ramas
- Resolución de conflictos
- Uso de GitHub:
  - Creación de repositorios
  - Fork
  - Pull requests
- Colaboración en equipo mediante GitHub
- Alternativas a Github, Gitlab, Bitbucket, Sourceforge, etc

### Repositorio de este curso 

Este curso está publicado en github.
https://github.com/danieljulia/shifta2024


## 2. Entorno/Herramientas de desarrollo: localhost, inspector del navegador

### Configuración de localhost
- MAMP
https://www.mamp.info/en/mac/
- XAMPP
https://www.apachefriends.org/es/index.html
- Soluciones nativas del sistema
Apache está incluido en el sistema en ordenadores Mac y Linux.
WSL en Windows
https://www.youtube.com/watch?v=L4f1XHrSJEg


## 3. Editores de código (IDE), inspector del navegador


### Editores de código (IDE)
- Comparativa entre:
  - Visual Studio Code
  - Sublime Text
  - WebStorm
- Instalación y configuración básica
- Extensiones útiles para desarrollo web


Descargar Visual Studio Code
https://code.visualstudio.com/download

### Inspector del navegador
- Herramientas de desarrollador en Chrome, Firefox, y Safari
- Pestañas del inspector
- Depuración de HTML, CSS y JavaScript
- Análisis de rendimiento y red

Video recomendado, Overview de las chrome dev tools
https://developer.chrome.com/docs/devtools/overview


## 4. Principios básicos de accesibilidad y web semántica, SEO, desde el punto de vista de la programación

Estos 3 conceptos están muy relacionados. Si una web está bien hecha a nivel de SEO posiblemente también es accesible y utiliza etiquetado semántico.
Veamos primero estos 3 conceptos por separado. 


### Accesibilidad 

La accesibilidad web se refiere a la práctica de diseñar y desarrollar sitios web que puedan ser utilizados por personas con diversas capacidades, incluidas aquellas con discapacidades visuales, auditivas, cognitivas, de movilidad u otras limitaciones. Esto implica que las páginas web sean navegables con herramientas como lectores de pantalla, teclados alternativos, o subtítulos para el contenido multimedia. La accesibilidad es importante para asegurar que todas las personas puedan interactuar y obtener información en la web de manera equitativa, sin barreras.
En resumen tenemos que asegurarnos que nuestra web se puede navegar con el teclado (sin usar el ratón o el trackpad) y que los elementos están suficientemente etiquetados con texto (para que en el caso de los usuarios que no pueden ver puedan entender cada parte del documento)
El organismo w3.org ( World Wide Web Consortium) cita 10 pasos sencillos para hacer una web accesible 

https://www.w3.org/WAI/quicktips/

1. Imágenes y animaciones: Usa el atributo "alt" para describir la función de cada elemento visual.

2. Mapas de imagen: Emplea mapas del lado del cliente y proporciona texto para los puntos de acceso.

3. Multimedia: Proporciona subtítulos y transcripciones de audio, así como descripciones para los videos.

4. Enlaces de hipertexto: Usa texto que tenga sentido fuera de contexto. Por ejemplo, evita expresiones como "haz clic aquí".

5. Organización de la página: Utiliza encabezados, listas y una estructura consistente. Emplea CSS para el diseño y el estilo cuando sea posible.

6. Gráficos y diagramas: Resume el contenido o utiliza el atributo "longdesc" para descripciones más detalladas.

7. Scripts, applets y complementos: Proporciona contenido alternativo en caso de que las funciones activas no sean accesibles o no estén soportadas.

8. Marcos (frames): Usa el elemento "noframes" y títulos significativos.

9. Tablas: Organiza el contenido de forma que pueda leerse línea por línea de manera coherente. Proporciona un resumen.

10. Revisa tu trabajo: Valida el contenido. Utiliza herramientas, listas de verificación y guías

### Herramientas que podemos utilizar 

- Análisis de accesibilidad
https://www.accessibilitychecker.org/


- Validador de html y css
https://validator.w3.org/

- Listado de herramientas 
http://www.w3.org/TR/WCAG


Existen 3 niveles de accesibilidad
- Nivel A (Básico)
- Nivel AA (intermedio)
- Nivel AAA (avanzado)

Los atributos ARIA (Accessible Rich Internet Applications) son etiquetasa de html que proporcionan información adicional a tecnologías de asistencia, como lectores de pantalla. Esto permite a las personas con discapacidades navegar y comprender interfaces dinámicas o complejas, como menús interactivos o controles personalizados, que no siempre son accesibles con HTML estándar. Los atributos ARIA incluyen roles (para definir el tipo de elemento), propiedades (para describir su contexto) y estados (para indicar condiciones como “expandido” o “seleccionado”), mejorando así la navegación y usabilidad en entornos web.

Video: Curso de accesibilidad (6 videos cortos)
https://www.youtube.com/watch?v=wY8hC5wCNIE


### Web semántica
Se refiere al uso apropiado de etiquetas HTML5 de manera que se pueda entender su función dentro de todo el documento.
Es posible construir un web entero usando solo etiquetas ```<div>``` pero una web semántica debe usar etiquetas con sentido como ``` header, nav, main, article, section, aside, footer, figure,``` etc 
Usar HTML semántico mejora la accesibilidad, facilita la indexación por motores de búsqueda y da una estructura más lógica al contenido de una página.



### SEO desde el punto de vista de la programación

El SEO (Search Engine Optimization) es el conjunto de estrategias y técnicas que se aplican en un sitio web para mejorar su  posicionamiento en los resultados de búsqueda orgánicos (no pagados) de motores como Google. El objetivo principal del SEO es aumentar el tráfico de calidad al sitio, logrando que aparezca en los primeros lugares cuando los usuarios busquen términos relacionados con su contenido o servicios.

Existen 4 aspectos a tratar para conseguir un buen posicionamiento

1 - A nivel técnico etiquetar correctamente el html con encabezados, títulos explicativos, urls claras y descriptivas, etiquetas meta y en general HTML semántico.
2 - Un contenido de calidad siempre será más relevante para los buscadores 
3 - A nivel técnico que la web se cargue rápido y las imágenes estén optimizadas, que el diseño responsive funcione bien, beneficia también al SEO
4 - Finalmente es bueno aumentar la reputación del sitio consiguiendo menciones de calidad (links) en otros sitios web

Un sitemap (un document xml que describa la estructura de la web) también es bueno para posicionar nuestra web. 

### Herramientas 

- Google search console (para optimizar a partir de un sitemap)
https://search.google.com/search-console/about
- Google analytics (analitica web)
https://developers.google.com/analytics?hl=es
- Seoptimer (herramienta para auditar webs)
https://www.seoptimer.com/




## 5. IA para la generación de código / GitHub Copilot

### Introducción a la IA en el desarrollo de software

### GitHub Copilot
- Instalación y configuración
- Uso básico y avanzado
- Mejores prácticas y consideraciones éticas

### Otras herramientas de IA para programación
- Chatgpt, Claude

### Límites y potencial de la IA en la generación de código



## Tarea 

Preparar entorno de desarrollo (MAMP, …) + Git/GitHub


# Bloque 1. Semana 2. Herramientas avanzadas

## 1. Terminal y Control de versiones: Git / GitHub


## El terminal del sistema operativo

El terminal es una interfaz de línea de comandos (CLI) que permite interactuar directamente con el sistema operativo y gestionar archivos, automatizar tareas, instalar software, controlar procesos y facilitar el desarrollo de software ofreciendo control total sobre el sistema y acceso a funciones avanzadas.
Git es un sistema de versiones que funciona sobretodo en el terminal, aunque también hay aplicaciones gráficas.


##  Introducción a Git: conceptos básicos, instalación y configuración

Git es un sistema de control de versiones distribuido que se utiliza para rastrear y gestionar los cambios en el código fuente de un proyecto. Fue creado por Linus Torvalds en 2005 para gestionar el desarrollo del kernel de Linux, y desde entonces se ha convertido en la herramienta estándar para gestionar proyectos de software.

### ¿Para qué sirve Git?

- Control de versiones: Git permite llevar un registro de los cambios realizados en los archivos a lo largo del tiempo. Esto facilita volver a versiones anteriores del código si es necesario, o comparar cambios.

- Colaboración: Con Git, múltiples desarrolladores pueden trabajar en el mismo proyecto simultáneamente, sin interferir con el trabajo de los demás. Cada contribuidor puede trabajar en su propia "rama" o "branch", y luego fusionar los cambios con el proyecto principal.

- Desarrollo distribuido: Al ser distribuido, cada desarrollador tiene una copia completa del historial del proyecto en su máquina. Esto significa que se puede trabajar sin estar conectado a un servidor central, lo que también mejora la robustez frente a fallos.

- Integración con plataformas como GitHub, GitLab o Bitbucket: Git se integra fácilmente con estas plataformas, lo que facilita compartir el código, gestionar colaboraciones y realizar revisiones de código.

## Claves ssh en github 

Para poder publicar un proyecto en github ( y otros repositorios similares) necesitaremos crear una clave en nuestro ordenador y subir la clave pública en la configuración de github.

En la web de github está explicado como hacerlo

Como crear claves ssh en mi pc
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Como añadir la clave pública en github
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

## Creando nuestro repositorio y publicando contenido

Una vez hemos creado un repositorio en Github nos sugieren una serie de pasos para poder subir archivos desde nuestro ordenador:

…or create a new repository on the command line

echo "# shifta2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:danieljulia/shifta2024.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin git@github.com:danieljulia/shifta2024.git
git branch -M main
git push -u origin main


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





## 2. Entorno/Herramientas de desarrollo

### Configuración de localhost
- XAMPP
https://www.apachefriends.org/es/index.html
- MAMP
https://www.mamp.info/en/mac/
- Soluciones nativas del sistema
Apache está incluido en el sistema en ordenadores Mac y Linux.
WSL en Windows
https://www.youtube.com/watch?v=L4f1XHrSJEg

### Inspector del navegador
- Herramientas de desarrollador en Chrome, Firefox, y Safari
- Depuración de HTML, CSS y JavaScript
- Análisis de rendimiento y red

### Editores de código (IDE)
- Comparativa entre:
  - Visual Studio Code
  - Sublime Text
  - WebStorm
- Instalación y configuración básica
- Extensiones útiles para desarrollo web

## 3. Web-App (PWA) vs App nativa (iOS, Android)

### Conceptos básicos de PWA

Una PWA (Progressive Web App) o Aplicación Web Progresiva es una aplicación web que combina lo mejor de las páginas web y las aplicaciones móviles nativas. Son sitios web que utilizan tecnologías modernas para ofrecer una experiencia de usuario similar a la de una app tradicional en dispositivos móviles, pero accesible desde el navegador.
Estas tecnologias son
- Html+js+css. Una PWA utiliza tecnologias web estándard 
- https. Una PWA debe funcionar obligatoriamente en un dominio seguro.
- Service Workers. Pueden interceptar las peticiones al servidor de manera que por ejemplo pueden funcionar sin conexión
- Notificaciones push. 
Las notificaciones push permiten que las aplicaciones envíen mensajes a los usuarios, incluso si la PWA no está abierta en ese momento.
- Manifiesto. El archivo manifest.json define cómo se verá y funcionará la PWA cuando se instale en un dispositivo. 
Este archivo incluye información como:
--Nombre de la aplicación.
--Ícono que se mostrará en la pantalla de inicio (instalable)
--URL de inicio de la app.
--Modo de pantalla completa o si se verá en una ventana de navegador.
- Pueden utilizar datos localmente, ya sea con localstorage o incluso con indexedDB (una base de datos completa en el navegador)

En general es una buena idea desarrollar las PWA usando frameworks como React, Angular o Vue.js 

Existe una libreria llamada Workbox (google) que simplifica el trabajo con Service Workers y la Cache API

### Comparativa PWA vs apps nativas
- Ventajas y desventajas


## 4. Publicación

### FTP
- Conceptos básicos y configuración
- Clientes FTP populares

### Terminal/SSH
- Comandos básicos de Unix
- Conexión y gestión de servidores remotos

### Hosting 

### Netlify
- Despliegue continuo desde GitHub
- Configuración de dominios personalizados
- Funciones de Netlify

## 5. Principios básicos de accesibilidad, web semántica y SEO

### Accesibilidad
- Pautas WCAG
- Uso correcto de etiquetas HTML y atributos ARIA
- Pruebas de accesibilidad

### Web semántica
- Uso apropiado de etiquetas HTML5
- Microdata y Schema.org

### SEO desde el punto de vista de la programación
- Optimización de la estructura HTML
- Mejora de la velocidad de carga
- URLs amigables y sitemap

## 6. IA para la generación de código / GitHub Copilot

### Introducción a la IA en el desarrollo de software

### GitHub Copilot
- Instalación y configuración
- Uso básico y avanzado
- Mejores prácticas y consideraciones éticas

### Otras herramientas de IA para programación
- Chatgpt, Claude

### Límites y potencial de la IA en la generación de código

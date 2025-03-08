# Semana 4. Gestión y Despliegue de Aplicaciones Web: Netlify, Git y Métricas de Uso

Índice 

- Gestión de servidores web
- Publicar usando Netlify 
- Integración con git
- Despliegue continuo
- Métricas de uso


## Gestión de servidores web

Puede ser infraestructura física (on-premise) o en la nube (cloud computing)  

Sistemas operativos más común: Linux 
Servidor web: Apache, Nginx,IIS
Bases de datos: mysql
Lenguajes de programación: php, node

Servicios que pueden ofrecer las empresas de alojamiento web (hosting)

- Backups automáticos
- Gestión de dominios  
- Acceso por ftp/sftp/ssh  
- Implementación de certificados SSL/TLS  
- Control de accesos y autenticación  
- Implementación de caché  
- Análisis de registros (logs)
- Estrategias de backup
- Instalación de aplicaciones web y cms

Algunas opciones gratuitas 

https://www.heroku.com/  
https://vercel.com/  
https://railway.com/
https://www.netlify.com/


## Publicar usando Netlify 


Como publicar en netlify 
https://www.netlify.com/

### Deploy manual
Simplemente subimos una carpeta con todos los archivos. Es importante que el principal se llame index.html. Netlify publicará la web en una dirección provisional del tipo https://spiffy-concha-5999a1.netlify.app/

Luego podemos asignar un dominio real en lugar del provisional.

### Deploy a través de git

Un ejemplo de pasos a seguir
- Crear un repositorio en github
- Descargar el repositorio y crear la aplicación web 
- En netlify crear un nuevo proyecto "add new site" importando desde github 
https://app.netlify.com/start
En este momento nos pedirá autenticarnos y podremos ver todos los proyectos que tenemos en github
- Configuramos si queremos alguna de las opciones y ya podemos hacer deploy
- La ventaja ahora es que simplemente haciendo push en nuestro entorno local se publicará automáticamente la web en la dirección pública.


## Publicación usando github

Git pages 
Solo está pensado para páginas html estáticas
El repositorio debe ser público
Se puede asignar a un dominio
GitHub Pages soporta Jekyll, un generador de sitios estáticos
Puedes usar Markdown (.md) o HTML (.html)


## Despliegue continuo

Esta metodologia está pensado para funcionar junto con metodologias ágiles

- Método de trabajo flexible sin un calendario preestablecido
- Divide proyectos en partes pequeñas
- Permite cambios rápidos
- Enfocado en satisfacer al cliente


El despliegue Continuo consiste en

- Automatización de lanzamiento de software
- Tests automáticos del código
- Actualización directa cuando todo funciona
- Reduce errores humanos
- Acelera la entrega de mejoras

Permite subir cambios a la web de forma inmediata y segura

Ambos se basan en la mejora constante, la flexibilidad y que están centrados en los resultados

## Métricas de uso

Métricas de Rendimiento

- Tiempo de carga inicial
- Tiempo de renderizado
- etc

Podemos usar 

- Chrome DevTools
- Lighthouse (pagespeed, google)

Herramientas de Medición

- Google Analytics
- Firebase Analytics



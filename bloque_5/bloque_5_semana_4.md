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

Documentación de GitHub Pages
https://docs.github.com/en/pages


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

Existen básicamente 2 métricos de uso en una web, las técnicas (de rendimiento) y las de experiencia de usuario (visitas)

### Métricas técnicas (de Rendimiento)

- Tiempo que tarda el contenido principal en mostrarse, Largest Contentful Paint (LCP)
- Retraso en la respuesta tras la primera interacción del usuario, First Input Delay (FID)
- Tiempo de renderizado

Podemos usar 

- El inspector del navegador nos da muchas información (Chrome DevTools)
- Google Lighthouse
- PageSpeed Insights

###  Métricas de Experiencia de Usuario (UX Metrics)

- Tasa de conversión y rebote (Porcentaje de usuarios que completan una acción clave)
- Bounce Rate (Tasa de rebote): Porcentaje de usuarios que abandonan la página sin interactuar
- Accesibilidad 


Herramientas de Medición

- Google Analytics
- Firebase Analytics
- Mapas de calor y grabaciones de usuarios

## Ejemplo de integración con google analytics 

- Crear una cuenta en google analytics 
- Usando una cuenta de google entrar en https://analytics.google.com/ y crear una cuenta 
- Después de crear la cuenta crear una propiedad
- Asignarle una zona horaria, moneda, estáticas 
- Seleccionar web como plataforma 
- Copiar el código siguiendo las instrucciones 

El código será de este estilo, donde XXX és el codigo de seguimiento

```
<script async src="https://www.googletagmanager.com/gtag/js?id=XXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'XXX');
</script>
```

Después de activarlo podemos comprobar que se están capturando los datos

## Ejercicios

Como ejercicio para esta parte del temario se sugiere añadir analítica web al ejemplo de la práctica anterior (vuejs) y publicarlo utilizando netlify. 
Se debe entregar un documento especificando la url de la web y una captura de pantalla del panel de google analytics mostrando información en tiempo real del sitio durante una visita.




Siguiendo la estructura de parcel:

https://parceljs.org/getting-started/webapp/

parcel src/index.html
parcel build src/index.html

En este ejemplo se carga json de dos maneras

1- De manera estática en el código 
import jsonData from './data.json';
2- Dinámicamente 

Tenemos que seguir estos pasos previamente

- Crear un directorio static donde pondremos los archivos, json, imágenes etc
- Añadir un archivo .parcelrc en la raiz con este contenido
{
  "extends": "@parcel/config-default",
  "reporters": ["...", "parcel-reporter-static-files-copy"]
}
- Instalar este package 
npm install --save-dev parcel-reporter-static-files-copy

Luego en el código podemos leer el archivo json

 fetch('/prueba.json')  --> lo va a buscar a static/prueba.json
      .then(response => response.json())
      .then(data => {
        console.log("he cargado el json",data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
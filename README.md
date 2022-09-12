# Multi Whatsapp
Simple libreria que permite insertar un botón de whatsapp en un sitio web

# Boton Whatsapp

#### Installation
 La instalación o uso de la libreria depende del siguiente script, el cual debe ser puesto dentro de la etiqueta head

```sh
<script src="https://plastibucket.s3.us-east-2.amazonaws.com/btn-wpp/btn-wpp.min.js"></script>
```
### Primeros pasos
 Se hara uso de la función windows.onload acompañada de una arrow function que se llamara "WppBtn" y quedará así
 
 ```sh
 window.onload=()=> new WppBtn()
 ```
 Dentro de la función WppBtn() debemos pasar un array de objetos con un objeto que tenga una propiedad de "number" con un valor que es el codigo del pais del numero seguido de dicho numero a agregar y deberia quedar así
  ## Solo un numero
  ```sh
 window.onload=()=> new WppBtn([{
 number: 57XXXXXXXXXX
 }])
 ```
## Dos o más numeros

Para dentro del objeto en el primer parametro se pueden pasar 3 items:
 - El primero que es el 'number' se pasa el codigo del pais, seguido del numero
 - el segundo que es el 'title' sera el titulo que aparece como nombre del boton para referenciar el numero que se pone
 - el tercero que es el 'message' es el mensaje predeterminado que tendra al redireccionar a WhatsApp


por cada numero que se desee agregar se separa los objetos por comas (,) y se ingresa el nuveo numero

  ```sh
 window.onload=()=> new WppBtn([{
  number: 57XXXXXXXXXX,
  title: 'Ventas',
  message: 'Hola, quiero saber más de los productos'
 },{
     number: 57XXXXXXXXXXX,
     title: 'Soporte',
     message: 'Hola, tengo un problema'
 }
 ])
 ```
 
En esta funcion se puede pasar un segundo parametro que es de la configuración 
Seguidos del ejemplo anterior se agregan las configuraciónes en un objeto directamente  donde tenemos 4 items dentro de este
 - El primero que es el 'title' se pasa el titulo que quiere que tenga el menu de botones de whatsapp
 - el segundo que es el 'subtitle' es un subtitulo que se vera más abajo y pequeño que el titulo
 - el tercero que es el 'x' es la posisción en la pantalla que tendra en x
 - el cuarto que es el 'y' es la posisción en la pantalla que tendra en y
 


  ```sh
  
 window.onload=()=> new WppBtn([{
  number: 57XXXXXXXXXX,
  title: 'Ventas',
  message: 'Hola, quiero saber más de los productos'
 },{
     number: 57XXXXXXXXXXX,
     title: 'Soporte',
     message: 'Hola, tengo un problema'
 }],
 {
    title: 'Comunicate con nosotros',
	subtitle: 'Nuestros canales son:',
	x: 200,
	y: 200
 }
 )
 ```
**Plastimedia Studio**

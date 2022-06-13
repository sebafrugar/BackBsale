# BsaleBack

<p> Proyecto creado para Bsale el cual consta de un listado de productos 
  proporcionado por la API facilitada por Bsale </p>

## Link Proyecto

https://sebafrugar.github.io/BsaleFront/index.html


## Contenido 

<p> Proyecto realizado en dos partes Back end en repositorio que se encuentra en este repositorio en el cual se trabajo con Mysql,
Express, NodeJs, cors y Front end que se encuentra en https://github.com/sebafrugar/BsaleFront.git y se trabajo con HTML , CSS , Vanilla JS y bootstrap</p>
  
## Clonacion de proyecto

<p> pasos a seguir :</p>
1. Primero utilizar el comando `git clone` y pogar el siguiente link https://github.com/sebafrugar/BackBsale.git </br>
2. Luego ingresar a la carpeta donde se clono el proyecto y utilizar el comando `npm i` para descargar las dependencias del proyecto


## Back End (creado en otro repo https://github.com/sebafrugar/BackBsale.git)

1. se crea un keep-alive con un refresco de 4.9 segundos para no perder la conexion con el servidor en el cual se crea la conexion a la base de datos proporcionada y se realiza un setTimeout de una funcion get_next el cual obtiene todos los datos de la base de datos. </br>
2. se crea controlador para obtener todos los productos de la base de datos. </br>
3. se crea una routa para poder obtener una peticion get y traer datos desde la BD. </br>
4. el archivo **server.js** tiene la conexion con  express , cors y la coneccion de la app con las rutas y el puerto determinado. </br>


## Front End (creado en otro repo https://github.com/sebafrugar/BsaleFront.git)

1. se crean archivos HTML para distintas vistas con los articulos filtrados por categoria.</br>
2. Se crean archivos JS vinculados a las vistas HTML para generar filtros de busquedas y mostrar los articulos mediante map y filtros (finciones nativas de JS).</br>
3. se crea un archivo CSS general con funcion de colores para la vista activa de articulos.</br>


## Principales Funcionalidades 

1. muestra de todos los productos disponibles en la tienda.</br>
2. buscador el cual filtra productos segun busqueda.</br>
3. filtros de ordenamiento por abecedario , por valor (de menor a mayor y de mayor a menor) y por stock.</br>
4. links los cuales muestran solo una categoria de productos.</br>


## Mas proyectos y trabajos en

<h4> https://github.com/sebafrugar </h4>

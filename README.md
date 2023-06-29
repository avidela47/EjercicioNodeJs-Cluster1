![Ariel Videla](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTC5T3nYPK13ied5NeDCSVZZnGifQkVLaiBLIMR5acCn34SLZrI)

# Ejercicio Node Js

## Consigna:
Crear una API REST que permita manejar librerías y los libros asociados a cada una de
las librerías. Utilizar Node.Js Express, Sequelize y Passport como la infraestructura para crear
el servicio. Usar SQLlite como motor de base de datos.

### Paso a paso creacion de la API y sus archivos.

dependencias en el package.json instalando con NPM
```sh
    "axios", "express", "jsonwebtoken", "lodash", "passport", "passport-jwt", "sequelize", "sqlite3", "nodemon"
```

app.js
```sh
Es nuestro main en el cual comienza y termina nustra aplicacon y en el realizamos las distintas configuraciones para que corra nustra API, como el puerto, los Middleware, las rutas y el server.
```

config.js
```sh
La creación de un archivo dbconfig en un proyecto de Sequelize se realiza con el propósito de almacenar la configuración de conexión a la base de datos, facilitando la gestión de diferentes entornos y simplificando la configuración de la aplicación.
```

routes
```sh
Se encuantran los archivos en el cual por medio de sus rutas de pueden realizar los diferentes metodos para realizar la CRUD a traves de las peticiones, estos archivos requieren de los controllers.
```

controlers
```sh
Separar la lógica de negocio de las rutas que definen las rutas y los puntos de acceso de la aplicación, ademas Facilitar la reutilización de la lógica de negocio en diferentes rutas y Simplificar el mantenimiento y la escalabilidad del proyecto. Estos archivos requieren de los services.
```

services
```sh
Los archivos en services se crean para manejar solicitudes y realiza acciones en funcion de esas solicitudes, se pueden crear rutas con parametros y require los providers.
```

providers
```sh
Los archivos providers se crean para implementar middleware en una aplicación y definir una funcion para ejecutar cada soliitud que llegue a la aplicacion y require los models.
```

middleware
```sh
Los archivos middleware son una función que se ejecuta entre la solicitud y la respuesta en una aplicación.
Tambien se usan para el manejo de errores, validar datos, antes de llegar a las definiciones de las rutas.
```

models
```sh
Los archivos models se utilizan para representar y manejar la estructura de los datos en el lado del servidor, facilitando la organización, validación y manipulación de los datos. Esto permite una mayor separación de responsabilidades y reutilización de código en el proyecto.
```
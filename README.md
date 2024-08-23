# DISCLAIMER
En la pantalla inicial que pide ingreso de sesión se admiten dos combinaciones:

### ADMIN:
    -Usuario: Admin 
    -Password: 12345

### User:
    -Usuario: pepe 
    -Password: 12345

# Librerias usadas: 
    React-DOM-Router

Decidí hacer una aplicación al estilo de Slack simulando un espacio de trabajo. Cuenta con un sistema de usuarios de diferencia entre un usuario normal y un usuario administrativo, el cual puede crear canales a diferencia del usuario normal. El proyecto guarda los datos en el local storage, pero cuenta con un estado inicial que esta definido en /src/datos/entornos.json donde tenemos la estructura básica para luego renderizar todo en la aplicación. Un entorno está definido principalmente por su propiedad nombre y un id y asi mismo contiene yuna lista de los canales y cada canal contiene una lista de mensajes.
Me enfrenté con dificultades al momento de manejar los updates del estado de los entornos, por ejemplo al momento de agregar o borrar un canal nuevo o mandar mensajes y esto lo pude solucionar investigando sobre como hacer deep clones del objeto entorno para evitar corromper el estado.
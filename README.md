# Servicio Envío de Emails.

Servicio que brinda la posibilidad de enviar emails a otro destinatario. Con el propocito de validar la identidad del usuario a ingresar.
(Este servicio complementa al proyecto "proyecto-sena", ya que su funcionalidad  ayuda en la validación de registro de usuarios.)

Características:
- HOST: https://service-email.vercel.app/
- HTTP REQUEST: POST
- PARAMS: /{email}/{codigo-Verificacion}

Uso:
- Genera una clave de acceso de tu cuenta de gmail, y cambia el user y la pass en el archivo configEmails.js.
![image](https://github.com/BrayanCardona12/service-email/assets/114372854/aa5e3285-2ee1-47c9-843e-242ae948db6d)

- Después, haz la siguiente solicitud y comprueba si todo va bien:

POST https://service-email.vercel.app/{email}/{codigo-verificacion}


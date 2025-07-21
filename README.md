# NodeApp

NodeApp es una aplicación backend construida con Node.js que implementa autenticación, gestión de productos y utiliza Firebase para almacenamiento y configuración de entorno.

## Características

-   Autenticación de usuarios (registro, login, protección de rutas)
-   Gestión de productos (CRUD)
-   Middleware de autenticación y manejo de rutas no encontradas
-   Integración con Firebase
-   Estructura modular y escalable

## Estructura del Proyecto

```
package.json
src/
  index.js
  config/
    environment.js
    firebase.js
  controllers/
    auth.controller.js
    product.controller.js
  middleware/
    authenticate.js
    notFound.js
  models/
    auth.model.js
    product.model.js
  routes/
    auth.router.js
    index.js
    product.router.js
  service/
    auth.service.js
    index.js
    product.service.js
  utils/
    constants.js
    encrypt.js
```

## Instalación

## Variables de entorno

Debes crear y configurar las siguientes variables de entorno en `src/config/environment.js` o usando un archivo `.env` si lo prefieres:

-   `PORT`: Puerto en el que se ejecuta la aplicación (por defecto 3000)
-   `FIREBASE_API_KEY`: API Key de tu proyecto Firebase
-   `FIREBASE_AUTH_DOMAIN`: Auth domain de Firebase
-   `FIREBASE_PROJECT_ID`: ID de tu proyecto Firebase
-   `FIREBASE_STORAGE_BUCKET`: Storage bucket de Firebase
-   `FIREBASE_MESSAGING_SENDER_ID`: Sender ID de Firebase
-   `FIREBASE_APP_ID`: App ID de Firebase
-   `JWT_SECRET`: Clave secreta para firmar los tokens JWT

Ejemplo:

```env
PORT=3000
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
JWT_SECRET=tu_jwt_secret
```

1. Clona el repositorio:
    ```bash
    git clone https://github.com/celestedelossantos/nodeapp.git
    cd nodeapp
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Configura las variables de entorno en `src/config/environment.js`.
2. Inicia la aplicación:
    ```bash
    npm start
    ```
3. La API estará disponible en `http://localhost:3000` (o el puerto configurado).

## Scripts disponibles

-   `npm start`: Inicia la aplicación
-   `npm run dev`: Inicia la aplicación en modo desarrollo (si está configurado)

## Endpoints principales

-   `/api/auth`: Rutas de autenticación (registro, login)
-   `/api/products`: Rutas para gestión de productos

## Licencia

MIT

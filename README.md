# Sistema de inventario de producto

Esta es un aplicativo de sistema de inventario en la cual esta echo con VITE como un simulador de fronted, vanilla para javascript en su estado puro, tailwindcss para los estilos de css, json.server como simulador de una base de datos
 <img width="400" height="400" border-radius="20px" alt="image" src="https://github.com/user-attachments/assets/3a598058-5618-4a5b-b728-9c476bf7e199" />
 <img width="400" height="400" border-radius="20px"  alt="image" src="https://github.com/user-attachments/assets/e67ff5dc-9e3e-4624-bcc6-d533638c480d" />
 <img  width="400" height="400" border-radius="20px" alt="image" src="https://github.com/user-attachments/assets/83236e04-c8c2-4a7a-9b51-aaa0884b6d28" />
<img  width="400" height="400" border-radius="20px" alt="image" src="https://github.com/user-attachments/assets/0a686582-80ff-4874-828d-fb70e8e1c902" />

## Como instalar el proyecto
```txt
## isntalar node modules
npm install 
## instalar jsons.server
npm install json-server --save-dev
## ejecutar el proyecto
npm rum dev
## ejecutar db.json
npx json-server db.json --port 3000
```
# Arbol del proyecto
```txt
Spa_inventario/
├── src/
│   ├── components/
│   │   ├── card_inventario.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   └── modal_inventario.js
│   ├── css/
│   │   └── index.css
│   ├── img/
│   ├── js/
│   │   ├── api.js
│   │   └── validaciones.js
│   └── main.js
├── .gitignore
├── db.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```
### 🔑 Credenciales de Acceso (Pruebas)

Para probar las funciones de administrador en el inventario del Spa, utiliza los siguientes datos de inicio de sesión:


| Rol | Correo Electrónico (Email) | Contraseña (Password) |
| :--- | :--- | :--- |
| **Administrador** | `Admin@admin.com` | `123456` |

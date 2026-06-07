# 🛒 Sistema de Inventario de Productos - Spa

Este es un aplicativo de sistema de inventario diseñado como un simulador de Frontend. Permite gestionar el flujo de productos (entradas, salidas y stock) de manera dinámica y eficiente.

## 🚀 Tecnologías Utilizadas

* **Vite:** Herramienta de construcción y entorno de desarrollo rápido.
* **JavaScript Vanilla:** Lógica del lado del cliente escrita en JavaScript puro.
* **Tailwind CSS:** Framework de diseño para estilos modernos y responsivos.
* **JSON Server:** Simulador de base de datos local a través de una API REST.

---

## 📸 Capturas de Pantalla

<p align="center">
  <img width="400" height="400" border-radius="20" alt="Vista Login" src="https://github.com/user-attachments/assets/3a598058-5618-4a5b-b728-9c476bf7e199" style="border-radius: 20px; margin: 5px;" />
  <img width="45%" alt="Vista Dashboard" src="https://github.com/user-attachments/assets/e67ff5dc-9e3e-4624-bcc6-d533638c480d" style="border-radius: 20px; margin: 5px;" />
</p>
<p align="center">
  <img width="400" height="400" border-radius="20" alt="Gestión de Inventario" src="https://github.com/user-attachments/assets/83236e04-c8c2-4a7a-9b51-aaa0884b6d28" style="border-radius: 20px; margin: 5px;" />
  <img width="400" height="400" border-radius="20" alt="Reportes de Productos" src="https://github.com/user-attachments/assets/0a686582-80ff-4874-828d-fb70e8e1c902" style="border-radius: 20px; margin: 5px;" />
</p>

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Instalar las dependencias de Node
```bash
npm install
```

### 2. Instalar el servidor de base de datos simulada
```bash
npm install json-server --save-dev
```

### 3. Iniciar el servidor de datos (JSON Server)
Ejecuta la base de datos local en el puerto 3000:
```bash
npx json-server --watch db.json --port 3000
```

### 4. Ejecutar el entorno de desarrollo (Frontend)
Abre otra pestaña en tu terminal y levanta la aplicación con Vite:
```bash
npm run dev
```

---

## 🔑 Credenciales de Acceso (Pruebas)

Utiliza los siguientes datos de inicio de sesión para evaluar las características del sistema:


| Rol | Correo Electrónico (Email) | Contraseña (Password) |
| :--- | :--- | :--- |
| **Administrador** | `Admin@admin.com` | `123456` |

---

## 📊 Módulos del Dashboard y Permisos de Usuario

El sistema cuenta con un panel principal (Dashboard) dividido en 5 elementos clave:
1. **Dashboard:** Vista general con estadísticas de inventario.
2. **Productos:** Catálogo general e información de stock.
3. **Entrada:** Registro e ingreso de nueva mercancía.
4. **Salida:** Control de egresos y productos retirados.
5. **Usuarios:** Administración del personal del sistema.

### Matriz de Permisos


| Módulo / Vista | Administrador 👑 | Usuario / Cliente 👤 |
| :--- | :---: | :---: |
| **1. Dashboard** | ✅ Permitido | ❌ Restringido |
| **2. Productos** | ✅ Permitido | ✅ Permitido |
| **3. Entrada** | ✅ Permitido | ✅ Permitido |
| **4. Salida** | ✅ Permitido | ✅ Permitido |
| **5. Usuarios** | ✅ Permitido | ✅ Permitido |

---

## 📁 Estructura del Proyecto

```text
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

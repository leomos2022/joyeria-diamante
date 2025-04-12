💎 Joyería Diamante - Plataforma E-commerce


📌 Descripción
Joyería Diamante es una plataforma e-commerce moderna para una joyería de lujo, desarrollada con tecnologías web estándar y conectada a una base de datos en la nube de Azure.

✨ Características Principales
🖼️ Galería interactiva de productos con filtros

📝 Sistema de membresía con formulario de registro

📱 Diseño completamente responsive

🔒 Conexión segura a Azure SQL Database

📧 Formulario de contacto funcional

🛠️ Tecnologías Utilizadas
Frontend	Backend	Base de Datos	DevOps
HTML5	PHP	Azure SQL	Azure Pipelines
CSS3			GitHub Actions
JavaScript			
🚀 Instalación Local
Clonar el repositorio:

bash
Copy
git clone https://github.com/leomos2022/joyeria-diamante.git
cd joyeria-diamante
Configurar entorno:

Instalar XAMPP o WAMP

Colocar los archivos en la carpeta htdocs (XAMPP) o www (WAMP)

Configurar base de datos:

Importar el archivo database.sql a tu gestor de bases de datos

Configurar las credenciales en membresia.php

🌐 Despliegue en Azure
Crear un App Service en Azure

Configurar conexión a Azure SQL Database

Configurar las variables de entorno:

bash
Copy
DB_SERVER="tcp:tu-servidor.database.windows.net,1433"
DB_NAME="JoyeriaDB"
DB_USER="usuario"
DB_PASS="contraseña"
📂 Estructura del Proyecto
Copy
joyeria-diamante/
├── index.html          # Página principal
├── style.css           # Estilos principales
├── script.js           # Lógica de frontend
├── membresia.php       # Procesamiento de formularios
├── images/             # Assets visuales
│   ├── productos/
│   └── logos/
└── README.md           # Este archivo
🤝 Cómo Contribuir
Haz fork del proyecto

Crea una rama con tu feature (git checkout -b feature/awesome-feature)

Haz commit de tus cambios (git commit -m 'Add awesome feature')

Haz push a la rama (git push origin feature/awesome-feature)

Abre un Pull Request

📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.

💻 Desarrollado por [Tu Nombre]
📧 Contacto: tu@email.com
🔗 Sitio web: joyeriadiamante.com

© 2023 Joyería Diamante - Todos los derechos reservados

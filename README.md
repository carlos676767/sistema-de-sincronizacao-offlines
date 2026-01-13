

# 📦 Documentación del Flujo de Backup y Sincronización

Este documento describe en detalle el funcionamiento del sistema automatizado de **backup, compactación y sincronización de archivos**, desarrollado en **Node.js**, cuyo objetivo es garantizar la **disponibilidad, integridad y acceso seguro a los datos** mediante un servidor remoto y un bot integrado.

---

## 🧠 Visión General

El sistema está compuesto por un **script local automatizado** que:

- Monitorea las unidades de disco disponibles.
- Realiza copias de seguridad periódicas cada **12 horas**.
- Compacta los datos en archivos **ZIP**.
- Sincroniza los backups con un **servidor remoto** cuando hay conexión a internet.
- Permite el acceso seguro a los archivos mediante **tokens temporales**, enviados por un bot.

Este enfoque asegura tolerancia a fallos, ahorro de espacio y control de acceso.

---

## 🔄 Flujo General del Proceso

```text
Inicio del Script
      ↓
Mapeo de Unidades
      ↓
Backup Local (12h)
      ↓
Compactación ZIP
      ↓
Limpieza Local
      ↓
Verificación de Internet
      ↓
Upload al Servidor
      ↓
Generación de URL
      ↓
Acceso vía Bot (Token)


---

🖥️ Fase 1 — Proceso Local (Sin Internet)

🔹 Inicialización

El script se ejecuta automáticamente.

Se validan permisos y rutas necesarias.


🔹 Mapeo de Unidades

Detecta todas las unidades de disco disponibles en el sistema.

Crea la estructura de carpetas requerida para el almacenamiento local.


🔹 Copia de Seguridad

Frecuencia: cada 12 horas.

Se copian los archivos originales hacia una carpeta de storage local.


🔹 Compactación

Los archivos almacenados se convierten en un único archivo .ZIP.

Se asegura una compresión eficiente para reducir el uso de espacio.


🔹 Limpieza Local

Tras la creación del ZIP:

Se eliminan los archivos temporales del storage.

Solo se conserva el archivo comprimido.




---

🌐 Fase 2 — Transmisión y Sincronización

🔹 Verificación de Conectividad

El sistema valida el acceso a internet antes de transmitir:

Sin conexión

El proceso entra en estado de espera.

Se reintenta automáticamente en el siguiente ciclo.


Con conexión

El archivo ZIP es enviado al servidor remoto de forma segura.




---

☁️ Fase 3 — Servidor y Mantenimiento

🔹 Almacenamiento en Servidor

El servidor recibe y almacena los archivos ZIP.

Se genera una URL única para acceso controlado a cada backup.


🔹 Expurgo Automático (Cleanup)

Frecuencia: cada 5 días.

Acción:

Eliminación automática de archivos ZIP antiguos.

Prevención de sobrecarga y uso innecesario de almacenamiento.




---

🤖 Integración con Bot (Acceso del Usuario)

Para facilitar el acceso a los backups de forma segura, el sistema incluye un bot automatizado.

🔐 Generación de Token de Acceso

Frecuencia: cada 5 minutos.

Acción:

El bot genera un token temporal de acceso.

El token permite acceder al sistema y a las URLs de los archivos ZIP.

Mejora la seguridad evitando accesos permanentes.


🔒 Seguridad y Buenas Prácticas

Tokens con tiempo de expiración corto.

Eliminación automática de archivos antiguos.

Separación entre datos temporales y finales.

Sincronización solo cuando existe conexión válida.



---

🛠️ Tecnologías Utilizadas

Node.js

Scripts de automatización

Compresión ZIP

Servidor remoto para almacenamiento

Bot para distribución de tokens



---

📌 Consideraciones Finales

Este sistema fue diseñado para ser:

🔁 Automatizado

🔐 Seguro

📉 Eficiente en uso de recursos

🌍 Dependiente de conectividad, pero tolerante a fallos

🤖 Fácil de integrar con bots y sistemas externos


<img width="1110" height="708" alt="image" src="https://github.com/user-attachments/assets/c106fe6f-3631-4f1f-8a28-d87bff19ed88" />


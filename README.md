# 🚀 Backend Portfolio API - Sergio Ramírez

API REST desarrollada con **Node.js y TypeScript** para gestionar los proyectos de mi portafolio personal y recibir mensajes de contacto desde la web.

Esta API implementa buenas prácticas de arquitectura backend, seguridad y manejo de errores, pensadas para un entorno de producción ligero.

---

## 🧰 Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- Nodemailer
- Helmet
- Express Rate Limit

---

## 🏗️ Arquitectura del proyecto

El proyecto sigue una arquitectura modular separando responsabilidades en diferentes capas:

src
├── config
├── domain
│ ├── dtos
│ ├── entities
│ └── errors
├── infrastructure
│ ├── adapters
│ └── email
├── presentation
│ ├── controllers
│ ├── routes
│ ├── middlewares
│ └── services


Esto permite:

- Mejor mantenibilidad
- Separación de responsabilidades
- Escalabilidad del proyecto

---

## 🔐 Seguridad implementada

La API incluye varias medidas de seguridad:

- Middleware de seguridad HTTP con Helmet
- Rate limiting para prevenir abuso de endpoints
- API Key para proteger endpoints privados
- Variables de entorno para configuración sensible
- Manejo centralizado de errores
- Protección contra spam en formulario de contacto

Además, el sistema de contacto evita que un mismo email envíe múltiples mensajes en un periodo corto de tiempo.

---

## 📦 Funcionalidades principales

### Gestión de proyectos

Permite administrar los proyectos mostrados en el portafolio.

Endpoints protegidos mediante **API Key** para:

- Crear proyectos
- Actualizar proyectos
- Eliminar proyectos

Los proyectos incluyen información como:

- nombre
- descripción
- tecnologías
- imagen
- enlace de GitHub
- enlace de demo

---

### Sistema de contacto

Endpoint público que permite a los visitantes enviar mensajes desde el portafolio.

Características:

- Guarda los mensajes en la base de datos
- Envía notificación por correo
- Evita spam limitando mensajes por email
- Incluye rate limiting por IP

---

## ⚙️ Variables de entorno

cambia el archivo `.env.template` por `.env` llenalos.

## ▶️ Instalación y ejecución

1. Clonar el repositorio
- https://github.com/SergioRamirez06/portfolio-backend-api

2. Instalar dependencias
npm install

3. Configurar variables de entorno
Crear archivo `.env`.

4. ejecutar el docker compose
docker-compose -up -d

5. Ejecutar migraciones de Prisma
npx prisma migrate dev

6. Iniciar el servidor
npm run dev



---

## ☁️ Deploy

La API está diseñada para ser desplegada en servicios cloud como **Railway**.

---

## 👨‍💻 Autor

**Sergio Andrés Ramírez Acosta**  
Backend Developer

Tecnologías principales:

- Node.js
- TypeScript
- PostgreSQL
- Prisma
- React

---

## 📬 Contacto

Si deseas contactarme puedes hacerlo a través de mi portafolio o enviando un mensaje desde el formulario de contacto.
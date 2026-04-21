# 🏨 Pacific GuestHub - Sistema de Reservas

Este repositorio contiene la **Propuesta de Diseño y Arquitectura** para el sistema de automatización de reservas del **Hotel Pacific Reef**. El proyecto aplica metodologías ágiles y estándares de ingeniería de software para gestionar un inventario de 38 habitaciones.

## 🏗️ Arquitectura y Modelado UML 2.0
Se ha diseñado una arquitectura desacoplada para garantizar escalabilidad y mantenibilidad. Los artefactos de diseño incluyen:

* **Vista Funcional:** Diagrama de Casos de Uso (Turista, Administrador y Sistema de Pago).
* **Vista de Proceso:** Diagrama de Actividades para el flujo de reserva y abono del 30%.
* **Vista de Comportamiento:** Diagrama de Estados para el ciclo de vida de las habitaciones.
* **Vista Lógica:** Diagrama de Secuencia y Diagrama de Componentes (Front-end vs Back-end).

## 🎨 Prototipos de Alta Fidelidad (UX/UI)
La interfaz ha sido diseñada en Figma bajo principios de usabilidad y diseño responsivo, incluyendo soporte bilingüe (ES/EN):
👉 **[Ver Prototipo Interactivo en Figma](https://www.figma.com/make/yDTqM6KEFHWJRav9zrG7xz/High-Fidelity-Landing-Page-Wireframe?p=f&t=X8LJL12CepR1rXXs-0&preview-route=%2Frooms)**

* **Landing Page:** Buscador con calendario interactivo.
* **Catálogo:** Grilla de habitaciones (Turista y Premium).
* **Checkout:** Desglose de precios y cálculo de abono del 30%.
* **Admin Dashboard:** Panel de gestión para Han Solo.

## 📊 Gestión del Proyecto (Scrum)
El desarrollo se gestiona bajo el marco de trabajo Scrum, con visibilidad completa del progreso y los hitos:

* 📌 **[Tablero de Trello Público](https://trello.com/b/SioPgKbr/pacific-guesthub)**
* 📂 **[Carpeta de Evidencias (Google Drive DuocUC)](https://drive.google.com/drive/folders/19jYYwAy59y2QotyL43R9vP-En0-BmgWO?hl=es-419)**

## 🛠️ Stack Tecnológico Proyectado
* **Front-end:** React.js + Vite.
* **Back-end:** Node.js (Firebase Cloud Functions).
* **Base de Datos:** Cloud Firestore (NoSQL).
* **Control de Versiones:** Git / GitHub.

## 📂 Estructura del Repositorio
* `/docs`: Documentación técnica y diagramas UML.
* `/design`: Recursos de diseño y capturas de prototipos.
* `/src`: Código base inicial del proyecto.

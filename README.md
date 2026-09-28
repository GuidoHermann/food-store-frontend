# Food Store - Aplicación Web de Comercio Electrónico (Parcial 1)
# link al video https://www.youtube.com/watch?v=m1AVozNykVI
## Descripción General
Evolución de la plataforma e-commerce "Food Store" desarrollada como evaluación práctica para la asignatura **Programación III** (Tecnicatura Universitaria en Programación - UTN). 

La aplicación está construida con **TypeScript** y **Vite** bajo una arquitectura de múltiples páginas (MPA). Permite a los clientes navegar por un catálogo dinámico de productos, aplicar filtros de búsqueda en tiempo real, clasificar ítems por categorías y gestionar un carrito de compras interactivo con persistencia local.

---

## 🚀 Funcionalidades Principales

* **Autenticación y Sesiones:** Inicio de sesión y registro de usuarios persitiendo el estado activo en `localStorage`[cite: 1].
* **Catálogo Dinámico (HU-P1-01 / HU-P1-02):**
  * Búsqueda en tiempo real por nombre de producto con respuesta a coincidencias parciales[cite: 1].
  * Filtrado dinámico por categorías mediante menú lateral con opción de restauración completa del catálogo[cite: 1].
  * Mensajes de alerta y feedback visual cuando no se encuentran resultados[cite: 1].
* **Gestión de Carrito (HU-P1-03 / HU-P1-04 / HU-P1-05):**
  * Incorporación de productos al carrito desde la tarjeta del producto[cite: 1].
  * Control de cantidades (incremento automático para artículos duplicados)[cite: 1].
  * Persistencia de los datos del carrito en la clave `"cart"` del `localStorage`[cite: 1].
  * Vista de carrito con desglose de precios unitarios, cantidades, subtotales y cálculo del **Total a Pagar**[cite: 1].
  * Opción para vaciar el carrito por completo[cite: 1].

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** TypeScript / JavaScript (ES6+)[cite: 1]
* **Bundler & Server:** Vite (Configuración MPA)[cite: 1]
* **Estilos:** CSS3 Nativo (Sin frameworks externos, respetando consignas)[cite: 1]
* **Persistencia:** Web Storage API (`localStorage`)[cite: 1]
* **Gestor de Paquetes:** `pnpm`[cite: 1]

---

## 📁 Estructura del Proyecto

```text
src/
├── data/
│   └── data.ts              # Mock centralizado de productos y categorías
├── pages/
│   ├── admin/               # Panel de administración (TP Integrador)
│   ├── auth/                # Pantallas de Registro y Login
│   │   ├── login/
│   │   └── registro/
│   └── client/              # Vistas de cliente (Parcial 1)
│       ├── cart/            # Vista y controlador del carrito (cart.html / cart.ts)
│       └── home/            # Vista y controlador del catálogo (home.html / home.ts)
├── types/
│   ├── categoria.ts         # Interface ICategoria
│   ├── IUser.ts             # Interface IUser
│   └── product.ts           # Interfaces IProduct e ICartItem
├── utils/
│   ├── auth.ts              # Control de sesión de usuarios y localStorage
│   └── cart.ts              # Lógica reutilizable del carrito (localStorage)
├── main.ts                  # Punto de entrada principal y ruteo inicial
└── styles.css               # Hoja de estilos globales
```

## ⚙️ Instrucciones de Instalación y Ejecución
Prerrequisitos
Asegúrate de contar con Node.js instalado (versión 18 o superior recomendada) y el gestor de paquetes pnpm habilitado via Corepack[cite: 1]:

Bash
corepack enable pnpm

Pasos para levantar el entorno local
Clonar o descomprimir el proyecto:

Bash
cd tp_integrador_ts
Instalar dependencias:

Bash
pnpm install
Iniciar servidor de desarrollo:

Bash
pnpm dev
El servidor estará disponible en http://localhost:5173/[cite: 1].

Compilar para producción (Build):

Bash
pnpm build
Genera la carpeta dist/ con las páginas procesadas correctamente según las rutas configuradas en vite.config.ts[cite: 1].

📌 Autor
Estudiante: Guido Hermann Alzogaray

Carrera: Tecnicatura Universitaria en Programación - UTN

Asignatura: Programación III
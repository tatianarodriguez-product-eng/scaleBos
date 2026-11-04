Software Design Document (SDD) - ScaleBos Landing Page
1. Visión General
Stack Tecnológico: Next.js (App Router), TypeScript, Tailwind CSS.
Objetivo Principal: Rendimiento impecable (Core Web Vitals) y optimización nativa para Generative Engine Optimization (GEO).
2. Arquitectura de Componentes UI
Separación estricta entre Server Components (por defecto) y Client Components ("use client") para minimizar el JavaScript enviado al navegador.
2.1. Testimonios en Video (Patrón Facade)
Estado Inicial (Server Component): Se cargará un póster estático en formato WebP/AVIF con un botón de reproducción simulado.
Interacción (Client Component): Al hacer clic, se montará de forma fluida el iframe del video (Notion/YouTube/Vimeo) con autoplay=1. Esto evita bloquear el hilo principal durante el Time to First Byte y protege la métrica de Total Blocking Time (TBT).
2.2. Formulario de Captación y Modal
Aislamiento: La sección de "What to do next" tendrá su estado encapsulado en un Client Component.
Flujo Mock: La acción de submit ejecutará una función asíncrona vacía (simulando la conexión a la base de datos en Notion). Inmediatamente después, se abrirá un Modal emergente (<dialog>).
Selección de Fecha: Dentro del Modal, se consumirá un API mock (simulando Google Calendar/Notion) para mostrar horarios disponibles y permitir al usuario reservar en la misma pantalla.
2.3. Sección "What you get" (7 Hubs)
Desktop: Server Component que utiliza un CSS Grid estático para maquetar los pantallazos del sistema operativo.
Mobile: Client Component que implementa un carrusel táctil (usando CSS Scroll Snap para máxima fluidez y bajo impacto en JS) permitiendo hacer scroll horizontal para ver los detalles.
3. Estrategia de Renderizado (SSG)
Al no existir requerimientos comerciales dinámicos iniciales, la página completa utilizará Static Site Generation (SSG) (force-static).
Todo el contenido será pre-renderizado en el servidor en tiempo de compilación. Esta es la vía más rápida y eficiente para que los motores de búsqueda y rastreadores de IA indexen el contenido instantáneamente.
4. Semántica, Accesibilidad (WAI-ARIA) y Datos Estructurados
4.1. Marcado HTML5
Uso estricto de landmarks: <main>, <section aria-labelledby="id-del-titulo"> y <article>.
Jerarquía de Encabezados: Un único <h1> en el Hero. Etiquetas <h2> para los apartados principales ("The Real Problem", "The Roadmap", "About Me", etc.) y <h3> para las sub-secciones internas.
4.2. JSON-LD (GEO Strategy)
Para dotar de contexto profundo a los LLMs, se inyectarán los siguientes esquemas en el <head>:

ProfessionalService / Organization: Identificando a Przemek y ScaleBos como la entidad proveedora.
Offer: Describiendo el servicio "done-for-you operating system" de €100k/mo.
FAQPage: Estructurando las preguntas frecuentes para que los motores de IA puedan extraer las respuestas directas.
4.3. Accesibilidad de Controles
El acordeón de preguntas frecuentes implementará atributos aria-expanded y aria-controls gestionados por el estado del componente.
El Modal de calendario implementará Focus Trap (Focus Management) para garantizar que la navegación por tabulador se mantenga dentro del popup mientras esté abierto.
5. Estrategia de Optimización de Assets Estáticos
5.1. Hero y LCP (Largest Contentful Paint)
El asset gráfico principal del Hero utilizará el componente next/image con el atributo priority={true} (inyectando fetchPriority="high" y loading="eager" de forma nativa).
El resto de imágenes (pantallazos, retratos) llevarán estricto loading="lazy" y dimensiones explícitas para no interferir en la carga inicial.
5.2. Tipografía (Zero CLS)
Se integrará la fuente Inter utilizando el paquete next/font/google.
Se pre-cargarán los pesos específicos (Regular 400, Semi Bold 600, Bold 700, Extra Bold 800) en el servidor. Esto asegura que no existan saltos visuales (Cumulative Layout Shift) mientras el texto carga.

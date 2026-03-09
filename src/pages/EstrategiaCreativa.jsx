import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const process = [
  {
    num: '01',
    title: 'Diagnóstico',
    duration: 'Semana 1–2',
    items: [
      'Auditoría de campañas activas y métricas históricas',
      'Análisis de mensajes, creatividades y páginas de destino',
      'Identificación del nivel de consciencia del público actual',
      'Mapa de fricción en el embudo de conversión',
    ],
  },
  {
    num: '02',
    title: 'Perfilamiento',
    duration: 'Semana 2–3',
    items: [
      'Construcción del perfil de cliente ideal con datos reales (no suposiciones)',
      'Arquetipos de cliente por nivel de consciencia',
      'Mapa de dolores, deseos, objeciones y lenguaje exacto',
      'Definición de ángulos de mensaje por segmento',
    ],
  },
  {
    num: '03',
    title: 'Arquitectura de Mensajes',
    duration: 'Semana 3–4',
    items: [
      'Framework de copy por etapa del embudo',
      'Librería de hooks, titulares y CTAs por ángulo',
      'Guión de videos y scripts de anuncios de alta conversión',
      'Sistema de pruebas A/B con hipótesis documentadas',
    ],
  },
  {
    num: '04',
    title: 'Producción y Lanzamiento',
    duration: 'Semana 5–8',
    items: [
      'Producción de creatividades estáticas y en video',
      'Configuración de campañas con estructura por consciencia',
      'Lanzamiento escalonado con control de presupuesto',
      'Monitoreo intensivo primera semana',
    ],
  },
  {
    num: '05',
    title: 'Iteración Continua',
    duration: 'Semana 9–12',
    items: [
      'Ciclos de optimización cada 14 días',
      'Análisis de datos y ajuste de mensajes',
      'Escalamiento de lo que funciona, corte de lo que no',
      'Reporte de resultados y siguiente ciclo',
    ],
  },
]

const icpTraits = [
  {
    label: 'Categoría de producto',
    value: 'Físico o digital con ticket medio-alto (desde $80 USD / $350K COP)',
  },
  {
    label: 'Facturación actual',
    value: '30M–300M COP/mes con intención de escalar 2–3x en 12 meses',
  },
  {
    label: 'Problema principal',
    value: 'Campañas activas que no escalan o ROAS que no justifica el gasto',
  },
  {
    label: 'Situación en ads',
    value: 'Ya invierte en Meta o Google Ads pero los resultados son inconsistentes',
  },
  {
    label: 'Equipo',
    value: 'Fundador o equipo pequeño que no quiere contratar creativo in-house',
  },
  {
    label: 'Mentalidad',
    value: 'Orientado a resultados, acepta feedback directo, entiende que el proceso tarda',
  },
]

const deliverables = [
  'Mapa de cliente ideal con lenguaje real (no plantilla genérica)',
  'Arquitectura de mensajes por nivel de consciencia',
  'Librería de ángulos y hooks validados',
  '12+ creatividades producidas (estáticas y video)',
  'Estructura de campañas instalada y activa',
  'Dashboard de métricas clave',
  'Sistema de iteración documentado',
  '3 meses de gestión activa con ciclos de optimización',
]

export default function EstrategiaCreativa() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="block text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] mb-6 uppercase">
            Estrategia Creativa
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[var(--text-main)] font-space mb-8 text-balance">
            Creatividad que<br />
            <span className="text-[var(--text-muted)]">convierte, no decora.</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            Programa DWY de 90 días. Construimos desde cero la arquitectura de mensajes de tu negocio: quién es tu cliente, qué lo mueve a comprar y cómo hablarle en cada momento del proceso.
          </p>
        </motion.div>
      </section>

      {/* El problema */}
      <section className="bg-[var(--bg-section)] py-24 mb-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="El problema de fondo">
                El 90% de los anuncios<br />
                <span className="text-[var(--text-muted)]">fallan en el mensaje</span>
              </SectionHeading>
              <p className="text-[var(--text-muted)] leading-relaxed">
                No es el presupuesto. No es el algoritmo. No es la segmentación. Es que el anuncio dice lo incorrecto a la persona incorrecta en el momento incorrecto de su proceso de decisión.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { wrong: 'Creatividades genéricas que no conectan con ningún dolor específico', right: 'Mensajes calibrados al nivel de consciencia exacto del comprador' },
                { wrong: 'Copy que habla del producto en vez de hablar del cliente', right: 'Copy que refleja el lenguaje y las emociones del cliente en su propio proceso' },
                { wrong: 'Una sola creatividad para todo el embudo', right: 'Arquitectura de mensajes por etapa: descubrimiento, consideración, conversión' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-depth p-5"
                >
                  <div className="flex gap-3 mb-3">
                    <span className="text-red-400 text-xs mt-0.5">✕</span>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.wrong}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[var(--accent-blue)] text-xs mt-0.5">✓</span>
                    <p className="text-xs text-[var(--text-main)] leading-relaxed">{item.right}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="Perfil de cliente ideal">
          Para quién está diseñado<br />
          <span className="text-[var(--text-muted)]">este programa</span>
        </SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {icpTraits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-depth p-6"
            >
              <span className="block text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2">
                {trait.label}
              </span>
              <p className="text-sm text-[var(--text-main)] leading-relaxed">{trait.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="Proceso en 90 días">
          Cómo trabajamos<br />
          <span className="text-[var(--text-muted)]">de principio a fin</span>
        </SectionHeading>
        <div className="space-y-4">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-depth p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0 md:w-48">
                  <span className="font-mono text-3xl font-light text-[var(--text-muted)] opacity-30 block mb-1">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-medium text-[var(--text-main)] font-space mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {step.duration}
                  </span>
                </div>
                <ul className="flex-1 grid md:grid-cols-2 gap-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--accent-blue)] shrink-0 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Entregables */}
      <section className="bg-[var(--bg-section)] py-24 mb-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <SectionHeading subtitle="Lo que recibes">
              Entregables concretos<br />
              <span className="text-[var(--text-muted)]">al final del programa</span>
            </SectionHeading>
            <div className="grid gap-3 pt-4">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4 items-start py-3 border-b border-[var(--border-color)] last:border-0"
                >
                  <span className="text-[var(--accent-blue)] text-xs mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-[var(--text-main)]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-depth p-12 md:p-16 max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="block text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] mb-4 uppercase">
                Inversión
              </span>
              <div className="text-5xl font-light font-space text-[var(--text-main)] mb-2">
                750–950 <span className="text-2xl text-[var(--text-muted)]">USD</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Programa completo de 90 días. Precio varía según complejidad del catálogo y mercados activos.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Pago único o en 2 cuotas',
                'Incluye producción creativa completa',
                'Sin costos ocultos de herramientas',
                'Garantía de iteración si no se cumple baseline',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-[var(--text-muted)]">
                  <span className="text-[var(--accent-blue)] shrink-0">—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-[var(--border-color)] text-center">
            <p className="text-[var(--text-muted)] mb-6 text-sm">
              El primer paso es una auditoría de 45 minutos donde evaluamos si tu negocio es el fit correcto para el programa.
            </p>
            <Link to="/contacto">
              <Button primary>Solicitar Auditoría de Fit</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
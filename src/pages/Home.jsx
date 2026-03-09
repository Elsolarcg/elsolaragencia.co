import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X, ChevronDown, BarChart3, Brain, Zap, Layers } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

// --- HERO ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.22em' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-[10px] md:text-xs text-[var(--text-muted)] uppercase tracking-[0.22em] mb-8"
        >
          No vendemos servicios. Vendemos orden.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] mb-8 font-space tracking-tight text-balance"
        >
          Deja de presentar resultados.{' '}
          <br className="hidden md:block" />
          <span className="font-medium text-[var(--text-main)]">
            Empieza a tomar decisiones.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-lg mx-auto text-[var(--text-muted)] text-lg mb-12 font-light leading-relaxed"
        >
          Diseñamos sistemas que convierten ruido operativo en decisiones claras.
          No trabajamos con quien busca atajos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link to="/contacto">
            <Button primary>Explorar Fit</Button>
          </Link>
          <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Proceso de selección activo
          </span>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-muted)]"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}

// --- REFRAME ---
function Reframe() {
  return (
    <section className="py-32 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading subtitle="El Problema Real">
              Tu empresa no necesita más marketing.
            </SectionHeading>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed font-light mb-8">
              No falta talento ni herramientas. Falta sistema.
              Hoy, tu marketing, ventas y operaciones operan como islas separadas
              y las decisiones se toman por suposición, no por datos.
            </p>
            <div className="p-8 border-l-2 border-[var(--border-color)] bg-[var(--accent-glow)]">
              <h4 className="text-[var(--text-main)] text-sm font-semibold mb-3 uppercase tracking-widest">
                Principio de El Solar
              </h4>
              <p className="text-[var(--text-muted)] italic text-lg font-light leading-relaxed">
                "Ordenar primero. Ejecutar después."
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-4 uppercase tracking-[0.2em]">
                El crecimiento deja de ser reactivo y empieza a ser predecible.
              </p>
            </div>
          </div>

          <div className="card-depth rounded-sm overflow-hidden relative min-h-[360px] flex items-center justify-center">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.06]">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-[var(--text-main)]" />
              ))}
            </div>
            <div className="z-10 text-center p-10 bg-[var(--bg-main)] border border-[var(--border-color)] shadow-xl">
              <p className="text-3xl font-light mb-3 text-[var(--text-main)] font-space flex items-center gap-4">
                Ruido <ArrowRight size={20} className="text-[var(--text-muted)]" /> Claridad
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Transformación sistemática
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- METHODOLOGY ---
const steps = [
  {
    title: 'Lectura Profunda',
    subtitle: 'Diagnóstico con métricas reales, no checklist.',
    bullets: [
      'Identificación de cuellos de botella invisibles.',
      'Insights que cambian decisiones, no reportes de vanidad.',
    ],
  },
  {
    title: 'Organización Estructural',
    subtitle: 'Dashboards vivos + activos de información.',
    bullets: [
      'Arquitectura de datos unificada.',
      'Eliminación de silos entre marketing, ventas y operaciones.',
    ],
  },
  {
    title: 'Sistemas de Decisión',
    subtitle: 'Reglas, modelos y prioridades accionables.',
    bullets: [
      'Protocolos de respuesta ante cambios de mercado.',
      'Gobernanza simplificada que cualquier equipo puede operar.',
    ],
  },
  {
    title: 'Integración de IA',
    subtitle: 'IA para pensar, no solo automatizar.',
    bullets: [
      'Modelos que amplifican el criterio del equipo.',
      'Automatización de tareas de bajo valor cognitivo.',
    ],
  },
  {
    title: 'Ejecución Progresiva',
    subtitle: 'Tácticas solo cuando el sistema las soporta.',
    bullets: [
      'Escalado controlado basado en datos reales.',
      'Feedback loops en tiempo real que mejoran con cada ciclo.',
    ],
  },
]

function MethodologyStep({ number, title, subtitle, bullets, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.08 }}
      className="border-t border-[var(--border-color)] py-10 group hover:bg-[var(--accent-glow)] transition-colors duration-400 px-4 md:px-6"
    >
      <div className="grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-2 text-4xl font-light text-[var(--border-color)] font-space group-hover:text-[var(--text-muted)] transition-colors duration-300">
          0{number}
        </div>
        <div className="md:col-span-4">
          <h3 className="text-xl font-medium mb-2 text-[var(--text-main)] font-space">{title}</h3>
          <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{subtitle}</p>
        </div>
        <div className="md:col-span-6">
          <ul className="space-y-2.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-sm">
                <span className="mt-2 w-1 h-1 bg-[var(--text-main)] rounded-full flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function Methodology() {
  return (
    <section id="metodo" className="py-32 bg-[var(--bg-main)]">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Cómo trabajamos">
          Método no negociable para <br /> decidir y crecer.
        </SectionHeading>
        <div>
          {steps.map((s, i) => (
            <MethodologyStep key={i} number={i + 1} delay={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

// --- SYSTEMS ---
const systems = [
  {
    icon: BarChart3,
    title: 'Sistema Inteligente de Ventas',
    tag: 'B2B',
    to: '/sistema-inteligente-ventas',
    problems: [
      'Adquisición impredecible, dependiente del voz a voz.',
      'Marketing y ventas operan como islas separadas.',
      'Sin sistema de decisión que conecte información y acción.',
    ],
    solutions: [
      'Contenido que educa, filtra y precalifica antes del contacto.',
      'IA como amplificador de criterio, no reemplazo.',
      'Flujo de nuevos prospectos predecible y sostenible.',
    ],
  },
  {
    icon: Zap,
    title: 'Estrategia Creativa',
    tag: 'B2C / E-commerce',
    to: '/estrategia-creativa',
    problems: [
      'Ejecución creativa sin estructura ni criterio.',
      'Orgánico, pauta y email desconectados entre sí.',
      'Presupuesto que se gasta sin construir aprendizaje.',
    ],
    solutions: [
      'Sistema de decisión creativa repetible y optimizable.',
      'Todos los canales bajo una misma lógica estratégica.',
      'Marco que mide, itera y mejora en cada ciclo.',
    ],
  },
  {
    icon: Brain,
    title: 'Cultura IA',
    tag: 'Equipos y operaciones',
    to: '/cultura-ia',
    problems: [
      'Prompts sueltos sin integración real al negocio.',
      'Productividad artificial que no escala.',
      'Resistencia al cambio por falta de criterio colectivo.',
    ],
    solutions: [
      'IA integrada al pensamiento estratégico del equipo.',
      'Criterio colectivo para decidir qué automatizar.',
      'Proyección asistida con modelos reales del negocio.',
    ],
  },
  {
    icon: Layers,
    title: 'Growth OS',
    tag: 'Sistema completo',
    to: '/sistema-inteligente-ventas',
    problems: [
      'Caos operativo al intentar escalar.',
      'Tácticas cortoplacistas sin horizonte claro.',
      'Fracturas entre equipos y objetivos.',
    ],
    solutions: [
      'Claridad absoluta sobre qué ejecutar y cuándo.',
      'Decisiones basadas en datos, no en urgencias.',
      'Arquitectura de crecimiento a largo plazo.',
    ],
  },
]

function SystemCard({ icon: Icon, title, tag, to, problems, solutions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="card-depth p-8 flex flex-col h-full hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 group rounded-sm"
    >
      <div className="mb-2 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors">
        <Icon size={28} strokeWidth={1.25} />
      </div>
      <span className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">{tag}</span>
      <h3 className="text-lg font-medium mb-6 text-[var(--text-main)] font-space leading-snug min-h-[3rem] flex items-end">
        {title}
      </h3>

      <div className="mb-6 flex-grow p-4 bg-[var(--accent-glow)] border border-[var(--border-color)] rounded-sm">
        <p className="text-[9px] uppercase tracking-[0.2em] text-red-400/70 mb-3 font-bold">Sin sistema</p>
        <ul className="space-y-2">
          {problems.map((p, i) => (
            <li key={i} className="text-[11px] text-[var(--text-muted)] flex items-start gap-2">
              <X size={11} className="mt-0.5 text-red-400 flex-shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-main)] mb-3 font-bold opacity-80">Con el sistema</p>
        <ul className="space-y-2 mb-6">
          {solutions.map((s, i) => (
            <li key={i} className="text-[11px] text-[var(--text-muted)] flex items-start gap-2">
              <Check size={11} className="mt-0.5 text-blue-400 flex-shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <Link
          to={to}
          className="w-full flex items-center justify-center gap-2 py-3 text-[10px] tracking-[0.18em] uppercase font-medium border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--accent-glow)] transition-colors opacity-0 group-hover:opacity-100 duration-200"
        >
          Ver detalle <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  )
}

function Systems() {
  return (
    <section id="sistemas" className="py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Nuestra Oferta">
          Sistemas de crecimiento estructurado.{' '}
          <br />
          <span className="text-[var(--text-muted)]">Imposibles de comparar por precio.</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {systems.map((s, i) => (
            <SystemCard key={i} {...s} />
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 p-10 border border-[var(--border-color)] bg-[var(--bg-main)] relative overflow-hidden rounded-sm"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.22em] mb-3 block">
                Primer paso
              </span>
              <h3 className="text-2xl font-medium mb-3 text-[var(--text-main)] font-space">
                Auditoría de Fricción Operativa
              </h3>
              <p className="text-[var(--text-muted)] max-w-xl text-sm leading-relaxed font-light">
                Un diagnóstico rápido que identifica fugas de dinero y abre la conversación.
                No es un pitch de ventas. Es un escáner de tu negocio.
              </p>
            </div>
            <Link
              to="/contacto"
              className="flex-shrink-0 px-8 py-4 bg-[var(--button-bg)] text-[var(--button-text)] text-[10px] font-bold uppercase tracking-[0.18em] hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              Solicitar Auditoría
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// --- FILTER ---
function TheFilter() {
  const noList = [
    'Emprendimientos en etapa inicial sin tracción.',
    'Buscadores de hacks y resultados mágicos.',
    'Equipos que ocultan métricas y operan en opacidad.',
    'Quienes delegan la responsabilidad, no la tarea.',
  ]
  const yesList = [
    'Empresas operativas con ventas y equipo activo.',
    'Líderes dispuestos a invertir tiempo en orden.',
    'Equipos que quieren tomar decisiones con datos.',
    'Organizaciones listas para escalar la complejidad.',
  ]

  return (
    <section id="filtro" className="grid md:grid-cols-2 min-h-[75vh]">
      <div className="bg-[var(--bg-secondary)] p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--border-color)]">
        <h3 className="text-2xl font-space mb-10 text-[var(--text-muted)]">
          Con quién <span className="text-[var(--text-main)]">NO</span>
        </h3>
        <ul className="space-y-7">
          {noList.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[var(--text-muted)] group hover:text-[var(--text-main)] transition-colors cursor-default">
              <X className="mt-0.5 text-red-400 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" size={18} />
              <span className="text-base font-light leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--bg-main)] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/[0.03] pointer-events-none" />
        <h3 className="text-2xl font-space mb-10 text-[var(--text-muted)] relative z-10">
          Con quién <span className="text-[var(--text-main)]">SÍ</span>
        </h3>
        <ul className="space-y-7 relative z-10">
          {yesList.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[var(--text-main)]">
              <Check className="mt-0.5 text-blue-400 flex-shrink-0" size={18} />
              <span className="text-base font-light leading-snug">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] relative z-10">
          <p className="text-sm text-[var(--text-muted)] italic font-light">
            "Si buscas atajos, sigue buscando. Si buscas orden, sigue leyendo."
          </p>
        </div>
      </div>
    </section>
  )
}

// --- HOME PAGE ---
export default function Home() {
  return (
    <>
      <Hero />
      <Reframe />
      <Methodology />
      <Systems />
      <TheFilter />
    </>
  )
}
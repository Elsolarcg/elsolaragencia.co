import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const layers = [
  {
    num: '01',
    title: 'Atracción Calificada',
    desc: 'Generamos tráfico con intención de compra real. No impresiones. Usamos Google Ads y Meta Ads con estructuras de segmentación por nivel de consciencia del problema, no por intereses genéricos.',
    tags: ['Google Ads', 'Meta Ads', 'Segmentación por consciencia'],
  },
  {
    num: '02',
    title: 'Conversión con Fricción Cero',
    desc: 'Cada punto de contacto está diseñado para reducir la resistencia a la acción. Páginas de aterrizaje que hablan el idioma del cliente en el momento exacto donde está en su proceso de decisión.',
    tags: ['Landing pages', 'CRO', 'Arquitectura de mensajes'],
  },
  {
    num: '03',
    title: 'Nutrición Automatizada',
    desc: 'El 80% de los leads no compran en el primer contacto. Construimos secuencias de email y retargeting que educan, generan confianza y empujan al cierre sin intervención manual constante.',
    tags: ['Email marketing', 'Retargeting', 'Automatización'],
  },
  {
    num: '04',
    title: 'Datos e Inteligencia Continua',
    desc: 'Sin datos precisos, cada decisión es una apuesta. Instalamos tracking completo, dashboards en tiempo real y ciclos de optimización cada 14 días para que el sistema mejore solo.',
    tags: ['Analytics', 'Dashboards', 'Optimización iterativa'],
  },
]

const awareness = [
  {
    level: 'Nivel 1',
    name: 'Sin consciencia',
    desc: 'No sabe que tiene el problema. Contenido educativo: "por qué tu tienda no vende aunque tenga tráfico".',
    color: 'text-[var(--text-muted)]',
  },
  {
    level: 'Nivel 2',
    name: 'Consciente del problema',
    desc: 'Siente el dolor pero no sabe la causa. Contenido de diagnóstico y herramientas de auditoría.',
    color: 'text-[var(--text-muted)]',
  },
  {
    level: 'Nivel 3',
    name: 'Consciente de la solución',
    desc: 'Sabe que existe algo como "marketing digital" pero no entiende qué variante le aplica.',
    color: 'text-[var(--text-main)]',
  },
  {
    level: 'Nivel 4',
    name: 'Consciente del producto',
    desc: 'Está evaluando opciones. Compara. Aquí la propuesta de valor y prueba social son decisivas.',
    color: 'text-[var(--text-main)]',
  },
  {
    level: 'Nivel 5',
    name: 'Listo para comprar',
    desc: 'Solo necesita la oferta correcta en el momento correcto. Urgencia real, garantía, facilidad de pago.',
    color: 'text-[var(--accent-blue)]',
  },
]

const iaRoles = [
  { title: 'Análisis de datos de campañas', desc: 'Detecta patrones en datos de rendimiento que tardarían horas en revisión manual.' },
  { title: 'Generación de variantes creativas', desc: 'Produce decenas de variaciones de copy y creatividades para A/B test sistemático.' },
  { title: 'Automatización de reportes', desc: 'Dashboards que se actualizan solos y alertas cuando un KPI sale del rango objetivo.' },
  { title: 'Cualificación de leads', desc: 'Scoring automático basado en comportamiento para priorizar el follow-up comercial.' },
  { title: 'Optimización de puja en tiempo real', desc: 'Ajustes de presupuesto y puja basados en señales de conversión cada hora.' },
  { title: 'Personalización a escala', desc: 'Mensajes que se adaptan según el segmento, comportamiento e historial sin trabajo adicional.' },
]

export default function SistemaVentas() {
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
            Sistema Inteligente de Ventas
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[var(--text-main)] font-space mb-8 text-balance">
            Un sistema que vende<br />
            <span className="text-[var(--text-muted)]">mientras tú operas.</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            No es una campaña. Es una arquitectura completa de adquisición de clientes que conecta tráfico, conversión, nutrición y datos en un flujo automatizado y medible.
          </p>
        </motion.div>
      </section>

      {/* Para quién */}
      <section className="container mx-auto px-6 mb-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <SectionHeading subtitle="Perfil de cliente">
            Diseñado para<br />
            <span className="text-[var(--text-muted)]">negocios con tracción</span>
          </SectionHeading>
          <div className="space-y-6 pt-4">
            {[
              'Tiendas e-commerce con facturación entre 50M–500M COP/mes que quieren crecer sin depender de un solo canal.',
              'Negocios con producto validado pero adquisición de clientes caótica, dependiente de voz a voz o referidos.',
              'Fundadores que invierten en ads y no entienden por qué el ROAS no justifica el gasto.',
              'Empresas que crecieron orgánicamente y ahora necesitan sistematizar para escalar sin contratar 5 personas más.',
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-[var(--accent-blue)] font-mono text-sm mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[var(--text-muted)] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Las 4 capas */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="Arquitectura del sistema">
          Las 4 capas del<br />
          <span className="text-[var(--text-muted)]">Sistema de Ventas</span>
        </SectionHeading>
        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-depth p-8 grid md:grid-cols-[80px_1fr_auto] gap-6 items-start"
            >
              <span className="font-mono text-4xl font-light text-[var(--text-muted)] opacity-40">
                {layer.num}
              </span>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-main)] mb-3 font-space">
                  {layer.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[var(--border-color)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5 niveles de consciencia */}
      <section className="bg-[var(--bg-section)] py-24 mb-28">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Framework de mensajes">
            5 niveles de consciencia<br />
            <span className="text-[var(--text-muted)]">del comprador</span>
          </SectionHeading>
          <p className="text-[var(--text-muted)] max-w-2xl mb-12 -mt-4">
            La mayoría de campañas fallan porque hablan en el nivel incorrecto. Cada mensaje que producimos está calibrado al momento exacto donde está el cliente en su proceso de decisión.
          </p>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--border-color)] hidden md:block" />
            <div className="space-y-6">
              {awareness.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center justify-center mt-1 relative z-10">
                    <span className="text-[8px] font-bold text-[var(--text-muted)]">{i + 1}</span>
                  </div>
                  <div className="card-depth p-6 flex-1 grid md:grid-cols-[200px_1fr] gap-4 items-start">
                    <div>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-1">
                        {item.level}
                      </span>
                      <h4 className={`font-medium font-space ${item.color}`}>{item.name}</h4>
                    </div>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rol de la IA */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="Ventaja tecnológica">
          Lo que la IA hace<br />
          <span className="text-[var(--text-muted)]">que otros no pueden</span>
        </SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {iaRoles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-depth p-6"
            >
              <div className="w-8 h-px bg-[var(--accent-blue)] mb-4" />
              <h4 className="text-sm font-medium text-[var(--text-main)] mb-2 font-space">
                {item.title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-depth p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <span className="block text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] mb-6 uppercase">
            Siguiente paso
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-space text-[var(--text-main)] mb-6 text-balance">
            ¿Tu modelo necesita este sistema?
          </h2>
          <p className="text-[var(--text-muted)] mb-10 leading-relaxed">
            Hacemos una auditoría de fricción operativa de 45 minutos. Identificamos dónde se está perdiendo el dinero y si tiene sentido trabajar juntos.
          </p>
          <Link to="/contacto">
            <Button primary>Solicitar Auditoría</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

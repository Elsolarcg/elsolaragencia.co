import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const upcoming = [
  {
    title: 'Onboarding IA para equipos comerciales',
    desc: 'Cómo integrar herramientas de IA en el flujo diario de un equipo de ventas sin resistencia interna.',
  },
  {
    title: 'Automatización de operaciones repetitivas',
    desc: 'Identificación y eliminación de tareas manuales de bajo valor que consumen tiempo del equipo.',
  },
  {
    title: 'IA para atención al cliente e-commerce',
    desc: 'Chatbots, respuestas automáticas y flujos de soporte que escalan sin contratar.',
  },
  {
    title: 'Cultura de datos en empresas pequeñas',
    desc: 'Cómo tomar decisiones basadas en métricas reales cuando no tienes un equipo de analytics.',
  },
]

export default function CulturaIA() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col">
      <section className="container mx-auto px-6 flex-1 flex flex-col justify-center max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 border border-[var(--border-color)] text-[var(--text-muted)]">
            En construcción
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10"
        >
          <span className="block text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] mb-6 uppercase">
            Cultura IA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[var(--text-main)] font-space mb-8 text-balance">
            La IA no reemplaza<br />
            <span className="text-[var(--text-muted)]">al equipo. Lo multiplica.</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            Cultura IA es el programa de formación y adopción de inteligencia artificial para empresas que quieren integrar IA sin disrumpir sus operaciones. Estamos construyendo los módulos y el currículo ahora.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, origin: 0 }}
          className="w-full h-px bg-[var(--border-color)] mb-12"
          style={{ transformOrigin: 'left' }}
        />

        {/* Coming soon modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] uppercase mb-6">
            Módulos en desarrollo
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                className="card-depth p-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <h4 className="text-sm font-medium text-[var(--text-main)] font-space mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link to="/contacto">
            <Button primary>Notificarme cuando esté listo</Button>
          </Link>
          <Link to="/">
            <Button>Ver otros servicios</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
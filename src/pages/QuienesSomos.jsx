import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const team = [
  {
    name: 'Juan Manuel Plazas',
    role: 'CEO · Ventas y Estrategia',
    bio: 'Formación en cine y artes escénicas. Pasó al marketing digital en 2022. Lidera ventas, relaciones con clientes y la estrategia de negocio de El Solar. Obsesionado con sistemas que funcionan sin supervisión constante.',
  },
  {
    name: 'Estrategia Digital',
    role: 'Dirección de Estrategia',
    bio: 'Define la arquitectura de cada campaña. Traduce objetivos de negocio en estructuras de medios y mensajes que generan resultados predecibles.',
  },
  {
    name: 'Éxito del Cliente',
    role: 'Gestión y Retención',
    bio: 'Punto de contacto principal para clientes activos. Se ocupa de que los resultados se entreguen a tiempo, que la comunicación sea clara y que el cliente entienda qué está pasando con su inversión.',
  },
  {
    name: 'Dirección Creativa',
    role: 'Contenido y Producción',
    bio: 'Responsable de la producción de creatividades, guiones de video y librería de formatos. Garantiza que el mensaje correcto tenga la forma correcta para cada plataforma.',
  },
]

const values = [
  {
    title: 'Resultados primero',
    desc: 'Todo se mide. Todo se reporta. Si no podemos demostrarte que la inversión tiene sentido, no la hacemos.',
  },
  {
    title: 'Claridad sobre brillo',
    desc: 'Un mensaje claro que llega al cliente correcto supera cualquier producción espectacular sin estrategia detrás.',
  },
  {
    title: 'Sistemas, no heroísmos',
    desc: 'No somos una agencia que vive de reacciones. Construimos procesos que funcionan aunque el fundador esté de vacaciones.',
  },
  {
    title: 'Fit antes que dinero',
    desc: 'Solo tomamos clientes donde podemos impactar de verdad. Si no eres el fit correcto, te lo decimos antes de cobrar.',
  },
]

export default function QuienesSomos() {
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
            Quiénes Somos
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[var(--text-main)] font-space mb-8 text-balance">
            Una agencia pequeña<br />
            <span className="text-[var(--text-muted)]">con resultados grandes.</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            El Solar nació en 2024 de una premisa simple: las agencias grandes cobran por el tamaño del equipo, no por los resultados. Nosotros cobramos por impacto.
          </p>
        </motion.div>
      </section>

      {/* Historia */}
      <section className="bg-[var(--bg-section)] py-24 mb-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <SectionHeading subtitle="La historia">
              Empezamos como<br />
              <span className="text-[var(--text-muted)]">lo que criticábamos</span>
            </SectionHeading>
            <div className="space-y-6 pt-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Antes de El Solar, cada socio trabajó en agencias o como freelancer independiente. Vimos de cerca el modelo de inflación de equipo, los reportes que se veían bien pero no explicaban nada, y los clientes que pagaban meses sin saber si estaban creciendo.
              </p>
              <p>
                Fundamos El Solar con una regla: solo trabajar con clientes donde pudiéramos demostrar impacto medible en menos de 90 días. Si no era posible, no era el cliente correcto.
              </p>
              <p>
                Eso nos obligó a construir sistemas, no servicios. A documentar procesos en vez de depender del conocimiento tácito. A decir que no a contratos grandes con fit malo.
              </p>
              <p className="text-[var(--text-main)] font-medium">
                Hoy operamos con 4 socios, 3–5 clientes ancla activos, y una hipótesis clara: la calidad de la estrategia importa más que el tamaño del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="El equipo">
          Las personas detrás<br />
          <span className="text-[var(--text-muted)]">del trabajo</span>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-depth p-8"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--border-color)] mb-5 flex items-center justify-center">
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-main)] font-space mb-1">
                {member.name}
              </h3>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-4">
                {member.role}
              </span>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="container mx-auto px-6 mb-28">
        <SectionHeading subtitle="Cómo operamos">
          Lo que no negociamos<br />
          <span className="text-[var(--text-muted)]">en ningún proyecto</span>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-depth p-8"
            >
              <div className="w-8 h-px bg-[var(--accent-blue)] mb-5" />
              <h3 className="text-xl font-medium text-[var(--text-main)] font-space mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">{item.desc}</p>
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
          className="card-depth p-12 md:p-16 text-center max-w-2xl mx-auto"
        >
          <span className="block text-[10px] font-bold tracking-[0.22em] text-[var(--text-muted)] mb-6 uppercase">
            Siguiente paso
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-space text-[var(--text-main)] mb-6 text-balance">
            ¿Tu negocio es el fit correcto?
          </h2>
          <p className="text-[var(--text-muted)] mb-10 leading-relaxed text-sm">
            La única forma de saberlo es hablando. 45 minutos, sin compromiso, sin propuesta de venta en la primera llamada.
          </p>
          <Link to="/contacto">
            <Button primary>Explorar Fit</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
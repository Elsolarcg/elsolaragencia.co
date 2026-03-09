import { Link } from 'react-router-dom'

export default function Footer({ legalEntity }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-color)] py-12 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <p className="font-space font-bold uppercase tracking-tight text-[var(--text-main)] mb-2">
              El Solar Creative Group
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              {legalEntity || 'Solar CG SAS'}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
            <Link to="/sistema-inteligente-ventas" className="hover:text-[var(--text-main)] transition-colors">Sistema de Ventas</Link>
            <Link to="/estrategia-creativa" className="hover:text-[var(--text-main)] transition-colors">Estrategia Creativa</Link>
            <Link to="/cultura-ia" className="hover:text-[var(--text-main)] transition-colors">Cultura IA</Link>
            <Link to="/quienes-somos" className="hover:text-[var(--text-main)] transition-colors">Quiénes Somos</Link>
          </div>

          {/* Contact */}
          <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] flex flex-col gap-3">
            <a href="https://wa.me/573203223580" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors">WhatsApp</a>
            <Link to="/contacto" className="hover:text-[var(--text-main)] transition-colors">Explorar Fit</Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
          © {year} El Solar Creative Group · Solar CG SAS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
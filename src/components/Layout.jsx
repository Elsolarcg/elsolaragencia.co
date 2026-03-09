import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

export default function Layout({ children, theme, toggleTheme }) {
  const [legalEntity, setLegalEntity] = useState('Solar CG SAS')

  useEffect(() => {
    // IP-based legal entity: show LLC for US/CA visitors
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data.country_code === 'US' || data.country_code === 'CA') {
          setLegalEntity('Solar Digital Growth Holdings LLC')
        }
      })
      .catch(() => {}) // fail silently
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer legalEntity={legalEntity} />
      <WhatsAppFloat />
    </>
  )
}
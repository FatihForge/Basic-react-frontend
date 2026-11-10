import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" to="/">fieldnote studio</Link>
        <p>Thoughtful strategy for a world that won&apos;t sit still.</p>
        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </nav>
        <small>© {new Date().getFullYear()} Fieldnote Studio. Made with intention.</small>
      </div>
    </footer>
  )
}

export default Footer

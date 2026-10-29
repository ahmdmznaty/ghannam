import { STORE_NAME } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {STORE_NAME} — Arduino boards, sensors, modules and electronic parts.</p>
        <p className="muted">Orders are confirmed over WhatsApp.</p>
      </div>
    </footer>
  )
}

import { X, Trash2 } from 'lucide-react'
import { formatPrice } from '../utils/format'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function CartDrawer({ open, onClose, cart }) {
  const { items, setQty, remove, clear, total } = cart

  const checkout = () => {
    window.open(buildWhatsAppUrl(items, total), '_blank', 'noopener')
    clear()
  }

  return (
    <>
      <div className={`scrim ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Cart">
        <div className="drawer-head">
          <h3>Your cart</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart"><X size={18} /></button>
        </div>
        <div className="drawer-items">
          {!items.length && <p className="empty">Your cart is empty.</p>}
          {items.map((i) => (
            <div key={i.id} className="cart-row" data-testid="cart-row">
              <img src={i.image} alt="" />
              <div>
                <div className="cart-name">{i.name}</div>
                <div className="accent">{formatPrice(i.price * i.qty)}</div>
                <div className="qty small">
                  <button onClick={() => setQty(i.id, i.qty - 1)} aria-label={`Decrease ${i.name}`}>−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => setQty(i.id, i.qty + 1)} aria-label={`Increase ${i.name}`}>+</button>
                </div>
              </div>
              <button className="icon-btn" onClick={() => remove(i.id)} aria-label={`Remove ${i.name}`}><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
        {!!items.length && (
          <div className="drawer-foot">
            <div className="total"><span>Total</span><b>{formatPrice(total)}</b></div>
            <button className="btn wa" onClick={checkout}>Checkout via WhatsApp</button>
          </div>
        )}
      </aside>
    </>
  )
}

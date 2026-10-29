import { WHATSAPP_NUMBER, STORE_NAME } from '../config'
import { formatPrice } from './format'

// Builds a wa.me link containing a neatly formatted order message.
export function buildWhatsAppUrl(items, total) {
  const lines = items.map(
    (i, idx) => `${idx + 1}. ${i.name} x${i.qty} — ${formatPrice(i.price * i.qty)}`
  )
  const text = [
    `*New order — ${STORE_NAME}*`,
    '',
    ...lines,
    '',
    `*Total: ${formatPrice(total)}*`,
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

import { CURRENCY } from '../config'

export const formatPrice = (n) => `${n.toLocaleString('en-US')} ${CURRENCY}`

export const discountPercent = (p) =>
  p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0

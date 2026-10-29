import { useState } from 'react'
import { products, CATEGORIES, BRANDS } from './data/products'
import { useCart } from './hooks/useCart'
import { useFilters } from './hooks/useFilters'
import Header from './components/Header'
import PageBanner from './components/PageBanner'
import Filters from './components/Filters'
import Toolbar from './components/Toolbar'
import ProductGrid from './components/ProductGrid'
import ProductModal from './components/ProductModal'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

export default function App() {
  const cart = useCart()
  const { filters, set, toggle, reset, visible } = useFilters(products)
  const [selected, setSelected] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header
        search={filters.search}
        onSearch={(search) => set({ search })}
        cartCount={cart.count}
        cartTotal={cart.total}
        onCartClick={() => setCartOpen(true)}
      />
      <PageBanner title="Products" />
      <main className="container layout">
        <Filters
          filters={filters}
          categories={CATEGORIES}
          brands={BRANDS}
          set={set}
          toggle={toggle}
          reset={reset}
        />
        <section>
          <Toolbar sort={filters.sort} onSort={(sort) => set({ sort })} count={visible.length} />
          <ProductGrid products={visible} onOpen={setSelected} onAdd={cart.add} />
        </section>
      </main>
      <Footer />
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={cart.add} />
      )}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} />
    </>
  )
}

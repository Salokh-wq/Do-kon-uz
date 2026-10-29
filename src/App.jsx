import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Headphones, Heart, Menu, PackageCheck, Search, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { categories, formatPrice, products } from './data/products'

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Barchasi')
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const [toast, setToast] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Barchasi' || product.category === category
    const matchesSearch = `${product.name} ${product.category}`.toLocaleLowerCase('uz').includes(search.toLocaleLowerCase('uz'))
    return matchesCategory && matchesSearch
  }), [category, search])

  const notify = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2400)
  }

  const toggleFavorite = (id) => {
    const exists = favorites.includes(id)
    setFavorites((current) => exists ? current.filter((item) => item !== id) : [...current, id])
    notify(exists ? 'Sevimlilardan olib tashlandi' : 'Sevimlilarga qo‘shildi')
  }

  const addToCart = (product) => {
    setCart((current) => [...current, product])
    notify(`${product.name} savatga qo‘shildi`)
  }

  const goTo = (page) => {
    setActivePage(page)
    setMobileMenu(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToProducts = () => {
    goTo('catalog')
    setTimeout(() => document.getElementById('catalog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  return (
    <div className="app-shell">
      <div className="announcement"><Sparkles size={14} /> Yangi kolleksiya bilan tanishing <span>·</span> Yetkazib berish qulay va oson</div>
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => goTo('home')} aria-label="NOVA bosh sahifa"><span className="brand-mark">N</span><span>NOVA<span className="brand-dot">.</span><small>ONLAYN DO‘KON</small></span></button>
          <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`}>
            <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => goTo('home')}>Bosh sahifa</button>
            <button className={activePage === 'catalog' ? 'nav-link active' : 'nav-link'} onClick={() => goTo('catalog')}>Mahsulotlar</button>
            <button className="nav-link" onClick={() => { goTo('catalog'); setCategory('Uy va dekor') }}>Uy va dekor</button>
            <button className="nav-link" onClick={() => { goTo('catalog'); setCategory('Elektronika') }}>Elektronika</button>
          </nav>
          <div className="header-actions">
            <button className="icon-button search-toggle" aria-label="Katalogni qidirish" onClick={() => { goTo('catalog'); setTimeout(() => document.getElementById('search-input')?.focus(), 100) }}><Search size={20} /></button>
            <button className="icon-button favorite-shortcut" aria-label="Sevimlilar" onClick={() => { goTo('catalog'); setSearch(''); notify(`${favorites.length} ta sevimli mahsulot`) }}><Heart size={20} /><span className="count-bubble">{favorites.length}</span></button>
            <button className="cart-button" onClick={() => notify(cart.length ? `Savatingizda ${cart.length} ta mahsulot bor` : 'Savatingiz hozircha bo‘sh')}><ShoppingBag size={18} /><span>Savat</span><b>{cart.length}</b></button>
            <button className="icon-button mobile-menu-button" aria-label="Menyuni ochish" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
      </header>

      {activePage === 'home' ? (
        <main>
          <section className="hero page-container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> SIZ UCHUN TANLANDI</div>
              <h1>Har kuni uchun<br />yangi <span>ilhom.</span></h1>
              <p>Sevimli buyumlaringiz, zamonaviy dizayn va kundalik hayotingizga mos tanlovlar — barchasi bir joyda.</p>
              <div className="hero-actions"><button className="primary-button" onClick={scrollToProducts}>Xarid qilish <ArrowRight size={18} /></button><button className="text-button" onClick={() => { goTo('catalog'); setCategory('Barchasi') }}>Katalogni ko‘rish <ArrowDownRight size={17} /></button></div>
              <div className="hero-proof"><div className="avatar-stack"><span>✦</span><span>✿</span><span>◈</span></div><div><strong>1 200+</strong><small>mamnun xaridorlar</small></div><span className="proof-divider" /><div><strong>4.9/5</strong><small>xaridorlar bahosi</small></div></div>
            </div>
            <div className="hero-art">
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="hero-main-image"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=90" alt="Zamonaviy kundalik buyumlar" /></div>
              <div className="floating-note note-top"><span className="note-icon"><Sparkles size={17} /></span><div><b>Yangi topilmalar</b><small>Har hafta yangi tanlov</small></div></div>
              <div className="floating-note note-bottom"><div className="mini-product"><img src={products[1].image} alt="" /></div><div><small>Hafta tanlovi</small><b>{products[1].name}</b><strong>{formatPrice(products[1].price)}</strong></div></div>
              <div className="hero-sticker">JUST<br />FOR YOU<span>✳</span></div>
            </div>
          </section>

          <section className="benefits page-container" aria-label="Do‘kon afzalliklari">
            <div className="benefit"><span className="benefit-icon"><Truck size={21} /></span><div><b>Qulay yetkazish</b><small>Buyurtmangiz oson yetib boradi</small></div></div>
            <div className="benefit"><span className="benefit-icon"><ShieldCheck size={21} /></span><div><b>Ishonchli tanlov</b><small>Sifatga e’tibor bilan</small></div></div>
            <div className="benefit"><span className="benefit-icon"><PackageCheck size={21} /></span><div><b>Ehtiyotkor qadoq</b><small>Har bir detal muhim</small></div></div>
            <div className="benefit"><span className="benefit-icon"><Headphones size={21} /></span><div><b>Yordam xizmati</b><small>Savollaringizga javob beramiz</small></div></div>
          </section>

          <section className="featured-section page-container">
            <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SIZGA YOQISHI MUMKIN</div><h2>Ommabop mahsulotlar<span>.</span></h2><p>Har kuni ishlatadigan buyumlar orasidan tanlangan sevimlilar.</p></div><button className="outline-button" onClick={() => goTo('catalog')}>Barcha mahsulotlar <ArrowRight size={17} /></button></div>
            <div className="product-grid">
              {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)} onToggleFavorite={toggleFavorite} onAddToCart={addToCart} />)}
            </div>
          </section>
          <section className="collection-banner page-container">
            <div><span className="banner-label">NOVA TANLOVI · 2026</span><h2>Oddiy narsalarda<br /><em>go‘zallik bor.</em></h2><p>Shaxsiy uslubingizni toping — kichik detallar katta farq yaratadi.</p><button className="light-button" onClick={scrollToProducts}>To‘plamni ko‘rish <ArrowRight size={17} /></button></div>
            <div className="banner-image"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85" alt="Minimalistik uy buyumlari" /></div>
            <div className="banner-decoration">N</div>
          </section>
        </main>
      ) : (
        <main className="catalog-page page-container">
          <div className="catalog-breadcrumb"><button onClick={() => goTo('home')}>Bosh sahifa</button><span>/</span><span>Mahsulotlar</span></div>
          <div className="catalog-title-row"><div><div className="eyebrow"><span className="eyebrow-line" /> NOVA KATALOGI</div><h1>Barcha mahsulotlar<span>.</span></h1><p>O‘zingizga mos mahsulotni toping.</p></div><div className="catalog-stat"><b>{filteredProducts.length.toString().padStart(2, '0')}</b><span>mahsulot topildi</span></div></div>
          <div className="catalog-tools"><label className="search-field"><Search size={19} /><input id="search-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Mahsulot nomini qidiring..." /><kbd>⌕</kbd></label><button className="sort-button" onClick={() => { setCategory('Barchasi'); setSearch('') }}>Filtrni tozalash <ChevronDown size={16} /></button></div>
          <div className="category-chips">{categories.map((item) => <button key={item} className={category === item ? 'category-chip selected' : 'category-chip'} onClick={() => setCategory(item)}>{item}</button>)}</div>
          {filteredProducts.length ? <div className="product-grid catalog-grid" id="catalog-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)} onToggleFavorite={toggleFavorite} onAddToCart={addToCart} />)}</div> : <div className="empty-state"><span><Search size={26} /></span><h3>Hech narsa topilmadi</h3><p>Boshqa nom yoki kategoriya bilan qidirib ko‘ring.</p><button className="primary-button" onClick={() => { setSearch(''); setCategory('Barchasi') }}>Barcha mahsulotlar</button></div>}
        </main>
      )}

      <footer className="site-footer"><div className="footer-main page-container"><div className="footer-brand"><button className="brand" onClick={() => goTo('home')}><span className="brand-mark">N</span><span>NOVA<span className="brand-dot">.</span><small>ONLAYN DO‘KON</small></span></button><p>Har kuni uchun qulay va chiroyli tanlovlar.</p></div><div className="footer-links"><b>Bo‘limlar</b><button onClick={() => goTo('home')}>Bosh sahifa</button><button onClick={() => goTo('catalog')}>Mahsulotlar</button><button onClick={() => { goTo('catalog'); setCategory('Uy va dekor') }}>Uy va dekor</button></div><div className="footer-links"><b>Yordam</b><button onClick={() => notify('Yordam uchun: info@nova.uz')}>Bog‘lanish</button><button onClick={() => notify('Yetkazib berish tafsilotlari buyurtma vaqtida aniqlanadi.')}>Yetkazib berish</button><button onClick={() => notify('To‘lov tafsilotlari buyurtma vaqtida aniqlanadi.')}>To‘lov haqida</button></div><div className="footer-newsletter"><b>Yangiliklardan xabardor bo‘ling</b><p>Yangi mahsulotlar va foydali takliflar.</p><form onSubmit={(e) => { e.preventDefault(); notify('Obuna uchun rahmat!'); e.currentTarget.reset() }}><input type="email" placeholder="Email manzilingiz" required aria-label="Email manzilingiz" /><button aria-label="Obuna bo‘lish"><ArrowRight size={18} /></button></form></div></div><div className="footer-bottom page-container"><span>© 2026 NOVA. Barcha huquqlar himoyalangan.</span><span>Mehr bilan yaratilgan <Heart size={13} fill="currentColor" /></span></div></footer>
      {toast && <div className="toast"><span><Check size={16} /></span>{toast}<button onClick={() => setToast('')} aria-label="Xabarni yopish"><X size={15} /></button></div>}
    </div>
  )
}
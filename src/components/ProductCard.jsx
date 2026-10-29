import { Heart, ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
  return (
    <article className="product-card">
      <div className={`product-image ${product.tone}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          aria-label={isFavorite ? 'Sevimlilardan olib tashlash' : 'Sevimlilarga qo‘shish'}
          onClick={() => onToggleFavorite(product.id)}
          type="button"
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span className="rating"><Star size={13} fill="currentColor" /> {product.rating}</span></div>
        <h3>{product.name}</h3>
        <div className="price-row">
          <div><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div>
          <button className="add-button" type="button" onClick={() => onAddToCart(product)} aria-label="Savatga qo‘shish"><ShoppingBag size={17} /></button>
        </div>
      </div>
    </article>
  )
}
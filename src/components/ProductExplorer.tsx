import { useMemo, useState } from 'react';
import type {
  ProductCategory,
  ProductRange,
  ProductRangeId,
  ProductView,
} from '../data/site';

interface ProductExplorerProduct {
  id: string;
  name: string;
  range: ProductRangeId;
  category: ProductCategory;
  shortDescription: string;
  benefits: string[];
  image: string;
  badge?: string;
}

interface ProductExplorerProps {
  ranges: ProductRange[];
  categories: ProductCategory[];
  products: ProductExplorerProduct[];
  whatsappPhone: string;
}

const viewOptions: Array<{ value: ProductView; label: string }> = [
  { value: 'carousel', label: 'Carousel' },
  { value: 'grid', label: 'Grille' },
  { value: 'list', label: 'Liste' },
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const ChevronLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M15 18l-6-6 6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M9 18l6-6-6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const scrollRange = (rangeId: string, direction: 'left' | 'right') => {
  const track = document.getElementById(`track-${rangeId}`);
  if (!track) return;
  track.scrollBy({
    left: direction === 'left' ? -340 : 340,
    behavior: 'smooth',
  });
};

const makeWhatsappHref = (phone: string, product: ProductExplorerProduct) => {
  const message = [
    'Bonjour EREC CAMEROUN,',
    `Je souhaite avoir des informations sur : ${product.name}.`,
    `Gamme : ${product.range}.`,
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const ProductCard = ({
  product,
  rangeLabel,
  view,
  whatsappPhone,
}: {
  product: ProductExplorerProduct;
  rangeLabel: string;
  view: ProductView;
  whatsappPhone: string;
}) => (
  <article className={`product-card ${view === 'list' ? 'product-card-list' : ''}`}>
    {product.badge && <span className="product-badge">{product.badge}</span>}
    <div className="product-card-media">
      <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
    </div>
    <div className="product-card-body">
      <div className="product-meta">
        <span>{rangeLabel}</span>
        <span>{product.category}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <ul className="product-benefits" aria-label={`Bienfaits de ${product.name}`}>
        {product.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <a
        className="button button-dark"
        href={makeWhatsappHref(whatsappPhone, product)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demander
      </a>
    </div>
  </article>
);

const ProductExplorer = ({
  ranges,
  categories,
  products,
  whatsappPhone,
}: ProductExplorerProps) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ProductCategory | 'all'>('all');
  const [view, setView] = useState<ProductView>('carousel');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalize(query);

    return products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const searchSource = normalize(
        [product.name, product.category, product.shortDescription, ...product.benefits].join(' ')
      );
      return matchesCategory && searchSource.includes(normalizedQuery);
    });
  }, [category, products, query]);

  const productsByRange = useMemo(
    () =>
      ranges.map((range) => ({
        range,
        products: filteredProducts.filter((product) => product.range === range.id),
      })),
    [filteredProducts, ranges]
  );

  const totalResults = filteredProducts.length;

  return (
    <section className="section products-section" id="produits" aria-labelledby="products-title">
      <div className="container">
        <div className="products-head">
          <div>
            <span className="section-kicker">Nos Produits</span>
            <h2 className="section-title" id="products-title">
              Trois gammes pour conseiller, vendre et présenter.
            </h2>
            <p className="section-copy">
              Recherchez un produit, filtrez par catégorie ou changez la vue selon votre manière de
              parcourir le catalogue.
            </p>
          </div>

          <div className="product-controls" aria-label="Filtres produits">
            <input
              className="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher par nom ou besoin"
              aria-label="Rechercher un produit"
            />

            <div className="filter-row" aria-label="Catégories">
              <button
                className="chip"
                type="button"
                aria-pressed={category === 'all'}
                onClick={() => setCategory('all')}
              >
                Tous
              </button>
              {categories.map((item) => (
                <button
                  className="chip"
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="view-row" aria-label="Mode d’affichage">
              {viewOptions.map((option) => (
                <button
                  className="view-button"
                  type="button"
                  key={option.value}
                  aria-pressed={view === option.value}
                  onClick={() => setView(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {totalResults === 0 ? (
          <div className="empty-state">Aucun produit ne correspond à cette recherche.</div>
        ) : (
          productsByRange.map(({ range, products: rangeProducts }) => {
            if (rangeProducts.length === 0) return null;

            return (
              <section
                className="range-section"
                id={`gamme-${range.id}`}
                key={range.id}
                aria-labelledby={`title-${range.id}`}
              >
                <div className="range-header">
                  <div>
                    <h3 id={`title-${range.id}`}>{range.label}</h3>
                    <p>{range.summary}</p>
                  </div>

                  {view === 'carousel' && (
                    <div className="carousel-actions" aria-label={`Navigation ${range.label}`}>
                      <button
                        className="icon-button"
                        type="button"
                        onClick={() => scrollRange(range.id, 'left')}
                        aria-label={`Voir les produits précédents de ${range.label}`}
                      >
                        <ChevronLeftIcon />
                      </button>
                      <button
                        className="icon-button"
                        type="button"
                        onClick={() => scrollRange(range.id, 'right')}
                        aria-label={`Voir les produits suivants de ${range.label}`}
                      >
                        <ChevronRightIcon />
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={
                    view === 'carousel'
                      ? 'product-track'
                      : view === 'grid'
                        ? 'product-grid'
                        : 'product-list'
                  }
                  id={view === 'carousel' ? `track-${range.id}` : undefined}
                >
                  {rangeProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      rangeLabel={range.label}
                      view={view}
                      whatsappPhone={whatsappPhone}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ProductExplorer;

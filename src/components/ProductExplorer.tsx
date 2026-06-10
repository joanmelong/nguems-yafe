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
  products: ProductExplorerProduct[];
  whatsappPhone: string;
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const shortRangeLabel = (range: ProductRange) => {
  if (range.id === 'nguems-cosmetics') return "NGUEM'S";
  if (range.id === 'mavela') return 'MAVELA';
  return 'Packaging';
};

const CarouselIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 9v6M21 9v6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.3"
    />
  </svg>
);

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

const viewOptions: Array<{ value: ProductView; label: string; icon: () => JSX.Element }> = [
  { value: 'carousel', label: 'Carousel', icon: CarouselIcon },
  { value: 'grid', label: 'Grille', icon: GridIcon },
  { value: 'list', label: 'Liste', icon: ListIcon },
];

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

const ProductExplorer = ({ ranges, products, whatsappPhone }: ProductExplorerProps) => {
  const [query, setQuery] = useState('');
  const [activeRange, setActiveRange] = useState<ProductRangeId>(ranges[0]?.id || 'nguems-cosmetics');
  const [view, setView] = useState<ProductView>('carousel');

  const activeRangeData = ranges.find((range) => range.id === activeRange) || ranges[0];

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalize(query);

    return products.filter((product) => {
      const matchesRange = product.range === activeRange;
      const searchSource = normalize(
        [product.name, product.category, product.shortDescription, ...product.benefits].join(' ')
      );
      return matchesRange && searchSource.includes(normalizedQuery);
    });
  }, [activeRange, products, query]);

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
              Choisissez une gamme, recherchez un produit et adaptez l’affichage à votre navigation.
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

            <div className="filter-row range-tabs" aria-label="Gammes">
              {ranges.map((range) => (
                <button
                  className="chip"
                  type="button"
                  key={range.id}
                  aria-pressed={activeRange === range.id}
                  onClick={() => setActiveRange(range.id)}
                >
                  {shortRangeLabel(range)}
                </button>
              ))}
            </div>

            <div className="view-row" aria-label="Mode d’affichage">
              {viewOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    className="view-button view-button-icon"
                    type="button"
                    key={option.value}
                    aria-pressed={view === option.value}
                    aria-label={`Vue ${option.label}`}
                    title={option.label}
                    onClick={() => setView(option.value)}
                  >
                    <Icon />
                    <span className="sr-only">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {activeRangeData && (
          <section
            className="range-section"
            id={`gamme-${activeRangeData.id}`}
            aria-labelledby={`title-${activeRangeData.id}`}
          >
            <div className="range-header">
              <div>
                <h3 id={`title-${activeRangeData.id}`}>{activeRangeData.label}</h3>
                <p>{activeRangeData.summary}</p>
              </div>

              {view === 'carousel' && totalResults > 0 && (
                <div className="carousel-actions" aria-label={`Navigation ${activeRangeData.label}`}>
                  <button
                    className="icon-button"
                    type="button"
                    onClick={() => scrollRange(activeRangeData.id, 'left')}
                    aria-label={`Voir les produits précédents de ${activeRangeData.label}`}
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    className="icon-button"
                    type="button"
                    onClick={() => scrollRange(activeRangeData.id, 'right')}
                    aria-label={`Voir les produits suivants de ${activeRangeData.label}`}
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              )}
            </div>

            {totalResults === 0 ? (
              <div className="empty-state">Aucun produit ne correspond à cette recherche.</div>
            ) : (
              <div
                className={
                  view === 'carousel'
                    ? 'product-track'
                    : view === 'grid'
                      ? 'product-grid'
                      : 'product-list'
                }
                id={view === 'carousel' ? `track-${activeRangeData.id}` : undefined}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    rangeLabel={shortRangeLabel(activeRangeData)}
                    view={view}
                    whatsappPhone={whatsappPhone}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </section>
  );
};

export default ProductExplorer;

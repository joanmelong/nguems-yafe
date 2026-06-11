import type { ImageMetadata } from 'astro';
import heroSectionImage from '../assets/site/hero-section.jpeg';
import apres0 from '../assets/site/apres/apres-0.jpeg';
import apres1 from '../assets/site/apres/apres-1.jpeg';
import apres2 from '../assets/site/apres/apres-2.jpeg';
import apres3 from '../assets/site/apres/apres-3.jpeg';
import apres4 from '../assets/site/apres/apres-4.jpeg';
import apres5 from '../assets/site/apres/apres-5.jpeg';
import avant0 from '../assets/site/avant/avant-0.jpeg';
import avant1 from '../assets/site/avant/avant-1.jpeg';
import avant2 from '../assets/site/avant/avant-2.jpeg';
import avant3 from '../assets/site/avant/avant-3.jpeg';
import avant4 from '../assets/site/avant/avant-4.jpeg';
import avant5 from '../assets/site/avant/avant-5.jpeg';
import mavelaDetox from '../assets/site/mavela/mavela-detox-et-bien-etre.jpeg';
import mavelaHibiscus from '../assets/site/mavela/mavela-hibiscus-canelle.jpeg';
import mavelaOkumZon from '../assets/site/mavela/mavela-okum-zon.jpeg';
import nguemsCream from '../assets/site/nguems/Creme-clarifiante.jpeg';
import nguemsLotion from '../assets/site/nguems/lait-corporel-hydratant.png';
import nguemsPack from '../assets/site/nguems/pack-nguems.jpeg';
import nguemsPackSmall from '../assets/site/nguems/pack-nguems-300ml.jpeg';
import packaging0 from '../assets/site/packaging/packaging-0.jpeg';
import packaging1 from '../assets/site/packaging/packaging-1.jpeg';
import packaging2 from '../assets/site/packaging/packaging-2.jpeg';
import packaging3 from '../assets/site/packaging/packaging-3.jpeg';
import packaging4 from '../assets/site/packaging/packaging-4.jpeg';
import packaging5 from '../assets/site/packaging/packaging-5.jpeg';
import packaging6 from '../assets/site/packaging/packaging-6.jpeg';
import packaging7 from '../assets/site/packaging/packaging-7.jpeg';
import packaging8 from '../assets/site/packaging/packaging-8.jpeg';

export type ProductRangeId = 'nguems-cosmetics' | 'mavela' | 'packaging' | 'formations-erec';
export type ProductCategory =
  | 'lait'
  | 'savon'
  | 'creme'
  | 'gel-douche'
  | 'packs'
  | 'the'
  | 'tisane'
  | 'packaging'
  | 'formation';
export type ProductView = 'carousel' | 'grid' | 'list';
export type SalesPointCategoryId = 'nguems-mavela' | 'materiel-esthetique';

export interface ProductRange {
  id: ProductRangeId;
  label: string;
  summary: string;
}

export interface Product {
  id: string;
  name: string;
  range: ProductRangeId;
  category: ProductCategory;
  shortDescription: string;
  benefits: string[];
  image: ImageMetadata;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  value: string;
  quote: string;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
}

export interface SalesPoint {
  id: string;
  country: string;
  city: string;
  name: string;
  address: string;
  details: string;
  phones: string[];
  categories: SalesPointCategoryId[];
}

export interface SalesPointCategory {
  id: SalesPointCategoryId;
  label: string;
  summary: string;
}

export interface PromoteInfo {
  title: string;
  venue: string;
  boothStatus: string;
  description: string;
  gallery: ImageMetadata[];
}

export const siteMeta = {
  title: 'EREC CAMEROUN - Bien-être et esthétique',
  description:
    "EREC CAMEROUN accompagne votre bien-être et votre esthétique avec NGUEM'S Cosmetics, MAVELA, ses formations et ses solutions packaging au Cameroun.",
  brand: 'EREC CAMEROUN',
  subtitle: 'VOTRE PARTENAIRE EN BIEN ETRE ET ESTHETIQUE',
  news:
    'EREC CAMEROUN A OUVERT A ETOUDI. VENEZ DECOUVRIR NOTRE NOUVELLE BOUTIQUE !!!',
};

export const heroVisual = {
  image: heroSectionImage,
  alt: 'Dame présentant le lait de toilette EREC CAMEROUN',
};

export const navItems = [
  { label: 'Qui sommes-nous ?', href: '#qui-sommes-nous' },
  {
    label: 'Nos Produits',
    href: '#produits',
    children: [
      { label: "Gamme NGUEM'S Cosmetics", href: '#gamme-nguems-cosmetics' },
      { label: 'MAVELA', href: '#gamme-mavela' },
      { label: 'Packaging', href: '#gamme-packaging' },
      { label: 'Institut & Formations EREC', href: '#gamme-formations-erec' },
    ],
  },
  { label: 'Témoignage', href: '#temoignages' },
  { label: 'Promote', href: '#promote' },
  { label: 'Contact', href: '#contact' },
];

export const productRanges: ProductRange[] = [
  {
    id: 'nguems-cosmetics',
    label: "Gamme NGUEM'S Cosmetics",
    summary: 'Soins du corps et du visage pensés pour les routines beauté du quotidien.',
  },
  {
    id: 'mavela',
    label: 'MAVELA',
    summary: 'Thés et tisanes bien-être pour accompagner les routines internes et beauté.',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    summary:
      'Solutions de présentation et conditionnement pour marques, boutiques et revendeurs.',
  },
  {
    id: 'formations-erec',
    label: 'Institut & Formations EREC',
    summary:
      'Parcours de formation en esthétique, cosmétique et coiffure pour apprendre les gestes professionnels.',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  lait: 'Lait',
  savon: 'Savon',
  creme: 'Crème',
  'gel-douche': 'Gel douche',
  packs: 'Packs',
  the: 'Thé',
  tisane: 'Tisane',
  packaging: 'Packaging',
  formation: 'Formation',
};

export const products: Product[] = [
  {
    id: 'nguems-lait-hydratant',
    name: "Lait corporel hydratant NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'lait',
    shortDescription:
      'Hydratation quotidienne à la texture légère pour une peau douce et lumineuse.',
    benefits: ['Hydratation', 'Confort', 'Routine quotidienne'],
    image: nguemsLotion,
    badge: 'Best seller',
  },
  {
    id: 'nguems-creme-clarifiante',
    name: "Crème visage clarifiante NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'creme',
    shortDescription:
      "Soin visage pour accompagner l'éclat naturel et l'uniformité du teint.",
    benefits: ['Eclat', 'Teint unifié', 'Texture douce'],
    image: nguemsCream,
  },
  {
    id: 'nguems-savon-soin',
    name: "Savon soin NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'savon',
    shortDescription:
      'Nettoyage simple et efficace pour préparer la peau avant les soins.',
    benefits: ['Nettoyage', 'Fraîcheur', 'Usage quotidien'],
    image: nguemsPackSmall,
  },
  {
    id: 'nguems-pack-routine',
    name: "Pack routine NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'packs',
    shortDescription:
      "Une routine complète pour découvrir les essentiels NGUEM'S Cosmetics.",
    benefits: ['Routine complète', 'Offre découverte', 'Conseil en boutique'],
    image: nguemsPack,
    badge: 'Pack',
  },
  {
    id: 'mavela-detox-bien-etre',
    name: 'MAVELA Détox et bien-être',
    range: 'mavela',
    category: 'tisane',
    shortDescription:
      'Infusion bien-être pensée pour accompagner les routines naturelles du quotidien.',
    benefits: ['Détox', 'Bien-être', 'Routine interne'],
    image: mavelaDetox,
    badge: 'MAVELA',
  },
  {
    id: 'mavela-hibiscus-cannelle',
    name: 'MAVELA Hibiscus Cannelle',
    range: 'mavela',
    category: 'the',
    shortDescription:
      'Association hibiscus et cannelle pour une boisson aromatique et réconfortante.',
    benefits: ['Hibiscus', 'Cannelle', 'Saveur chaude'],
    image: mavelaHibiscus,
  },
  {
    id: 'mavela-okum-zon',
    name: 'MAVELA Okum Zon',
    range: 'mavela',
    category: 'tisane',
    shortDescription:
      'Tisane de caractère pour compléter une approche bien-être simple et locale.',
    benefits: ['Plantes', 'Bien-être', 'Made in Cameroon'],
    image: mavelaOkumZon,
  },
  {
    id: 'packaging-0',
    name: 'Packaging cosmétique 01',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Solution de conditionnement pour présenter les soins en boutique ou en coffret.',
    benefits: ['Présentation', 'Stockage', 'Revente'],
    image: packaging0,
    badge: 'B2B',
  },
  {
    id: 'packaging-1',
    name: 'Packaging cosmétique 02',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Format pratique pour marques, revendeurs et créations de routines beauté.',
    benefits: ['Format boutique', 'Etiquetage', 'Vitrine'],
    image: packaging1,
  },
  {
    id: 'packaging-2',
    name: 'Packaging cosmétique 03',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Support de présentation pour valoriser crèmes, laits, savons et packs.',
    benefits: ['Mise en valeur', 'Protection', 'Cadeaux'],
    image: packaging2,
  },
  {
    id: 'packaging-3',
    name: 'Packaging cosmétique 04',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Conditionnement sobre pour organiser les produits et faciliter la vente.',
    benefits: ['Organisation', 'Rayon', 'Distribution'],
    image: packaging3,
  },
  {
    id: 'packaging-4',
    name: 'Packaging cosmétique 05',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Packaging adapté aux besoins des boutiques, instituts et jeunes marques.',
    benefits: ['Institut', 'Boutique', 'Marque'],
    image: packaging4,
  },
  {
    id: 'packaging-5',
    name: 'Packaging cosmétique 06',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Présentation compacte pour construire des offres claires et professionnelles.',
    benefits: ['Professionnel', 'Compact', 'Offre'],
    image: packaging5,
  },
  {
    id: 'packaging-6',
    name: 'Packaging cosmétique 07',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Conditionnement pensé pour les routines prêtes à vendre et les coffrets.',
    benefits: ['Coffret', 'Routine', 'Revente'],
    image: packaging6,
  },
  {
    id: 'packaging-7',
    name: 'Packaging cosmétique 08',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Solution visuelle pour mettre en avant les gammes en point de vente.',
    benefits: ['Visibilité', 'Point de vente', 'Gamme'],
    image: packaging7,
  },
  {
    id: 'packaging-8',
    name: 'Packaging cosmétique 09',
    range: 'packaging',
    category: 'packaging',
    shortDescription:
      'Option packaging pour accompagner les lancements et réassorts produits.',
    benefits: ['Lancement', 'Réassort', 'Distribution'],
    image: packaging8,
  },
  {
    id: 'formation-esthetique',
    name: 'Formation en esthétique',
    range: 'formations-erec',
    category: 'formation',
    shortDescription:
      "Programme pratique pour apprendre les soins, l'accueil client et les bases d'un institut.",
    benefits: ['Soins visage', 'Pratique encadrée', 'Attestation'],
    image: avant0,
    badge: 'Institut',
  },
  {
    id: 'formation-cosmetique',
    name: 'Formation en cosmétique',
    range: 'formations-erec',
    category: 'formation',
    shortDescription:
      'Initiation aux routines, aux produits et aux conseils adaptés aux besoins de la peau.',
    benefits: ['Conseil produit', 'Routines beauté', 'Approche terrain'],
    image: apres0,
  },
  {
    id: 'formation-coiffure',
    name: 'Formation en coiffure',
    range: 'formations-erec',
    category: 'formation',
    shortDescription:
      'Formation orientée gestes de base, hygiène, finition et service client en salon.',
    benefits: ['Gestes techniques', 'Hygiène', 'Service salon'],
    image: avant1,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'bien-etre-0',
    name: 'Noelle, esthéticienne',
    location: 'Nkolbisson',
    value: 'Bien-être',
    quote:
      "J'ai découvert une routine plus simple, avec des conseils précis pour ma peau.",
    beforeImage: avant0,
    afterImage: apres0,
  },
  {
    id: 'made-in-cameroon-1',
    name: 'Cliente partenaire',
    location: 'Etoudi',
    value: 'Made in Cameroon',
    quote:
      'Les produits locaux sont mieux compris quand ils sont accompagnés par une équipe disponible.',
    beforeImage: avant1,
    afterImage: apres1,
  },
  {
    id: 'esthetique-2',
    name: 'Cliente boutique',
    location: 'Yaoundé',
    value: 'Esthétique',
    quote:
      "'J\'ai pris pour moi hier🥰 Je suis de plus en plus satisfaite! Je peux même déjà faire le shooting 😄😄",
    beforeImage: avant2,
    afterImage: apres2,
  },
  {
    id: 'routine-3',
    name: 'Cliente NGUEM’S',
    location: 'Douala',
    value: 'Routine beauté',
    quote:
      'Les conseils en point de vente rendent le choix des soins beaucoup plus facile.',
    beforeImage: avant3,
    afterImage: apres3,
  },
  {
    id: 'accompagnement-4',
    name: 'Revendeuse',
    location: 'Bafoussam',
    value: 'Accompagnement',
    quote:
      'Après 3 semaines d\'utilisation de la marque NGUEM\'S COSMETICS. Hallucinant',
    beforeImage: avant4,
    afterImage: apres4,
  },
  {
    id: 'formation-5',
    name: 'Nina, étudiante',
    location: 'Belgique',
    value: 'Routine beauté',
    quote:
      "Merci beaucoup la crème du visage, le résultat est impeccable😍 C'est le meilleur produit pour le visage.",
    beforeImage: avant5,
    afterImage: apres5,
  },
];

export const salesPointCategories: SalesPointCategory[] = [
  {
    id: 'nguems-mavela',
    label: "NGUEM'S & MAVELA",
    summary: 'Produits de soins, routines beauté et commandes des gammes distribuées par EREC.',
  },
  {
    id: 'materiel-esthetique',
    label: "Matériel d'esthétique",
    summary: 'Orientation, réservation et matériel pour instituts, apprenants et professionnels.',
  },
];

export const salesDistributionNote =
  'Nous restons ouverts pour tout besoin de distribution.';

export const salesPoints: SalesPoint[] = [
  {
    id: 'erec-etoudi',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Nouvelle boutique EREC Etoudi',
    address: 'Etoudi',
    details: 'Boutique ouverte pour les achats, conseils produits, formations et commandes.',
    phones: ['658982867'],
    categories: ['nguems-mavela', 'materiel-esthetique'],
  },
  {
    id: 'pharmacie-brique-playce',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Supermarché Carrefour',
    address: 'Pharmacie de la Brique Playce',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: [],
    categories: ['nguems-mavela'],
  },
  {
    id: 'marche-central-pharmacie',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Marché central',
    address: 'Face pharmacie du marché',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['697878512'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'mobile-essos-pulcherie',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Mobile Essos',
    address: 'Mini parfumerie Mme Pulcherie',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['698096535'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'entree-marche-essos-florine',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Entrée marché Essos',
    address: 'Parfumerie Mme Florine',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['677214666'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'marche-essos-josiane',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Marché Essos',
    address: 'Parfumerie Josiane',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['672242726'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'tam-tam-merveille-beauty',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Tam-tam',
    address: 'Merveille Beauty',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['694864277'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'rond-point-express-tempest',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Rond point Express',
    address: 'ETS Tempest',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['696015739'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'nsam-escale-tempest',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Carrefour Nsam Escale',
    address: 'ETS Tempest',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['698529817'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'pharmacie-nsam-efoulan',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Pharmacie Nsam Efoulan',
    address: 'Nsam Efoulan',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: [],
    categories: ['nguems-mavela'],
  },
  {
    id: 'montee-jouvence-glamour',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Montée Jouvence',
    address: 'Parfumerie Glamour',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['672258110', '691031817', '696528196'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'marche-mendong-arlice',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Marché Mendong',
    address: 'Parfumerie Arlice',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['680123397'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'damas-myriams',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Damas rond point',
    address: "Parfumerie Myriam's",
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['699764918'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'nkolbisson-krisma',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Nkolbisson carrefour',
    address: 'Krisma Beauty',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['656274482'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'ngoa-ekelle-guyzo',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Ngoa Ekelle',
    address: 'Parfumerie Guyzo',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['654997343'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'mokolo-dubai-market',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Marché Mokolo',
    address: 'Dubaï Market, Boutique A032, Merveille Plus',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['677302296', '694864277'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'titi-garage-body-care',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'Titi Garage',
    address: 'Body Care',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['694134913'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'douala-nyalla',
    country: 'Cameroun',
    city: 'Douala',
    name: 'Nyalla',
    address: 'Douala',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['698374052'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'douala-deido-made-in-cameroun',
    country: 'Cameroun',
    city: 'Douala',
    name: 'Deido',
    address:
      'Vitrine du Made in Cameroun, en face du restaurant KANA, juste après la mairie secondaire de Dla 1er',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: [],
    categories: ['nguems-mavela'],
  },
  {
    id: 'nkonssamba',
    country: 'Cameroun',
    city: 'Nkonssamba',
    name: 'Point de vente Nkonssamba',
    address: 'Nkonssamba',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['697850612'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'buea',
    country: 'Cameroun',
    city: 'Buea',
    name: 'Point de vente Buea',
    address: 'Buea',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['677272119'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'maroua-tradex-pont-vert',
    country: 'Cameroun',
    city: 'Maroua',
    name: 'Tradex Pont Vert',
    address: 'Maroua',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['696168092'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'dschang',
    country: 'Cameroun',
    city: 'Dschang',
    name: 'Point de vente Dschang',
    address: 'Dschang',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['681524840'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'bafoussam-marche-a-1',
    country: 'Cameroun',
    city: 'Bafoussam',
    name: 'Marché A',
    address: 'Bafoussam',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['699797071'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'bafoussam-marche-a-2',
    country: 'Cameroun',
    city: 'Bafoussam',
    name: 'Marché A',
    address: 'Bafoussam',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['655619318'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'bafoussam-marche-b',
    country: 'Cameroun',
    city: 'Bafoussam',
    name: 'Marché B',
    address: 'Bafoussam',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['674572067'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'mbouda',
    country: 'Cameroun',
    city: 'Mbouda',
    name: 'Point de vente Mbouda',
    address: 'Mbouda',
    details: 'Point de vente NGUEM’S & MAVELA.',
    phones: ['697839448'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'cote-divoire',
    country: "Côte d'Ivoire",
    city: "Côte d'Ivoire",
    name: "Distribution Côte d'Ivoire",
    address: "Côte d'Ivoire",
    details: 'Contact distribution NGUEM’S & MAVELA.',
    phones: ['+225078148997'],
    categories: ['nguems-mavela'],
  },
  {
    id: 'promote',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: 'PROMOTE 2026',
    address: 'Palais des Congrès de Yaoundé',
    details: 'Stand EREC à confirmer dès attribution officielle.',
    phones: [],
    categories: ['nguems-mavela', 'materiel-esthetique'],
  },
  {
    id: 'materiel-etoudi',
    country: 'Cameroun',
    city: 'Yaoundé',
    name: "Matériel d'esthétique à Etoudi",
    address: 'Boutique EREC Etoudi',
    details: "Point d'information pour le matériel, les formations et les besoins institut.",
    phones: [],
    categories: ['materiel-esthetique'],
  },
];

export const promoteInfo: PromoteInfo = {
  title: 'Où nous trouver à PROMOTE 2026',
  venue: 'Palais des Congrès de Yaoundé',
  boothStatus: 'Stand EREC à confirmer',
  description:
    "Retrouvez EREC CAMEROUN pour découvrir les gammes NGUEM'S Cosmetics, MAVELA, les formations et les solutions packaging.",
  gallery: [heroSectionImage, nguemsPack, mavelaDetox, packaging0, packaging4, packaging8],
};

export const contact = {
  phone: '237659980315',
  whatsappMessage:
    'Bonjour EREC CAMEROUN, je souhaite avoir des informations sur vos produits.',
  email: 'contact@erec-cameroun.cm',
};

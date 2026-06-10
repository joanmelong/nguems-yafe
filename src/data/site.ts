import type { ImageMetadata } from 'astro';
import creamImage from '../assets/products/creme-clarifiante.jpeg';
import lotionImage from '../assets/products/lait-corporel-hydratant.png';
import packImage from '../assets/products/pack-nguems.jpeg';
import packSmallImage from '../assets/products/pack-nguems-300ml.jpeg';

export type ProductRangeId = 'nguems-cosmetics' | 'mavela' | 'packaging';
export type ProductCategory = 'lait' | 'savon' | 'crème' | 'gel douche' | 'packs';
export type ProductView = 'carousel' | 'grid' | 'list';

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
  name: string;
  address: string;
  details: string;
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
    'EREC CAMEROUN accompagne votre bien-être et votre esthétique avec NGUEM’S Cosmetics, MAVELA et des solutions packaging au Cameroun.',
  brand: 'EREC CAMEROUN',
  subtitle: 'VOTRE PARTENAIRE EN BIEN ETRE ET ESTHETIQUE',
  news:
    'EREC CAMEROUN A OUVERT A ETOUDI. VENEZ DECOUVRIR NOTRE NOUVELLE BOUTIQUE !!!',
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
    summary:
      'Soins du corps et du visage pensés pour les routines beauté du quotidien.',
  },
  {
    id: 'mavela',
    label: 'MAVELA',
    summary:
      'Sélection bien-être et esthétique pour compléter les besoins de votre peau.',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    summary:
      'Solutions de présentation et conditionnement pour marques, boutiques et revendeurs.',
  },
];

export const productCategories: ProductCategory[] = [
  'lait',
  'savon',
  'crème',
  'gel douche',
  'packs',
];

export const products: Product[] = [
  {
    id: 'nguems-lait-hydratant',
    name: "Lait corporel hydratant NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'lait',
    shortDescription:
      'Hydratation quotidienne à la texture légère pour une peau douce et lumineuse.',
    benefits: ['Hydratation', 'Confort', 'Routine quotidienne'],
    image: lotionImage,
    badge: 'Best seller',
  },
  {
    id: 'nguems-creme-clarifiante',
    name: "Crème visage clarifiante NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'crème',
    shortDescription:
      'Soin visage pour accompagner l’éclat naturel et l’uniformité du teint.',
    benefits: ['Eclat', 'Teint unifié', 'Texture douce'],
    image: creamImage,
  },
  {
    id: 'nguems-savon-soin',
    name: "Savon soin NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'savon',
    shortDescription:
      'Nettoyage simple et efficace pour préparer la peau avant les soins.',
    benefits: ['Nettoyage', 'Fraîcheur', 'Usage quotidien'],
    image: packSmallImage,
  },
  {
    id: 'nguems-pack-routine',
    name: "Pack routine NGUEM'S",
    range: 'nguems-cosmetics',
    category: 'packs',
    shortDescription:
      'Une routine complète pour découvrir les essentiels NGUEM’S Cosmetics.',
    benefits: ['Routine complète', 'Offre découverte', 'Conseil en boutique'],
    image: packImage,
    badge: 'Pack',
  },
  {
    id: 'mavela-lait-douceur',
    name: 'MAVELA Lait douceur',
    range: 'mavela',
    category: 'lait',
    shortDescription:
      'Lait de soin pour garder la peau souple après la douche.',
    benefits: ['Douceur', 'Souplesse', 'Confort'],
    image: lotionImage,
  },
  {
    id: 'mavela-gel-douche',
    name: 'MAVELA Gel douche',
    range: 'mavela',
    category: 'gel douche',
    shortDescription:
      'Gel douche parfumé pour une sensation nette et fraîche.',
    benefits: ['Fraîcheur', 'Parfum', 'Nettoyage'],
    image: creamImage,
  },
  {
    id: 'mavela-creme-main',
    name: 'MAVELA Crème mains',
    range: 'mavela',
    category: 'crème',
    shortDescription:
      'Soin pratique pour les mains exposées et les peaux sèches.',
    benefits: ['Protection', 'Hydratation', 'Format pratique'],
    image: packSmallImage,
  },
  {
    id: 'mavela-pack-decouverte',
    name: 'MAVELA Pack découverte',
    range: 'mavela',
    category: 'packs',
    shortDescription:
      'Assortiment de produits pour tester la gamme MAVELA.',
    benefits: ['Découverte', 'Assortiment', 'Cadeau'],
    image: packImage,
    badge: 'Nouveau',
  },
  {
    id: 'packaging-flacon-lait',
    name: 'Flacons pour lait corporel',
    range: 'packaging',
    category: 'lait',
    shortDescription:
      'Conditionnement propre pour les laits, lotions et soins corporels.',
    benefits: ['Présentation', 'Stockage', 'Revente'],
    image: lotionImage,
  },
  {
    id: 'packaging-pot-creme',
    name: 'Pots pour crème',
    range: 'packaging',
    category: 'crème',
    shortDescription:
      'Pots adaptés aux crèmes visage, soins mains et textures épaisses.',
    benefits: ['Fermeture stable', 'Format boutique', 'Etiquetage'],
    image: creamImage,
  },
  {
    id: 'packaging-coffret',
    name: 'Coffrets et packs',
    range: 'packaging',
    category: 'packs',
    shortDescription:
      'Supports de présentation pour composer des offres et coffrets cadeaux.',
    benefits: ['Mise en valeur', 'Cadeaux', 'Vitrine'],
    image: packImage,
    badge: 'B2B',
  },
  {
    id: 'packaging-savon',
    name: 'Emballages savon',
    range: 'packaging',
    category: 'savon',
    shortDescription:
      'Packaging simple pour savons artisanaux et produits de soin.',
    benefits: ['Protection', 'Marque', 'Rayon'],
    image: packSmallImage,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'bien-etre',
    name: 'Cliente EREC',
    location: 'Yaoundé',
    value: 'Bien-être',
    quote:
      'J’ai découvert une routine plus simple, avec des conseils précis pour ma peau.',
    beforeImage: creamImage,
    afterImage: lotionImage,
  },
  {
    id: 'made-in-cameroon',
    name: 'Revendeuse partenaire',
    location: 'Etoudi',
    value: 'Made in Cameroon',
    quote:
      'Les clientes apprécient de trouver des produits locaux bien présentés et accessibles.',
    beforeImage: packSmallImage,
    afterImage: packImage,
  },
  {
    id: 'esthetique',
    name: 'Cliente boutique',
    location: 'Yaoundé',
    value: 'Esthétique',
    quote:
      'L’équipe prend le temps d’orienter chaque personne vers une routine adaptée.',
    beforeImage: lotionImage,
    afterImage: creamImage,
  },
];

export const salesPoints: SalesPoint[] = [
  {
    id: 'etoudi',
    name: 'Nouvelle boutique EREC Etoudi',
    address: 'Etoudi, Yaoundé',
    details: 'Boutique ouverte pour les achats, conseils produits et commandes.',
  },
  {
    id: 'promote',
    name: 'PROMOTE 2026',
    address: 'Palais des Congrès de Yaoundé',
    details: 'Stand EREC à confirmer dès attribution officielle.',
  },
  {
    id: 'whatsapp',
    name: 'Commandes WhatsApp',
    address: 'Livraison et orientation à distance',
    details: 'Contact direct pour disponibilité, prix et conseils.',
  },
];

export const promoteInfo: PromoteInfo = {
  title: 'Où nous trouver à PROMOTE 2026',
  venue: 'Palais des Congrès de Yaoundé',
  boothStatus: 'Stand EREC à confirmer',
  description:
    'Retrouvez EREC CAMEROUN pour découvrir les gammes NGUEM’S Cosmetics, MAVELA et les solutions packaging.',
  gallery: [packImage, lotionImage, creamImage, packSmallImage],
};

export const contact = {
  phone: '237659980315',
  whatsappMessage:
    'Bonjour EREC CAMEROUN, je souhaite avoir des informations sur vos produits.',
  email: 'contact@erec-cameroun.cm',
};

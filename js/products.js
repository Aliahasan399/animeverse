/* ============================================================
   AnimeVerse — Product Database
   36 products across 6 categories: Figures, Apparel, Manga,
   Accessories, Posters, Plushies
   ============================================================ */

const PRODUCTS = [
  // ─── FIGURES ──────────────────────────────────────────────
  {
    id: 1,
    name: 'Naruto Uzumaki — Sage Mode',
    series: 'Naruto Shippuden',
    category: 'Figures',
    price: 49.99,
    originalPrice: 64.99,
    image: 'https://placehold.co/400x400/1a1a2e/a29bfe?text=Naruto+Sage&font=raleway',
    rating: 4.8,
    reviews: 245,
    badge: 'hot',
    description: 'Premium PVC figure of Naruto in Sage Mode, 22cm tall with detachable accessories.'
  },
  {
    id: 2,
    name: 'Goku Ultra Instinct',
    series: 'Dragon Ball Super',
    category: 'Figures',
    price: 59.99,
    image: 'https://placehold.co/400x400/1a1a2e/fd79a8?text=Goku+UI&font=raleway',
    rating: 4.9,
    reviews: 312,
    badge: 'new',
    description: 'Masterlise figure of Goku in Ultra Instinct form, dynamic pose with aura effect.'
  },
  {
    id: 3,
    name: 'Levi Ackerman — Nendoroid',
    series: 'Attack on Titan',
    category: 'Figures',
    price: 44.99,
    image: 'https://placehold.co/400x400/1a1a2e/6c5ce7?text=Levi+Nendo&font=raleway',
    rating: 4.7,
    reviews: 189,
    badge: '',
    description: 'Nendoroid figure of Captain Levi with interchangeable face plates and ODM gear.'
  },
  {
    id: 4,
    name: 'Monkey D. Luffy — Gear 5',
    series: 'One Piece',
    category: 'Figures',
    price: 54.99,
    originalPrice: 69.99,
    image: 'https://placehold.co/400x400/1a1a2e/fdcb6e?text=Luffy+G5&font=raleway',
    rating: 4.9,
    reviews: 278,
    badge: 'sale',
    description: 'Banpresto figure of Luffy in Gear 5 with white hair and awakened form details.'
  },
  {
    id: 5,
    name: 'Gojo Satoru — SEATED',
    series: 'Jujutsu Kaisen',
    category: 'Figures',
    price: 39.99,
    image: 'https://placehold.co/400x400/1a1a2e/81ecec?text=Gojo&font=raleway',
    rating: 4.6,
    reviews: 167,
    badge: 'hot',
    description: 'Seated figure of Gojo Satoru with blindfold and casual pose.'
  },
  {
    id: 6,
    name: 'Mikasa Ackerman — Statue',
    series: 'Attack on Titan',
    category: 'Figures',
    price: 69.99,
    image: 'https://placehold.co/400x400/1a1a2e/dfe6e9?text=Mikasa&font=raleway',
    rating: 4.7,
    reviews: 134,
    badge: '',
    description: 'Premium scale figure of Mikasa armed with blades, 25cm tall on a survey corps base.'
  },

  // ─── APPAREL ──────────────────────────────────────────────
  {
    id: 7,
    name: 'Akatsuki Cloud Hoodie',
    series: 'Naruto Shippuden',
    category: 'Apparel',
    price: 39.99,
    image: 'https://placehold.co/400x400/2d1b3a/a29bfe?text=Akatsuki+Hoodie&font=raleway',
    rating: 4.5,
    reviews: 423,
    badge: 'hot',
    description: 'Black pullover hoodie with embroidered Akatsuki red cloud emblem. Cotton blend.'
  },
  {
    id: 8,
    name: 'Survey Corps Jacket',
    series: 'Attack on Titan',
    category: 'Apparel',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://placehold.co/400x400/2d1b3a/6c5ce7?text=SC+Jacket&font=raleway',
    rating: 4.6,
    reviews: 298,
    badge: 'sale',
    description: 'Official replica of the Survey Corps jacket with Wings of Freedom insignia.'
  },
  {
    id: 9,
    name: 'Demon Slayer Haori',
    series: 'Demon Slayer',
    category: 'Apparel',
    price: 44.99,
    image: 'https://placehold.co/400x400/2d1b3a/fd79a8?text=Haori&font=raleway',
    rating: 4.4,
    reviews: 187,
    badge: 'new',
    description: 'Tanjiro-styled checkered haori in red and green pattern. Lightweight kimono style.'
  },
  {
    id: 10,
    name: 'One Piece Wanted Tee',
    series: 'One Piece',
    category: 'Apparel',
    price: 24.99,
    image: 'https://placehold.co/400x400/2d1b3a/fdcb6e?text=Wanted+Tee&font=raleway',
    rating: 4.3,
    reviews: 512,
    badge: '',
    description: 'Cotton T-shirt featuring the Straw Hat Pirates wanted posters collection.'
  },
  {
    id: 11,
    name: 'Jujutsu High Track Jacket',
    series: 'Jujutsu Kaisen',
    category: 'Apparel',
    price: 49.99,
    image: 'https://placehold.co/400x400/2d1b3a/81ecec?text=JJK+Jacket&font=raleway',
    rating: 4.5,
    reviews: 156,
    badge: 'new',
    description: 'Tokyo Jujutsu High uniform jacket with school crest on the back.'
  },
  {
    id: 12,
    name: 'Genric Anime Beanie',
    series: 'Various',
    category: 'Apparel',
    price: 14.99,
    image: 'https://placehold.co/400x400/2d1b3a/dfe6e9?text=Anime+Beanie&font=raleway',
    rating: 4.0,
    reviews: 89,
    badge: '',
    description: 'Cozy black beanie with embroidered "Otaku" text and small cat ears.'
  },

  // ─── MANGA ────────────────────────────────────────────────
  {
    id: 13,
    name: 'Jujutsu Kaisen Vol. 1',
    series: 'Jujutsu Kaisen',
    category: 'Manga',
    price: 9.99,
    image: 'https://placehold.co/400x400/16213e/81ecec?text=JJK+V1&font=raleway',
    rating: 4.7,
    reviews: 1123,
    badge: 'hot',
    description: 'First volume of Gege Akutami\'s hit series. Contains chapters 1-7.'
  },
  {
    id: 14,
    name: 'Demon Slayer Box Set',
    series: 'Demon Slayer',
    category: 'Manga',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://placehold.co/400x400/16213e/fd79a8?text=DS+Box+Set&font=raleway',
    rating: 4.9,
    reviews: 876,
    badge: 'sale',
    description: 'Complete 23-volume box set of Demon Slayer: Kimetsu no Yaiba.'
  },
  {
    id: 15,
    name: 'Chainsaw Man Vol. 1',
    series: 'Chainsaw Man',
    category: 'Manga',
    price: 9.99,
    image: 'https://placehold.co/400x400/16213e/a29bfe?text=CSM+V1&font=raleway',
    rating: 4.8,
    reviews: 654,
    badge: '',
    description: 'First volume of Tatsuki Fujimoto\'s Chainsaw Man. Blood and chaos ensue.'
  },
  {
    id: 16,
    name: 'One Piece Omnibus 1-3',
    series: 'One Piece',
    category: 'Manga',
    price: 19.99,
    image: 'https://placehold.co/400x400/16213e/fdcb6e?text=OP+Omnibus&font=raleway',
    rating: 4.6,
    reviews: 432,
    badge: '',
    description: 'Three volumes in one — East Blue saga. Romance Dawn to Don Krieg.'
  },
  {
    id: 17,
    name: 'Attack on Titan Vol. 1',
    series: 'Attack on Titan',
    category: 'Manga',
    price: 9.99,
    image: 'https://placehold.co/400x400/16213e/6c5ce7?text=AOT+V1&font=raleway',
    rating: 4.7,
    reviews: 987,
    badge: 'hot',
    description: 'The first volume of Hajime Isayama\'s dark fantasy epic.'
  },
  {
    id: 18,
    name: 'Solo Leveling Vol. 1',
    series: 'Solo Leveling',
    category: 'Manga',
    price: 14.99,
    image: 'https://placehold.co/400x400/16213e/00b894?text=SL+V1&font=raleway',
    rating: 4.9,
    reviews: 1456,
    badge: 'new',
    description: 'Manhwa adaptation of Chugong\'s Solo Leveling. Special cover edition.'
  },

  // ─── ACCESSORIES ──────────────────────────────────────────
  {
    id: 19,
    name: 'Sharingan LED Lamp',
    series: 'Naruto Shippuden',
    category: 'Accessories',
    price: 29.99,
    image: 'https://placehold.co/400x400/1e1e3a/fd79a8?text=Sharingan+Lamp&font=raleway',
    rating: 4.6,
    reviews: 345,
    badge: 'hot',
    description: 'USB-powered LED lamp shaped like Mangekyo Sharingan. Red glow with touch dimmer.'
  },
  {
    id: 20,
    name: 'Pokémon Trainer Wallet',
    series: 'Pokémon',
    category: 'Accessories',
    price: 19.99,
    image: 'https://placehold.co/400x400/1e1e3a/fdcb6e?text=Pokémon+Wallet&font=raleway',
    rating: 4.4,
    reviews: 234,
    badge: '',
    description: 'Vegan leather wallet with Poké Ball embossing and Trainer ID slot.'
  },
  {
    id: 21,
    name: 'Death Note Prop Replica',
    series: 'Death Note',
    category: 'Accessories',
    price: 24.99,
    image: 'https://placehold.co/400x400/1e1e3a/a29bfe?text=Death+Note&font=raleway',
    rating: 4.5,
    reviews: 178,
    badge: '',
    description: 'Full-size Death Note replica with authentic cover texture and lined pages.'
  },
  {
    id: 22,
    name: 'Nezuko Earrings',
    series: 'Demon Slayer',
    category: 'Accessories',
    price: 12.99,
    image: 'https://placehold.co/400x400/1e1e3a/81ecec?text=Earrings&font=raleway',
    rating: 4.3,
    reviews: 567,
    badge: 'new',
    description: 'Gold-plated earrings inspired by Nezuko\'s pink flower accessory.'
  },
  {
    id: 23,
    name: 'Dragon Ball Z Wristband',
    series: 'Dragon Ball Super',
    category: 'Accessories',
    price: 8.99,
    image: 'https://placehold.co/400x400/1e1e3a/6c5ce7?text=DBZ+Band&font=raleway',
    rating: 4.2,
    reviews: 223,
    badge: '',
    description: 'Silicone wristband set with Shenron and Dragon Ball emblem designs.'
  },
  {
    id: 24,
    name: 'Anime Keychain Bundle',
    series: 'Various',
    category: 'Accessories',
    price: 15.99,
    image: 'https://placehold.co/400x400/1e1e3a/dfe6e9?text=Keychains&font=raleway',
    rating: 4.1,
    reviews: 678,
    badge: '',
    description: 'Bundle of 6 acrylic keychains featuring popular anime chibi characters.'
  },

  // ─── POSTERS ──────────────────────────────────────────────
  {
    id: 25,
    name: 'Demon Slayer Movie Poster',
    series: 'Demon Slayer',
    category: 'Posters',
    price: 14.99,
    image: 'https://placehold.co/400x400/0a0a1a/fd79a8?text=Mugen+Train&font=raleway',
    rating: 4.8,
    reviews: 445,
    badge: '',
    description: 'Large A2 poster of the Mugen Train movie artwork. Glossy finish.'
  },
  {
    id: 26,
    name: 'Naruto vs Sasuke — Final Valley',
    series: 'Naruto Shippuden',
    category: 'Posters',
    price: 19.99,
    originalPrice: 24.99,
    image: 'https://placehold.co/400x400/0a0a1a/a29bfe?text=Final+Valley&font=raleway',
    rating: 4.7,
    reviews: 312,
    badge: 'sale',
    description: 'Canvas print of Naruto and Sasuke\'s final clash at the Valley of the End.'
  },
  {
    id: 27,
    name: 'One Piece World Map',
    series: 'One Piece',
    category: 'Posters',
    price: 17.99,
    image: 'https://placehold.co/400x400/0a0a1a/fdcb6e?text=Grand+Line+Map&font=raleway',
    rating: 4.5,
    reviews: 198,
    badge: 'new',
    description: 'Detailed map of the One Piece world — Grand Line, New World, all islands.'
  },
  {
    id: 28,
    name: 'JJK — Gojo & Yuji',
    series: 'Jujutsu Kaisen',
    category: 'Posters',
    price: 12.99,
    image: 'https://placehold.co/400x400/0a0a1a/81ecec?text=Gojo+%26+Yuji&font=raleway',
    rating: 4.6,
    reviews: 267,
    badge: '',
    description: 'A3 poster featuring Gojo and Yuji in action pose. UV-resistant print.'
  },
  {
    id: 29,
    name: 'AOT — Wings of Freedom',
    series: 'Attack on Titan',
    category: 'Posters',
    price: 14.99,
    image: 'https://placehold.co/400x400/0a0a1a/6c5ce7?text=Wings+of+Freedom&font=raleway',
    rating: 4.4,
    reviews: 189,
    badge: '',
    description: 'Minimalist poster of the Survey Corps emblem with typography.'
  },
  {
    id: 30,
    name: 'Studio Ghibli Collection',
    series: 'Ghibli',
    category: 'Posters',
    price: 22.99,
    image: 'https://placehold.co/400x400/0a0a1a/00b894?text=Ghibli+Set&font=raleway',
    rating: 4.9,
    reviews: 723,
    badge: 'hot',
    description: 'Set of 3 A3 posters featuring Spirited Away, Totoro, and Howl\'s Moving Castle.'
  },

  // ─── PLUSHIES ─────────────────────────────────────────────
  {
    id: 31,
    name: 'Pikachu Cuddle Plush',
    series: 'Pokémon',
    category: 'Plushies',
    price: 29.99,
    image: 'https://placehold.co/400x400/1a1a2e/fdcb6e?text=Pikachu&font=raleway',
    rating: 4.9,
    reviews: 1890,
    badge: 'hot',
    description: '30cm super-soft Pikachu plush with embroidered details and chubby cheeks.'
  },
  {
    id: 32,
    name: 'Totoro Sleepy Plush',
    series: 'Ghibli',
    category: 'Plushies',
    price: 34.99,
    image: 'https://placehold.co/400x400/1a1a2e/dfe6e9?text=Totoro&font=raleway',
    rating: 4.8,
    reviews: 1345,
    badge: '',
    description: 'Medium Totoro plush in the classic leaf-on-head sleeping pose.'
  },
  {
    id: 33,
    name: 'Nezuko Chibi Plush',
    series: 'Demon Slayer',
    category: 'Plushies',
    price: 24.99,
    image: 'https://placehold.co/400x400/1a1a2e/fd79a8?text=Nezuko+Plush&font=raleway',
    rating: 4.7,
    reviews: 876,
    badge: 'new',
    description: 'Chibi-style Nezuko plush with bamboo muzzle and pink ribbon. 22cm tall.'
  },
  {
    id: 34,
    name: 'Appa Flying Bison',
    series: 'Avatar',
    category: 'Plushies',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://placehold.co/400x400/1a1a2e/81ecec?text=Appa&font=raleway',
    rating: 4.9,
    reviews: 654,
    badge: 'sale',
    description: 'Large 40cm Appa plush with fluffy fur, leather horns, and saddle detail.'
  },
  {
    id: 35,
    name: 'Kuromi Mini Plush',
    series: 'Sanrio',
    category: 'Plushies',
    price: 16.99,
    image: 'https://placehold.co/400x400/1a1a2e/a29bfe?text=Kuromi&font=raleway',
    rating: 4.5,
    reviews: 445,
    badge: '',
    description: 'Mini Kuromi plush keychain with embroidered face and skull cap.'
  },
  {
    id: 36,
    name: 'Eevee Evolution Set',
    series: 'Pokémon',
    category: 'Plushies',
    price: 54.99,
    image: 'https://placehold.co/400x400/1a1a2e/fdcb6e?text=Eevees&font=raleway',
    rating: 4.8,
    reviews: 567,
    badge: '',
    description: 'Set of 5 mini Eevee evolution plushies in matching display box.'
  },
];

// ─── Helpers ────────────────────────────────────────────
const CATEGORIES = ['Figures', 'Apparel', 'Manga', 'Accessories', 'Posters', 'Plushies'];
const SERIES = [...new Set(PRODUCTS.map(p => p.series))];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(cat) {
  return cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
}

function getProductsBySeries(series) {
  return series === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.series === series);
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.series.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

function getRelatedProducts(product, count = 4) {
  const sameCat = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
  const sameSeries = PRODUCTS.filter(p => p.series === product.series && p.id !== product.id);
  const related = [...new Set([...sameCat, ...sameSeries, ...PRODUCTS])]
    .filter(p => p.id !== product.id)
    .slice(0, count);
  return related;
}

import { Product, IngredientInfo, StepGuide } from '../types';

export const productsData: Product[] = [
  {
    id: 'vendra-herbal-shampoo',
    name: 'Vendra Grow Herbal Shampoo',
    tagline: 'Gently Cleanses & Nourishes the Scalp',
    category: 'shampoo',
    size: '300ml / 10.6 fl oz',
    price: 1199,
    originalPrice: 1500,
    rating: 4.9,
    reviewsCount: 486,
    image: '/images/shampoo-bottle-clean.jpg',
    secondaryImage: '/images/shampoo-adver.jpg',
    badge: 'Bestseller',
    discountBadge: '20% OFF',
    features: [
      'Gently Cleanses & Nourishes Scalp',
      'Promotes Natural Hair Growth',
      'Reduces Hair Fall & Breakage',
      'Enriched with Amla, Reetha & Shikakai',
      'SLES & Paraben Free • 100% Ayurvedic'
    ],
    description: 'An authentic Ayurvedic formulation enriched with Amla, Reetha, and Shikakai. Gently clears away dirt, excess sebum, and flaky buildup without stripping the hair’s natural moisture barrier, leaving strands thicker, soft, and visibly stronger.',
    ingredients: ['Amla Extract', 'Reetha (Soapnut)', 'Shikakai', 'Bhringraj', 'Neem Leaf', 'Aloe Vera'],
    inStock: true
  },
  {
    id: 'vendra-hair-oil',
    name: 'Vendra Grow Natural Hair Oil',
    tagline: 'Deeply Nourishes Scalp & Promotes Growth',
    category: 'oil',
    size: '120ml / 4.0 fl oz',
    price: 899,
    originalPrice: 1125,
    rating: 5.0,
    reviewsCount: 612,
    image: '/images/hair-oil-bottle-green.jpg',
    secondaryImage: '/images/hair-oil-poster.jpg',
    badge: 'Customer Favorite',
    discountBadge: '20% OFF',
    features: [
      'Stops Hair Fall & Promotes Rapid Growth',
      'Deeply Nourishes Scalp & Dormant Roots',
      'Strengthens Hair from Root to Tip',
      '100% Organic, Cold-Pressed Botanicals',
      'Suitable for All Hair & Beard Types'
    ],
    description: 'A deeply penetrating, nutrient-dense hair elixir hand-crafted with pure herbal oils and Ayurvedic extracts. Awakens sleepy follicles, repairs split ends, and seals in moisture for head-turning bounce and glossy shine.',
    ingredients: ['Cold-Pressed Sesame Oil', 'Amla Fruit', 'Shikakai Bark', 'Reetha', 'Bhringraj Herb', 'Red Hibiscus Flowers'],
    inStock: true
  },
  {
    id: 'vendra-growth-kit',
    name: 'Complete Ayurvedic Hair Growth Duo',
    tagline: 'Shampoo (300ml) + Hair Grow Oil (120ml)',
    category: 'bundle',
    size: '2-Piece Intensive Care Set',
    price: 2100,
    originalPrice: 2600,
    rating: 4.95,
    reviewsCount: 894,
    image: '/images/ultimate-bundle-poster.jpg',
    secondaryImage: '/images/model-ingredients-poster.jpg',
    badge: 'Save 20% • Most Recommended',
    discountBadge: '20% OFF',
    features: [
      'Step 1: Nourish — 120ml Natural Hair Grow Oil',
      'Step 2: Cleanse — 300ml Herbal Shampoo',
      'The Ultimate 2-Step Hair Care Routine for Natural Glory',
      'Clinically Observed 87% Hair Fall Reduction',
      'Free Express Delivery & Priority Dispatch'
    ],
    description: 'Experience maximum botanical synergy. Step 1 cleanses away toxins and stimulates microcirculation; Step 2 infuses roots with concentrated plant lipids and Ayurvedic antioxidants for dramatic thickness and sheen.',
    ingredients: ['All 12 Botanical Extracts', 'Zero Sulfates', 'Zero Mineral Oils', 'Zero Artificial Fragrance'],
    inStock: true
  }
];

export const ingredientsData: IngredientInfo[] = [
  {
    name: 'Amla (Indian Gooseberry)',
    role: 'Deep Nourishment & Follicle Tonic',
    description: 'Nature’s richest botanical source of Vitamin C and bioflavonoids. Penetrates cellular layers of the scalp to halt oxidative damage, boost melanin preservation, and supercharge collagen synthesis around weak roots.',
    benefits: ['Stimulates active follicle growth', 'Prevents premature greying', 'Thickens individual hair shafts'],
    ayurvedicNote: 'Considered "Rasayana" (supreme rejuvenator) in classical Ayurvedic texts.',
    iconName: 'Sparkles'
  },
  {
    name: 'Reetha (Soapnut Fruit)',
    role: 'Natural Gentle Cleanser & Scalp Detox',
    description: 'Packed with natural saponins that produce a silky, mild lather. It deeply lifts dirt, stubborn pollution particles, and dead skin cells while preserving the scalp’s acidic mantle and natural protective oils.',
    benefits: ['Non-stripping organic cleanser', 'Fights dandruff, microbes & itching', 'Imparts natural volume and shine'],
    ayurvedicNote: 'The gold-standard Ayurvedic purifying herb for centuries.',
    iconName: 'Droplets'
  },
  {
    name: 'Shikakai (Fruit for Hair)',
    role: 'Root Strengthener & Cuticle Smoother',
    description: 'Acacia Concinna is celebrated for its natural low-pH cleansing astringency and high concentrations of Vitamin A, C, D, E, and K. It seals open hair scales, detangles smoothly, and prevents strand breakage.',
    benefits: ['Reduces split ends and breakage', 'Smoothes rough and frizzy hair', 'Locks in moisture and mirror luster'],
    ayurvedicNote: 'Literally translated from Sanskrit as "fruit for the hair".',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Bhringraj & Red Hibiscus',
    role: 'Follicle Awakening & Root Anchorage',
    description: 'Revered as the "King of Hair" (Keshraj), Bhringraj prolongs the anagen (growth) cycle of hair follicles, while Red Hibiscus blossoms flood roots with amino acids that thicken thinning patches.',
    benefits: ['Anchors roots firmly to the scalp', 'Accelerates new baby hair growth', 'Provides silky conditioning'],
    ayurvedicNote: 'The most potent Ayurvedic herb for combating pattern shedding.',
    iconName: 'Leaf'
  }
];

export const howToUseSteps: StepGuide[] = [
  {
    step: '01',
    title: 'Wet Hair',
    shortDesc: 'Thoroughly wet your hair with lukewarm water.',
    detail: 'Lukewarm water opens the hair cuticles, allowing botanical actives to penetrate deeply and dislodging superficial dust.',
    image: '/images/how-to-use-guide.jpg'
  },
  {
    step: '02',
    title: 'Apply Shampoo',
    shortDesc: 'Take a small amount, gently massage into scalp & hair.',
    detail: 'Pour a coin-sized amount into wet palms, lather slightly, and distribute evenly over the crown, nape, and lengths.',
    image: '/images/how-to-use-guide.jpg'
  },
  {
    step: '03',
    title: 'Massage for 2-3 Mins',
    shortDesc: 'Work into a rich lather for 2 to 3 minutes.',
    detail: 'Gently knead your scalp using finger pads in circular motions. This boosts microcirculation and lets Amla and Reetha absorb.',
    image: '/images/how-to-use-guide.jpg'
  },
  {
    step: '04',
    title: 'Rinse & Repeat',
    shortDesc: 'Rinse thoroughly with water. Use regularly for best results.',
    detail: 'Flush completely with cool water to seal cuticles and enhance natural shine. For best results, use 2-3 times weekly with Vendra Grow Hair Oil.',
    image: '/images/how-to-use-guide.jpg'
  }
];

export const visibleResultsData = [
  {
    condition: 'Dandruff & Scalp Flakes',
    before: 'Excessive white flakes, constant itchiness, and irritated dry scalp.',
    after: '100% flake-free, soothed, balanced scalp with zero irritation.',
    metric: '96% Scalp Relief'
  },
  {
    condition: 'Frizzy, Dry Hair',
    before: 'Rough straw-like texture, flyaways, and dull unmanageable locks.',
    after: 'Ultra-smooth, touchably silky, reflective luster and bounce.',
    metric: '3.4x More Shine'
  },
  {
    condition: 'Hair Fall & Thinning',
    before: 'Clumps of hair in brush, visible widening part line, and weak roots.',
    after: 'Noticeable reduction in hair fall, denser crown, and new baby hair growth.',
    metric: '87% Less Hair Fall'
  },
  {
    condition: 'Weak, Breaking Hair',
    before: 'Brittle ends snapping during styling with rampant split ends.',
    after: 'Elastic, fortified fiber that resists heat and daily brushing.',
    metric: '92% Stronger Strands'
  }
];

export const customerTestimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    location: 'Verified Buyer • Lahore',
    rating: 5,
    title: 'Hair fall stopped in just 2 weeks!',
    review: 'I was losing so much hair post-monsoon. Within 12 days of using Vendra Grow shampoo and oil combo, the shower drain was finally clear. My hair feels twice as dense and so naturally soft!',
    product: 'Complete Ayurvedic Hair Growth Duo',
    date: '3 days ago'
  },
  {
    id: 2,
    name: 'Hamza Farooq',
    location: 'Verified Buyer • Karachi',
    rating: 5,
    title: 'Cleared stubborn dandruff and thickened my hair',
    review: 'Most anti-dandruff shampoos dry out your hair completely. Vendra Grow Herbal Shampoo did the opposite — cleared my flaky scalp in 3 washes while making my hair soft and full. Highly recommended.',
    product: 'Vendra Grow Herbal Shampoo',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Dr. Sana Tariq',
    location: 'Verified Buyer • Islamabad',
    rating: 5,
    title: 'The purest herbal hair oil on the market',
    review: 'As someone who understands herbal pharmacognosy, the formulation of this oil is authentic. You can immediately smell the genuine cold-pressed Amla and Bhringraj without synthetic perfumes. My hair growth has visibly accelerated.',
    product: 'Vendra Grow Natural Hair Oil',
    date: '2 weeks ago'
  }
];

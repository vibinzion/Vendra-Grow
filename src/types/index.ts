export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'shampoo' | 'oil' | 'bundle';
  size: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  badge?: string;
  discountBadge?: string;
  features: string[];
  description: string;
  ingredients: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface IngredientInfo {
  name: string;
  role: string;
  description: string;
  benefits: string[];
  ayurvedicNote: string;
  iconName: string;
}

export interface StepGuide {
  step: string;
  title: string;
  shortDesc: string;
  detail: string;
  image: string;
}

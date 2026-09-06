export type MenuCategory = 'all' | 'dosa' | 'idli' | 'vada' | 'uttapam';

export interface MenuItem {
  id: string;
  name: string;
  category: 'dosa' | 'idli' | 'vada' | 'uttapam';
  price: number;
  description?: string;
  isSpecial?: boolean;
  pieces?: number;
  tags?: string[];
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  subTagline: string;
  domain: string;
  canonicalUrl: string;
  cuisine: string;
  phones: {
    primary: string;
    secondary: string;
    display1: string;
    display2: string;
  };
  whatsapp: {
    number: string;
    message: string;
  };
  address: {
    street: string;
    landmark: string;
    locality: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullFormatted: string;
  };
  mapsUrl: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  fabric: string;
  color: string;
  colors: string[];
  occasion: string;
  rating: number;
  reviews: number;
  stock: number;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED';
  image: string;
  images: string[];
  description: string;
  specifications: {
    fabric: string;
    work: string;
    occasion: string;
    pattern: string;
    blouse: string;
    care: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Blue Banarasi Silk Saree with Golden Zari Work',
    price: 4999,
    mrp: 8999,
    fabric: 'Silk',
    color: 'Blue',
    colors: ['Blue', 'Red', 'Green', 'Purple', 'Maroon'],
    occasion: 'Wedding',
    rating: 4.7,
    reviews: 234,
    stock: 5,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391265762-7a71024e8551?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e6a??w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606993676551-089fef50c1c8?w=600&h=800&fit=crop'
    ],
    description: 'Exquisite Banarasi silk saree featuring intricate golden zari work. Handwoven by skilled artisans from Varanasi, this masterpiece combines traditional craftsmanship with timeless elegance. Perfect for weddings and grand celebrations.',
    specifications: {
      fabric: 'Pure Banarasi Silk',
      work: 'Golden Zari',
      occasion: 'Wedding, Party',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '2',
    name: 'Emerald Green Kanjivaram Silk Saree',
    price: 6999,
    mrp: 12999,
    fabric: 'Silk',
    color: 'Green',
    colors: ['Green', 'Red', 'Blue', 'Gold'],
    occasion: 'Wedding',
    rating: 4.8,
    reviews: 189,
    stock: 8,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1583833753379-140c67f7b1e7?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583833753379-140c67f7b1e7?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1596367407034-61a0d11c43cb?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&h=800&fit=crop'
    ],
    description: 'Premium Kanjivaram silk saree from the temple city. Features traditional South Indian motifs and contrasting border.',
    specifications: {
      fabric: 'Pure Kanjivaram Silk',
      work: 'Temple Border',
      occasion: 'Wedding, Festival',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '3',
    name: 'Soft Pink Cotton Saree with Block Print',
    price: 1299,
    mrp: 2499,
    fabric: 'Cotton',
    color: 'Pink',
    colors: ['Pink', 'Yellow', 'Blue', 'White'],
    occasion: 'Casual',
    rating: 4.5,
    reviews: 456,
    stock: 20,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&h=800&fit=crop'
    ],
    description: 'Comfortable cotton saree perfect for daily wear. Features beautiful hand block printing with natural dyes.',
    specifications: {
      fabric: '100% Cotton',
      work: 'Block Print',
      occasion: 'Casual, Daily Wear',
      pattern: 'Floral',
      blouse: 'Included',
      care: 'Machine wash'
    }
  },
  {
    id: '4',
    name: 'Maroon Designer Georgette Saree with Sequin Work',
    price: 3499,
    mrp: 6999,
    fabric: 'Georgette',
    color: 'Maroon',
    colors: ['Maroon', 'Black', 'Navy', 'Wine'],
    occasion: 'Party',
    rating: 4.6,
    reviews: 312,
    stock: 12,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1629891280726-18be351e1e56?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1629891280726-18be351e1e56?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1632909048995-3ef6e75f0f10?w=600&h=800&fit=crop'
    ],
    description: 'Stunning designer georgette saree with all-over sequin work. Perfect for evening parties and celebrations.',
    specifications: {
      fabric: 'Georgette',
      work: 'Sequin',
      occasion: 'Party, Reception',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '5',
    name: 'Beige Linen Saree with Golden Border',
    price: 1799,
    mrp: 3499,
    fabric: 'Linen',
    color: 'Beige',
    colors: ['Beige', 'Cream', 'Ivory', 'Sand'],
    occasion: 'Office',
    rating: 4.4,
    reviews: 178,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591199854159-0ee909c4e85a?w=600&h=800&fit=crop'
    ],
    description: 'Elegant linen saree perfect for professional settings. Comfortable all-day wear with a touch of sophistication.',
    specifications: {
      fabric: 'Linen',
      work: 'Golden Border',
      occasion: 'Office, Formal',
      pattern: 'Plain',
      blouse: 'Included',
      care: 'Machine wash'
    }
  },
  {
    id: '6',
    name: 'Red Bridal Silk Saree with Heavy Embroidery',
    price: 12999,
    mrp: 24999,
    fabric: 'Silk',
    color: 'Red',
    colors: ['Red', 'Maroon', 'Pink', 'Orange'],
    occasion: 'Wedding',
    rating: 4.9,
    reviews: 87,
    stock: 3,
    badge: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1595735525005-70e29000d59b?w=600&h=800&fit=crop'
    ],
    description: 'Magnificent bridal silk saree with heavy embroidery and stone work. A masterpiece for your special day.',
    specifications: {
      fabric: 'Pure Silk',
      work: 'Embroidery, Stone',
      occasion: 'Wedding, Bridal',
      pattern: 'Bridal',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '7',
    name: 'Teal Blue Chiffon Saree with Pearl Border',
    price: 2499,
    mrp: 4999,
    fabric: 'Chiffon',
    color: 'Blue',
    colors: ['Blue', 'Teal', 'Turquoise', 'Aqua'],
    occasion: 'Party',
    rating: 4.5,
    reviews: 267,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1623915298592-e2fd6a5d0bb1?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1623915298592-e2fd6a5d0bb1?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614729376992-c0a6f464ad09?w=600&h=800&fit=crop'
    ],
    description: 'Lightweight chiffon saree with elegant pearl border. Perfect for evening events and cocktail parties.',
    specifications: {
      fabric: 'Chiffon',
      work: 'Pearl Border',
      occasion: 'Party, Cocktail',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '8',
    name: 'Yellow Cotton Silk Saree with Temple Border',
    price: 2799,
    mrp: 5499,
    fabric: 'Cotton',
    color: 'Yellow',
    colors: ['Yellow', 'Gold', 'Mustard', 'Cream'],
    occasion: 'Festive',
    rating: 4.6,
    reviews: 201,
    stock: 10,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&h=800&fit=crop'
    ],
    description: 'Vibrant cotton silk saree with traditional temple border. Ideal for festive occasions and pujas.',
    specifications: {
      fabric: 'Cotton Silk',
      work: 'Temple Border',
      occasion: 'Festival, Puja',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Hand wash'
    }
  },
  {
    id: '9',
    name: 'Black Art Silk Saree with Gold Print',
    price: 1599,
    mrp: 2999,
    fabric: 'Art Silk',
    color: 'Black',
    colors: ['Black', 'Navy', 'Charcoal', 'Grey'],
    occasion: 'Party',
    rating: 4.3,
    reviews: 389,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1598351462725-a3c0af8b7c3f?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1598351462725-a3c0af8b7c3f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1595965464762-a8e8dd18a26b?w=600&h=800&fit=crop'
    ],
    description: 'Elegant black art silk saree with golden foil print. A timeless choice for evening gatherings.',
    specifications: {
      fabric: 'Art Silk',
      work: 'Foil Print',
      occasion: 'Party, Evening',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Dry clean recommended'
    }
  },
  {
    id: '10',
    name: 'Pastel Green Handloom Cotton Saree',
    price: 999,
    mrp: 1999,
    fabric: 'Cotton',
    color: 'Green',
    colors: ['Green', 'Mint', 'Sage', 'Olive'],
    occasion: 'Casual',
    rating: 4.4,
    reviews: 512,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591199854159-0ee909c4e85a?w=600&h=800&fit=crop'
    ],
    description: 'Soft handloom cotton saree in soothing pastel green. Perfect for everyday comfort and style.',
    specifications: {
      fabric: '100% Cotton',
      work: 'Handloom',
      occasion: 'Casual, Daily',
      pattern: 'Plain',
      blouse: 'Included',
      care: 'Machine wash'
    }
  },
  {
    id: '11',
    name: 'Purple Banarasi Tissue Saree',
    price: 5999,
    mrp: 10999,
    fabric: 'Silk',
    color: 'Purple',
    colors: ['Purple', 'Violet', 'Lavender', 'Plum'],
    occasion: 'Wedding',
    rating: 4.7,
    reviews: 143,
    stock: 6,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1583391265762-7a71024e8551?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583391265762-7a71024e8551?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e6a75?w=600&h=800&fit=crop'
    ],
    description: 'Luxurious Banarasi tissue saree with shimmering zari work. A statement piece for grand celebrations.',
    specifications: {
      fabric: 'Silk Tissue',
      work: 'Zari',
      occasion: 'Wedding, Reception',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '12',
    name: 'White Organza Saree with Floral Embroidery',
    price: 3999,
    mrp: 7999,
    fabric: 'Organza',
    color: 'White',
    colors: ['White', 'Ivory', 'Off-White', 'Cream'],
    occasion: 'Party',
    rating: 4.8,
    reviews: 176,
    stock: 9,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1632980475987-83c03f97c8f5?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1632980475987-83c03f97c8f5?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&h=800&fit=crop'
    ],
    description: 'Ethereal white organza saree with delicate floral embroidery. A vision of grace and elegance.',
    specifications: {
      fabric: 'Organza',
      work: 'Embroidery',
      occasion: 'Party, Cocktail',
      pattern: 'Floral',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '13',
    name: 'Coral Orange Georgette Saree with Ruffle Border',
    price: 2299,
    mrp: 4499,
    fabric: 'Georgette',
    color: 'Orange',
    colors: ['Orange', 'Coral', 'Peach', 'Salmon'],
    occasion: 'Party',
    rating: 4.5,
    reviews: 298,
    stock: 14,
    image: 'https://images.unsplash.com/photo-1619566884149-74ba41fcb39e?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1619566884149-74ba41fcb39e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583833753378-140c67f7b1e7?w=600&h=800&fit=crop'
    ],
    description: 'Trendy georgette saree with contemporary ruffle border. Perfect for modern fashionistas.',
    specifications: {
      fabric: 'Georgette',
      work: 'Ruffle Border',
      occasion: 'Party, Casual',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Dry clean recommended'
    }
  },
  {
    id: '14',
    name: 'Navy Blue Tussar Silk Saree',
    price: 3799,
    mrp: 6999,
    fabric: 'Silk',
    color: 'Blue',
    colors: ['Navy', 'Blue', 'Indigo', 'Royal Blue'],
    occasion: 'Festive',
    rating: 4.6,
    reviews: 167,
    stock: 11,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606993676551-089fef50c1c8?w=600&h=800&fit=crop'
    ],
    description: 'Rich navy blue tussar silk saree with natural texture. A versatile choice for various occasions.',
    specifications: {
      fabric: 'Tussar Silk',
      work: 'Plain',
      occasion: 'Festive, Party',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '15',
    name: 'Multi-Color Bandhani Saree',
    price: 1899,
    mrp: 3699,
    fabric: 'Cotton',
    color: 'Multi',
    colors: ['Multi', 'Rainbow', 'Mixed', 'Vibrant'],
    occasion: 'Festive',
    rating: 4.7,
    reviews: 423,
    stock: 22,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop'
    ],
    description: 'Vibrant bandhani saree with traditional tie-dye patterns. A celebration of colors and culture.',
    specifications: {
      fabric: 'Cotton',
      work: 'Bandhani',
      occasion: 'Festival, Navratri',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Hand wash'
    }
  },
  {
    id: '16',
    name: 'Bottle Green Matka Silk Saree',
    price: 4499,
    mrp: 8499,
    fabric: 'Silk',
    color: 'Green',
    colors: ['Green', 'Bottle Green', 'Forest', 'Emerald'],
    occasion: 'Wedding',
    rating: 4.8,
    reviews: 134,
    stock: 7,
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617123907853-16dc16dd71aa?w=600&h=800&fit=crop'
    ],
    description: 'Sophisticated bottle green matka silk saree. A perfect blend of tradition and contemporary style.',
    specifications: {
      fabric: 'Matka Silk',
      work: 'Plain with Border',
      occasion: 'Wedding, Party',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '17',
    name: 'Peach Crepe Saree with Lace Border',
    price: 1499,
    mrp: 2799,
    fabric: 'Crepe',
    color: 'Peach',
    colors: ['Peach', 'Pink', 'Coral', 'Blush'],
    occasion: 'Casual',
    rating: 4.4,
    reviews: 356,
    stock: 19,
    image: 'https://images.unsplash.com/photo-1626436773248-3d24c4e82164?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1626436773248-3d24c4e82164?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591199806601-5a1c34bc62cd?w=600&h=800&fit=crop'
    ],
    description: 'Soft peach crepe saree with delicate lace border. Easy to drape and comfortable for all-day wear.',
    specifications: {
      fabric: 'Crepe',
      work: 'Lace Border',
      occasion: 'Casual, Office',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Machine wash'
    }
  },
  {
    id: '18',
    name: 'Wine Red Velvet Saree with Zari Work',
    price: 5499,
    mrp: 9999,
    fabric: 'Velvet',
    color: 'Red',
    colors: ['Wine', 'Maroon', 'Burgundy', 'Red'],
    occasion: 'Wedding',
    rating: 4.9,
    reviews: 98,
    stock: 4,
    badge: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1616084905109-292211e0f2a9?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1616084905109-292211e0f2a9?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1626425867424-0e0cc051d5d8?w=600&h=800&fit=crop'
    ],
    description: 'Opulent wine red velvet saree with intricate zari work. A regal choice for winter weddings.',
    specifications: {
      fabric: 'Velvet',
      work: 'Zari',
      occasion: 'Wedding, Winter Party',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '19',
    name: 'Sky Blue Chanderi Saree with Silver Border',
    price: 2999,
    mrp: 5799,
    fabric: 'Cotton',
    color: 'Blue',
    colors: ['Blue', 'Sky Blue', 'Azure', 'Powder Blue'],
    occasion: 'Festive',
    rating: 4.6,
    reviews: 245,
    stock: 13,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591199854159-0ee909c4e85a?w=600&h=800&fit=crop'
    ],
    description: 'Lightweight Chanderi saree in serene sky blue with silver border. Perfect for summer festivities.',
    specifications: {
      fabric: 'Chanderi Cotton',
      work: 'Silver Border',
      occasion: 'Festival, Party',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Hand wash'
    }
  },
  {
    id: '20',
    name: 'Chocolate Brown Tant Saree',
    price: 899,
    mrp: 1799,
    fabric: 'Cotton',
    color: 'Brown',
    colors: ['Brown', 'Chocolate', 'Coffee', 'Tan'],
    occasion: 'Casual',
    rating: 4.3,
    reviews: 478,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591199854159-0ee909c4e85a?w=600&h=800&fit=crop'
    ],
    description: 'Traditional Bengali tant saree in earthy chocolate brown. Lightweight and perfect for daily wear.',
    specifications: {
      fabric: 'Tant Cotton',
      work: 'Handloom',
      occasion: 'Casual, Daily',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Machine wash'
    }
  },
  {
    id: '21',
    name: 'Rani Pink Patola Silk Saree',
    price: 8999,
    mrp: 15999,
    fabric: 'Silk',
    color: 'Pink',
    colors: ['Pink', 'Rani', 'Magenta', 'Fuchsia'],
    occasion: 'Wedding',
    rating: 4.9,
    reviews: 76,
    stock: 2,
    badge: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1595735525005-70e29000d59b?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595735525005-70e29000d59b?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=600&h=800&fit=crop'
    ],
    description: 'Exquisite double ikat Patola silk saree in vibrant rani pink. A rare and precious heirloom piece.',
    specifications: {
      fabric: 'Patola Silk',
      work: 'Double Ikat',
      occasion: 'Wedding, Special',
      pattern: 'Traditional',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  },
  {
    id: '22',
    name: 'Mint Green Net Saree with Pearl Work',
    price: 3299,
    mrp: 6499,
    fabric: 'Net',
    color: 'Green',
    colors: ['Mint', 'Green', 'Aqua', 'Turquoise'],
    occasion: 'Party',
    rating: 4.5,
    reviews: 189,
    stock: 16,
    image: 'https://images.unsplash.com/photo-1614729376992-c0a6f464ad09?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614729376992-c0a6f464ad09?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1626436773248-3d24c4e82164?w=600&h=800&fit=crop'
    ],
    description: 'Delicate mint green net saree adorned with pearl work. A fresh and youthful party wear choice.',
    specifications: {
      fabric: 'Net',
      work: 'Pearl Work',
      occasion: 'Party, Reception',
      pattern: 'Contemporary',
      blouse: 'Included',
      care: 'Dry clean only'
    }
  }
];

export const categories = [
  { id: 'banarasi', name: 'Banarasi Silk Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop' },
  { id: 'kanjivaram', name: 'Kanjivaram Sarees', image: 'https://images.unsplash.com/photo-1583833753379-140c67f7b1e7?w=600&h=800&fit=crop' },
  { id: 'cotton', name: 'Cotton Sarees', image: 'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=600&h=800&fit=crop' },
  { id: 'designer', name: 'Designer Sarees', image: 'https://images.unsplash.com/photo-1598351462725-a3c0af8b7c3f?w=600&h=800&fit=crop' },
  { id: 'wedding', name: 'Wedding Collection', image: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=600&h=800&fit=crop' },
  { id: 'daily', name: 'Daily Wear', image: 'https://images.unsplash.com/photo-1610044847550-7a26e57dd5fc?w=600&h=800&fit=crop' }
];

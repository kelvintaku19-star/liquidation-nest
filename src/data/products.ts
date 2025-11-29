// =====================================================
// PRODUCT DATA - EASILY EDITABLE
// To add/edit products: Simply modify the arrays below
// To change images: Replace the image URLs with your own
// To change prices: Edit the price strings
// =====================================================

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  mainImage: string;
  gallery: string[];
  category: string;
  condition: string;
  itemsPerPallet?: string;
  // Replace with your WhatsApp or Telegram link
  orderLink: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// =====================================================
// CATEGORIES - Add or modify categories here
// =====================================================
export const categories: Category[] = [
  {
    id: "toys",
    name: "Toys Pallets",
    description: "Kids toys, games, and entertainment items",
    icon: "🧸",
  },
  {
    id: "shoes",
    name: "Shoes Pallets",
    description: "Footwear for men, women, and children",
    icon: "👟",
  },
  {
    id: "tools",
    name: "Tools Pallets",
    description: "Power tools, hand tools, and hardware",
    icon: "🔧",
  },
  {
    id: "kitchen",
    name: "Kitchen Pallets",
    description: "Kitchen appliances, cookware, and utensils",
    icon: "🍳",
  },
  {
    id: "mix",
    name: "Mix Pallets",
    description: "Mixed merchandise from various categories",
    icon: "📦",
  },
  {
    id: "electronics",
    name: "Electronic Pallets",
    description: "TVs, computers, gadgets, and accessories",
    icon: "📺",
  },
  {
    id: "phones",
    name: "Phones Pallets",
    description: "Smartphones, tablets, and mobile accessories",
    icon: "📱",
  },
];

// =====================================================
// PRODUCTS - Add or modify products here
// Replace placeholder images with your own image URLs
// Replace orderLink with your WhatsApp/Telegram link
// =====================================================
export const products: Product[] = [
  // TOYS PALLETS
  {
    id: "toys-1",
    title: "Kids Toys Pallet - Grade A",
    shortDescription: "Premium quality toys from top brands",
    fullDescription: "This pallet contains a variety of premium quality toys including action figures, dolls, board games, educational toys, and outdoor play equipment. All items are in excellent condition and come from major retailers.",
    price: "$800",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "toys",
    condition: "Grade A",
    itemsPerPallet: "100-150",
    orderLink: "https://wa.me/1234567890", // Replace with your WhatsApp link
  },
  {
    id: "toys-2",
    title: "Mixed Toys Pallet",
    shortDescription: "Assorted toys for all ages",
    fullDescription: "Great variety of toys suitable for different age groups. Includes building blocks, stuffed animals, remote control toys, art supplies, and more. Perfect for resellers looking for diverse inventory.",
    price: "$600",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "toys",
    condition: "Grade B",
    itemsPerPallet: "150-200",
    orderLink: "https://wa.me/1234567890",
  },

  // SHOES PALLETS
  {
    id: "shoes-1",
    title: "Athletic Shoes Pallet",
    shortDescription: "Brand name sneakers and sports shoes",
    fullDescription: "Premium athletic footwear including running shoes, basketball shoes, training shoes, and casual sneakers. Features brands like Nike, Adidas, Puma, and more. Various sizes available.",
    price: "$1,200",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "shoes",
    condition: "Grade A",
    itemsPerPallet: "80-120",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "shoes-2",
    title: "Mixed Footwear Pallet",
    shortDescription: "Variety of shoes for the whole family",
    fullDescription: "Diverse selection of footwear including casual shoes, boots, sandals, and dress shoes for men, women, and children. Great variety for retail or flea market sales.",
    price: "$900",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "shoes",
    condition: "Mixed",
    itemsPerPallet: "100-150",
    orderLink: "https://wa.me/1234567890",
  },

  // TOOLS PALLETS
  {
    id: "tools-1",
    title: "Milwaukee Power Tools Pallet",
    shortDescription: "Professional grade Milwaukee tools",
    fullDescription: "Premium Milwaukee brand power tools including drills, impact drivers, saws, grinders, and batteries. All items are tested and in working condition. Perfect for contractors and tool resellers.",
    price: "$3,500",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "tools",
    condition: "Grade A",
    itemsPerPallet: "25-40",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "tools-2",
    title: "DeWalt Tools Pallet",
    shortDescription: "DeWalt power tools and accessories",
    fullDescription: "High-quality DeWalt tools including cordless drills, circular saws, reciprocating saws, and complete tool kits. Includes batteries and chargers. Ideal for professional contractors.",
    price: "$2,800",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "tools",
    condition: "Grade A",
    itemsPerPallet: "30-50",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "tools-3",
    title: "Hand Tools Assortment",
    shortDescription: "Various hand tools and hardware",
    fullDescription: "Assorted hand tools including wrenches, screwdrivers, pliers, hammers, measuring tools, and general hardware. Great starter inventory for hardware stores or online sellers.",
    price: "$1,000",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "tools",
    condition: "Grade B",
    itemsPerPallet: "100-150",
    orderLink: "https://wa.me/1234567890",
  },

  // KITCHEN PALLETS
  {
    id: "kitchen-1",
    title: "Kitchen Appliances Pallet",
    shortDescription: "Small kitchen appliances and gadgets",
    fullDescription: "Variety of small kitchen appliances including blenders, coffee makers, toasters, air fryers, instant pots, and more. Mix of brand names and store brands. All items tested.",
    price: "$1,100",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "kitchen",
    condition: "Grade A",
    itemsPerPallet: "40-60",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "kitchen-2",
    title: "Cookware & Utensils Pallet",
    shortDescription: "Pots, pans, and kitchen utensils",
    fullDescription: "Complete cookware sets, individual pots and pans, bakeware, kitchen utensils, storage containers, and cutting boards. Perfect for home goods retailers.",
    price: "$750",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "kitchen",
    condition: "Mixed",
    itemsPerPallet: "80-120",
    orderLink: "https://wa.me/1234567890",
  },

  // MIX PALLETS
  {
    id: "mix-1",
    title: "Amazon Returns - Mixed",
    shortDescription: "Mixed merchandise from Amazon returns",
    fullDescription: "Diverse mix of Amazon customer returns including electronics, home goods, toys, clothing, and more. Excellent variety at great value. Perfect for flea markets and online resellers.",
    price: "$500",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "mix",
    condition: "Mixed",
    itemsPerPallet: "100-200",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "mix-2",
    title: "General Merchandise Pallet",
    shortDescription: "Variety of household items",
    fullDescription: "General merchandise pallet with household items, decor, storage solutions, personal care products, and miscellaneous goods. Great for variety stores and flea market vendors.",
    price: "$450",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "mix",
    condition: "Grade B",
    itemsPerPallet: "150-250",
    orderLink: "https://wa.me/1234567890",
  },

  // ELECTRONIC PALLETS
  {
    id: "electronics-1",
    title: "Consumer Electronics Pallet",
    shortDescription: "TVs, computers, and tech gadgets",
    fullDescription: "High-value electronics pallet featuring smart TVs, laptops, tablets, gaming consoles, headphones, speakers, and various tech accessories. All items tested for functionality.",
    price: "$2,500",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "electronics",
    condition: "Grade A",
    itemsPerPallet: "30-50",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "electronics-2",
    title: "Tech Accessories Pallet",
    shortDescription: "Cables, chargers, and accessories",
    fullDescription: "Electronic accessories including phone chargers, cables, cases, screen protectors, power banks, Bluetooth devices, and smart home gadgets. High quantity for easy resale.",
    price: "$800",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "electronics",
    condition: "Mixed",
    itemsPerPallet: "200-300",
    orderLink: "https://wa.me/1234567890",
  },

  // PHONES PALLETS
  {
    id: "phones-1",
    title: "Smartphones Pallet",
    shortDescription: "iPhones, Samsung, and Android phones",
    fullDescription: "Premium smartphone pallet featuring iPhones, Samsung Galaxy, and various Android phones. Mix of new, refurbished, and customer returns. All phones tested for basic functionality.",
    price: "$4,000",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "phones",
    condition: "Mixed",
    itemsPerPallet: "40-60",
    orderLink: "https://wa.me/1234567890",
  },
  {
    id: "phones-2",
    title: "Mobile Accessories Pallet",
    shortDescription: "Phone cases, chargers, and accessories",
    fullDescription: "Complete mobile accessories pallet with phone cases, screen protectors, wireless chargers, earbuds, car mounts, and more. High variety for phone accessory retailers.",
    price: "$600",
    mainImage: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    category: "phones",
    condition: "Grade A",
    itemsPerPallet: "300-500",
    orderLink: "https://wa.me/1234567890",
  },
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

// Helper function to get product by ID
export const getProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Mini Butterfly Stud Earrings",
    price: 549.10,
    image: "/producto.png",
    category: "Earrings",
  },
  {
    id: 2,
    name: "Butterfly Diamond Small Ring",
    price: 949.00,
    image: "/producto.png",
    category: "Ring",
  },
  {
    id: 3,
    name: "Butterfly Diamond Pendant",
    price: 3046.00,
    image: "/producto.png",
    category: "Necklaces",
  },
  {
    id: 4,
    name: "Butterfly Diamond Small Stud Earrings",
    price: 269.00,
    image: "/producto.png",
    category: "Earrings",
  },
  {
    id: 5,
    name: "Elegant Brooch with Gemstones",
    price: 1599.00,
    image: "/producto.png",
    category: "Brooch",
  },
  {
    id: 6,
    name: "Luxury Charm Bracelet",
    price: 799.00,
    image: "/producto.png",
    category: "Bracelet",
  },
]

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 7,
    name: "Vintage Floral Brooch",
    price: 899.99,
    image: "/producto.png",
    category: "Brooch",
  },
  {
    id: 8,
    name: "Crystal Star Brooch",
    price: 999.99,
    image: "/producto.png",
    category: "Brooch",
  },
  {
    id: 9,
    name: "Gold Hoop Earrings",
    price: 699.99,
    image: "/producto.png",
    category: "Earrings",
  },
  {
    id: 10,
    name: "Pearl Drop Earrings",
    price: 399.99,
    image: "/producto.png",
    category: "Earrings",
  },
  {
    id: 11,
    name: "Layered Gold Necklace",
    price: 1200.00,
    image: "/producto.png",
    category: "Necklaces",
  },
  {
    id: 12,
    name: "Charm Bracelet",
    price: 444.44,
    image: "/producto.png",
    category: "Bracelet",
  },
  {
    id: 13,
    name: "Sapphire Engagement Ring",
    price: 1800.00,
    image: "/producto.png",
    category: "Ring",
  },
  {
    id: 14,
    name: "Simple Band Ring",
    price: 249.99,
    image: "/producto.png",
    category: "Ring",
  },
]

export interface GiftProduct {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
}

export const GIFT_PRODUCTS: GiftProduct[] = [
  {
    id: '1',
    name: 'Premium Bed Frame',
    category: 'Furniture',
    price: 15000,
    image: 'https://images.pexels.com/photos/33349382/pexels-photo-33349382.jpeg',
    description: 'Elegant queen-size bed frame with storage'
  },
  {
    id: '2',
    name: 'Modern Sofa Set',
    category: 'Furniture',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    description: 'Comfortable 3-seater sofa with cushions'
  },
  {
    id: '3',
    name: '55" Smart TV',
    category: 'Electronics',
    price: 35000,
    image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg',
    description: '4K Ultra HD Smart Television'
  },
  {
    id: '4',
    name: 'Electric Geyser',
    category: 'Appliances',
    price: 8000,
    image: 'https://media.istockphoto.com/id/973726560/photo/modern-electric-water-heater.jpg?s=612x612&w=0&k=20&c=DgV4ohFHoFWDg4vzfl1QCAuxW9DKw6NeIpWGViF7Wo0=',
    description: '15L instant water heater'
  },
  {
    id: '5',
    name: 'Microwave Oven',
    category: 'Kitchen',
    price: 12000,
    image: 'https://images.pexels.com/photos/32168944/pexels-photo-32168944.jpeg',
    description: '25L convection microwave'
  },
  {
    id: '6',
    name: 'Stainless Steel Utensils Set',
    category: 'Kitchen',
    price: 3500,
    image: 'https://images.pexels.com/photos/30981356/pexels-photo-30981356.jpeg',
    description: '12-piece cookware set with lids'
  },
  {
    id: '7',
    name: 'Coffee Mug Set',
    category: 'Kitchenware',
    price: 1200,
    image: 'https://images.pexels.com/photos/2121530/pexels-photo-2121530.jpeg',
    description: 'Set of 6 ceramic coffee mugs'
  },
  {
    id: '8',
    name: 'Cookware Set',
    category: 'Kitchen',
    price: 4500,
    image: 'https://images.pexels.com/photos/3768169/pexels-photo-3768169.jpeg',
    description: 'Non-stick 5-piece cookware set'
  },
  {
    id: '9',
    name: 'Coaster Set',
    category: 'Decor',
    price: 600,
    image: 'https://images.pexels.com/photos/36089265/pexels-photo-36089265.jpeg',
    description: 'Set of 6 wooden coasters'
  },
  {
    id: '10',
    name: 'Dining Table & Chairs',
    category: 'Furniture',
    price: 22000,
    image: 'https://images.pexels.com/photos/6748972/pexels-photo-6748972.jpeg',
    description: '6-seater dining set with chairs'
  },
  {
    id: '11',
    name: 'Wardrobe / Closet',
    category: 'Furniture',
    price: 18000,
    image: 'https://images.pexels.com/photos/7045314/pexels-photo-7045314.jpeg',
    description: 'Large wooden wardrobe with mirror'
  },
  {
    id: '12',
    name: 'Refrigerator',
    category: 'Appliances',
    price: 32000,
    image: 'https://media.istockphoto.com/id/2162681544/photo/modern-kitchen-with-front-view-of-refrigerator-and-white-cabinets.jpg?s=1024x1024&w=is&k=20&c=iVoyZnBvZl9PQnZwvtE5G8sBz8dZN7_o-bO_JRCK2BM=',
    description: '300L double-door refrigerator'
  },
  {
    id: '13',
    name: 'Washing Machine',
    category: 'Appliances',
    price: 28000,
    image: 'https://images.pexels.com/photos/6492065/pexels-photo-6492065.jpeg',
    description: '7kg fully automatic washing machine'
  },
  {
    id: '14',
    name: 'Mixer / Blender',
    category: 'Kitchen',
    price: 4000,
    image: 'https://images.pexels.com/photos/19599327/pexels-photo-19599327.jpeg',
    description: 'Heavy-duty mixer grinder'
  },
  {
    id: '15',
    name: 'Pressure Cooker / Rice Cooker',
    category: 'Kitchen',
    price: 3500,
    image: 'https://images.pexels.com/photos/35041641/pexels-photo-35041641.jpeg',
    description: '5L stainless steel pressure cooker'
  },
  {
    id: '16',
    name: 'Dinnerware Set',
    category: 'Kitchenware',
    price: 2500,
    image: 'https://images.pexels.com/photos/3847440/pexels-photo-3847440.jpeg',
    description: '32-piece dinner set for 8'
  },
  {
    id: '17',
    name: 'Cutlery Set',
    category: 'Kitchenware',
    price: 1800,
    image: 'https://images.pexels.com/photos/30754765/pexels-photo-30754765.png',
    description: '24-piece stainless steel cutlery'
  },
  {
    id: '18',
    name: 'Bedsheets & Pillow Covers',
    category: 'Bedding',
    price: 2800,
    image: 'https://images.pexels.com/photos/15195270/pexels-photo-15195270.jpeg',
    description: 'Set of 2 cotton bedsheets with pillow covers'
  },
  {
    id: '19',
    name: 'Comforter / Quilt',
    category: 'Bedding',
    price: 4500,
    image: 'https://images.pexels.com/photos/7061059/pexels-photo-7061059.jpeg',
    description: 'Quilted super king size comforter'
  },
  {
    id: '20',
    name: 'Towels Set',
    category: 'Bedding',
    price: 1500,
    image: 'https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg',
    description: 'Set of 6 premium cotton towels'
  },
  {
    id: '21',
    name: 'Curtains',
    category: 'Decor',
    price: 3500,
    image: 'https://images.pexels.com/photos/462197/pexels-photo-462197.jpeg',
    description: 'Elegant window curtains (pair)'
  },
  {
    id: '22',
    name: 'Rugs / Carpets',
    category: 'Decor',
    price: 5000,
    image: 'https://images.pexels.com/photos/18624121/pexels-photo-18624121.jpeg',
    description: '8x10 ft designer carpet'
  },
  {
    id: '23',
    name: 'Lamps / Night Lights',
    category: 'Lighting',
    price: 1800,
    image: 'https://images.pexels.com/photos/29899768/pexels-photo-29899768.jpeg',
    description: 'Set of 2 bedside lamps'
  },
  {
    id: '24',
    name: 'Wall Clock',
    category: 'Decor',
    price: 1200,
    image: 'https://images.pexels.com/photos/277371/pexels-photo-277371.jpeg',
    description: 'Modern wooden wall clock'
  },
  {
    id: '25',
    name: 'Photo Frames',
    category: 'Decor',
    price: 1500,
    image: 'https://images.pexels.com/photos/4267774/pexels-photo-4267774.jpeg',
    description: 'Set of 5 photo frames'
  },
  {
    id: '26',
    name: 'Indoor Plants / Planters',
    category: 'Decor',
    price: 2000,
    image: 'https://images.pexels.com/photos/4913376/pexels-photo-4913376.jpeg',
    description: 'Premium indoor plant with pot'
  },
  {
    id: '27',
    name: 'Decorative Showpieces',
    category: 'Decor',
    price: 2500,
    image: 'https://images.pexels.com/photos/38508744/pexels-photo-38508744.jpeg',
    description: 'Set of 3 decorative pieces'
  },
  {
    id: '28',
    name: 'Candle Set / Diffuser',
    category: 'Fragrance',
    price: 1800,
    image: 'https://images.pexels.com/photos/7260238/pexels-photo-7260238.jpeg',
    description: 'Aromatherapy candle & diffuser set'
  },
  {
    id: '29',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 3500,
    image: 'https://images.pexels.com/photos/27682103/pexels-photo-27682103.jpeg',
    description: 'Portable wireless speaker'
  },
  {
    id: '30',
    name: 'Water Purifier',
    category: 'Appliances',
    price: 12000,
    image: 'https://images.pexels.com/photos/7298558/pexels-photo-7298558.jpeg',
    description: 'RO+UV water purification system'
  },
  {
  id: '31',
  name: 'Gold Necklace Set',
  category: 'Jewelry',
  price: 150000,
  image: 'https://images.pexels.com/photos/20100135/pexels-photo-20100135.jpeg',
  description: '22K gold necklace with matching earrings'
},
{
  id: '32',
  name: 'Silver Dinner Set',
  category: 'Luxury Kitchenware',
  price: 45000,
  image: 'https://images.pexels.com/photos/11857901/pexels-photo-11857901.jpeg',
  description: 'Pure silver 32-piece dinner set'
},
{
  id: '33',
  name: 'Diamond Ring',
  category: 'Jewelry',
  price: 200000,
  image: 'https://images.pexels.com/photos/12427696/pexels-photo-12427696.jpeg',
  description: 'Elegant solitaire diamond ring'
},
{
  id: '34',
  name: 'Luxury Watch',
  category: 'Accessories',
  price: 120000,
  image: 'https://images.pexels.com/photos/28135838/pexels-photo-28135838.jpeg',
  description: 'Premium Swiss automatic wristwatch'
},
{
  id: '35',
  name: 'Gold Coin Set',
  category: 'Jewelry',
  price: 100000,
  image: 'https://images.pexels.com/photos/8442342/pexels-photo-8442342.jpeg',
  description: 'Set of 10g 22K gold coins'
},
{
  id: '36',
  name: 'Silver Items',
  category: 'Decor',
  price: 25000,
  image: 'https://images.pexels.com/photos/14644999/pexels-photo-14644999.jpeg',
  description: 'Pair of handcrafted silver idols'
},
{
  id: '37',
  name: 'Luxury Perfume Collection',
  category: 'Fragrance',
  price: 15000,
  image: 'https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg',
  description: 'Set of 3 premium branded perfumes'
},
{
  id: '38',
  name: 'Crystal Chandelier',
  category: 'Lighting',
  price: 50000,
  image: 'https://images.pexels.com/photos/12024171/pexels-photo-12024171.jpeg',
  description: 'Elegant crystal chandelier for living room'
},
{
  id: '39',
  name: 'Luxury Sofa Recliner',
  category: 'Furniture',
  price: 85000,
  image: 'https://images.pexels.com/photos/8135275/pexels-photo-8135275.jpeg',
  description: 'Premium leather recliner sofa set'
},
{
  id: '40',
  name: 'Gold-Plated Cutlery Set',
  category: 'Luxury Kitchenware',
  price: 30000,
  image: 'https://images.pexels.com/photos/8559083/pexels-photo-8559083.jpeg',
  description: '24-piece gold-plated stainless steel cutlery'
},
{
  id: '41',
  name: 'Silver Tea Set',
  category: 'Luxury Kitchenware',
  price: 40000,
  image: 'https://images.pexels.com/photos/38003571/pexels-photo-38003571.jpeg',
  description: 'Handcrafted silver tea set with tray'
},
{
  id: '42',
  name: 'Luxury Bed Linen',
  category: 'Bedding',
  price: 25000,
  image: 'https://images.pexels.com/photos/31902663/pexels-photo-31902663.jpeg',
  description: 'Egyptian cotton king-size bed linen set'
},
{
  id: '43',
  name: 'Gold Bracelet',
  category: 'Jewelry',
  price: 170000,
  image: 'https://images.pexels.com/photos/37485307/pexels-photo-37485307.jpeg',
  description: '22K gold bracelet with intricate design'
},
{
  id: '44',
  name: 'Silver Candle Holders',
  category: 'Decor',
  price: 15000,
  image: 'https://images.pexels.com/photos/14312935/pexels-photo-14312935.jpeg',
  description: 'Pair of handcrafted silver candle holders'
},
{
  id: '45',
  name: 'Luxury Dinnerware Set',
  category: 'Kitchenware',
  price: 35000,
  image: 'https://images.pexels.com/photos/14646769/pexels-photo-14646769.jpeg',
  description: 'Bone china dinnerware with gold rim'
},
{
  id: '46',
  name: 'Gold Earrings',
  category: 'Jewelry',
  price: 225000,
  image: 'https://images.pexels.com/photos/12168883/pexels-photo-12168883.jpeg',
  description: '22K gold stud earrings'
},
{
  id: '47',
    name: 'Silver Serving Bowls',
    category: 'Luxury Kitchenware',
    price: 28000,
    image: 'https://images.pexels.com/photos/13252990/pexels-photo-13252990.jpeg',
    description: 'Set of 4 handcrafted silver bowls'
},
{
  id: '48',
    name: 'Luxury Carpet',
    category: 'Decor',
    price: 60000,
    image: 'https://images.pexels.com/photos/32536660/pexels-photo-32536660.jpeg',
    description: 'Handwoven Persian-style carpet'
},
{
  id: '49',
    name: 'Gold Pendant',
    category: 'Jewelry',
    price: 145000,
    image: 'https://images.pexels.com/photos/4595723/pexels-photo-4595723.jpeg',
    description: '22K gold pendant with chain'
},
{
  id: '50',
    name: 'Silver Wine Glasses',
    category: 'Luxury Kitchenware',
    price: 32000,
    image: 'https://images.pexels.com/photos/36402455/pexels-photo-36402455.jpeg',
    description: 'Set of 6 handcrafted silver wine glasses'
}
]

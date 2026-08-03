export interface GiftProduct {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  flipkartLink: string
}

export const GIFT_PRODUCTS: GiftProduct[] = [
  {
    id: '1',
    name: 'Premium Bed Frame',
    category: 'Furniture',
    price: 30000,
    image: 'https://images.pexels.com/photos/33349382/pexels-photo-33349382.jpeg',
    description: 'Elegant queen-size bed frame with storage',
    flipkartLink: 'https://dl.flipkart.com/dl/flipkart-perfect-homes-diamond-cut-queen-size-bed-your-luxurious-place-solid-wood-box-bed-154-cm-x-195-5-05-ft-6-4-ft/p/itm7938d34f9ebf0?pid=BDDHBBF4Z4KU7TGS&lid=LSTBDDHBBF4Z4KU7TGSHYX1B2&marketplace=FLIPKART&q=+Premium+Bed+Frame&store=wwe/7p7/4yf&srno=s_1_15&otracker=search&otracker1=search&fm=Search&iid=a9f94544-2cf0-432a-a60c-32120c385d18.BDDHBBF4Z4KU7TGS.SEARCH&ppt=sp&ppn=sp&qH=b7bdaf0ed55eacc2&ov_redirect=true&ov_redirect=true&_refId=&_appId=CL'
  },
  {
    id: '2',
    name: 'Modern Sofa Set',
    category: 'Furniture',
    price: 36000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    description: 'Comfortable 3-seater sofa with cushions',
    flipkartLink: 'https://dl.flipkart.com/dl/wakesure-premium-quality-lhs-ottomanvelvet-fabric-3-2-1-sofa-set/p/itm1d49e59537843?pid=SFSHM2FAUMJRUFBV&lid=LSTSFSHM2FAUMJRUFBVY0ONV7&marketplace=FLIPKART&q=Modern+Sofa+Set&store=wwe/c3z&srno=s_1_23&otracker=search&otracker1=search&fm=organic&iid=aa94d120-43c1-47e7-980f-648ccfcbffc6.SFSHM2FAUMJRUFBV.SEARCH&ppt=None&ppn=None&ssid=g57kk8xycg0000001785776160585&qH=580afffb65cce1e6&ov_redirect=true&ov_redirect=true&_refId=&_appId=CL'

  },
  {
    id: '3',
    name: '55" Smart TV',
    category: 'Electronics',
    price: 54000,
    image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg',
    description: '4K Ultra HD Smart Television',
    flipkartLink: 'https://dl.flipkart.com/dl/samsung-vision-ai-138-cm-55-inch-ultra-hd-4k-mini-led-smart-tizen-tv-2026-companion-30w-powerful-speakers-hdr-pure-spectrum-color-4k-upscaling-booster-knox-security-150-free-channels-dynamic-sound-pack/p/itm17d71c7ea19ba?pid=TVSHMH5GTEE83U68&lid=LSTTVSHMH5GTEE83U68SJRY2S&marketplace=FLIPKART&q=smart+tv+55+inch&store=ckf/czl&spotlightTagId=default_FkPickId_ckf/czl&srno=s_1_2&otracker=AS_Query_OrganicAutoSuggest_3_8_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_8_na_na_na&fm=search-autosuggest&iid=d17fe4f0-36b6-418f-a297-a06d0e7ea359.TVSHMH5GTEE83U68.SEARCH&ppt=sp&ppn=sp&ssid=tm0h9s8fio0000001785776445482&qH=36da205c0458dd35&ov_redirect=true&_refId=&_appId=CL'

  },
  {
    id: '4',
    name: 'Electric Geyser',
    category: 'Appliances',
    price: 8000,
    image: 'https://media.istockphoto.com/id/973726560/photo/modern-electric-water-heater.jpg?s=612x612&w=0&k=20&c=DgV4ohFHoFWDg4vzfl1QCAuxW9DKw6NeIpWGViF7Wo0=',
    description: '15L instant water heater',
    flipkartLink: 'https://dl.flipkart.com/s/dFYa1NuuuN'
  },
  {
    id: '5',
    name: 'Microwave Oven',
    category: 'Kitchen',
    price: 10000,
    image: 'https://images.pexels.com/photos/32168944/pexels-photo-32168944.jpeg',
    description: '25L convection microwave',
    flipkartLink: 'https://amzn.in/d/0gUtIA8B'
  },
  {
    id: '6',
    name: 'Stainless Steel Utensils Set',
    category: 'Kitchen',
    price: 8000,
    image: 'https://images.pexels.com/photos/30981356/pexels-photo-30981356.jpeg',
    description: '12-piece cookware set with lids',
    flipkartLink: 'https://amzn.in/d/0fVqVVHt'
  },
  {
    id: '7',
    name: 'Coffee Mug Set',
    category: 'Kitchenware',
    price: 1000,
    image: 'https://images.pexels.com/photos/2121530/pexels-photo-2121530.jpeg',
    description: 'Set of 6 ceramic coffee mugs',
    flipkartLink: 'https://amzn.in/d/0aSC8Xb7'
  },
  {
    id: '8',
    name: 'Cookware Set',
    category: 'Kitchen',
    price: 5000,
    image: 'https://images.pexels.com/photos/3768169/pexels-photo-3768169.jpeg',
    description: 'Non-stick 5-piece cookware set',
    flipkartLink: 'https://amzn.in/d/0ggK3qhP'
  },
  {
    id: '9',
    name: 'Coaster Set',
    category: 'Decor',
    price: 1000,
    image: 'https://images.pexels.com/photos/36089265/pexels-photo-36089265.jpeg',
    description: 'Set of 6 wooden coasters',
    flipkartLink: 'https://amzn.in/d/0ivGjcP0'
  },
  {
    id: '10',
    name: 'Dining Table & Chairs',
    category: 'Furniture',
    price: 16000,
    image: 'https://images.pexels.com/photos/6748972/pexels-photo-6748972.jpeg',
    description: '4-seater dining set with chairs',
    flipkartLink: 'https://amzn.in/d/05ReZJTe'
  },
  {
    id: '11',
    name: 'Wardrobe / Closet',
    category: 'Furniture',
    price: 14000,
    image: 'https://images.pexels.com/photos/7045314/pexels-photo-7045314.jpeg',
    description: 'Large wooden wardrobe with mirror',
    flipkartLink: 'https://dl.flipkart.com/dl/flipkart-perfect-homes-julian-engineered-wood-4-door-wardrobe/p/itm7777679f466fb?pid=WCLHGMFZGCZVUXGX&lid=LSTWCLHGMFZGCZVUXGXQT0BJK&hl_lid=&marketplace=FLIPKART&fm=eyJ3dHAiOiJyZWNvIiwicHJwdCI6InBwIiwibWlkIjoicHJvZHVjdFJlY29tbWVuZGF0aW9uL2FzcGVjdFNpbWlsYXIifQ==&_refId=&_appId=CL'
  },
  {
    id: '12',
    name: 'Refrigerator',
    category: 'Appliances',
    price: 35000,
    image: 'https://media.istockphoto.com/id/2162681544/photo/modern-kitchen-with-front-view-of-refrigerator-and-white-cabinets.jpg?s=1024x1024&w=is&k=20&c=iVoyZnBvZl9PQnZwvtE5G8sBz8dZN7_o-bO_JRCK2BM=',
    description: 'Whirlpool 308 L 3 Star Frost Free Inverter Double Door Refrigerator ',
    flipkartLink: 'https://amzn.in/d/014NqHes'
  },
  {
    id: '13',
    name: 'Washing Machine',
    category: 'Appliances',
    price: 40000,
    image: 'https://images.pexels.com/photos/6492065/pexels-photo-6492065.jpeg',
    description: '9kg fully automatic washing machine',
    flipkartLink: 'https://amzn.in/d/00VrjhkT'
  },
  {
    id: '14',
    name: 'Mixer / Blender',
    category: 'Kitchen',
    price: 8000,
    image: 'https://images.pexels.com/photos/19599327/pexels-photo-19599327.jpeg',
    description: 'Heavy-duty mixer grinder',
    flipkartLink: 'https://amzn.in/d/06VG1zr4'
  },
  {
    id: '15',
    name: 'Pressure Cooker / Rice Cooker',
    category: 'Kitchen',
    price: 3500,
    image: 'https://images.pexels.com/photos/35041641/pexels-photo-35041641.jpeg',
    description: '5L stainless steel pressure cooker',
    flipkartLink: 'https://amzn.in/d/0gK6BIXt'
  },
  {
    id: '16',
    name: 'Dinnerware Set',
    category: 'Kitchenware',
    price: 4500,
    image: 'https://images.pexels.com/photos/3847440/pexels-photo-3847440.jpeg',
    description: '20-piece dinner set',
    flipkartLink: 'https://amzn.in/d/03mYA6oM'
  },
  {
    id: '17',
    name: 'Cutlery Set',
    category: 'Kitchenware',
    price: 1400,
    image: 'https://images.pexels.com/photos/30754765/pexels-photo-30754765.png',
    description: '24-piece stainless steel cutlery',
    flipkartLink: 'https://amzn.in/d/0f0l3TRN'
  },
  {
    id: '18',
    name: 'Bedsheets & Pillow Covers',
    category: 'Bedding',
    price: 2000,
    image: 'https://images.pexels.com/photos/15195270/pexels-photo-15195270.jpeg',
    description: 'Set of 2 cotton bedsheets with pillow covers',
    flipkartLink: 'https://amzn.in/d/0g4Id3Ou'
  },
  {
    id: '19',
    name: 'Comforter / Quilt',
    category: 'Bedding',
    price: 2000,
    image: 'https://images.pexels.com/photos/7061059/pexels-photo-7061059.jpeg',
    description: 'Quilted super king size comforter',
    flipkartLink: 'https://amzn.in/d/09nDF8dF'
  },
  {
    id: '20',
    name: 'Towels Set',
    category: 'Bedding',
    price: 600,
    image: 'https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg',
    description: 'Set of 6 premium cotton towels',
    flipkartLink: 'https://amzn.in/d/060N6Zrw'
  },
  {
    id: '21',
    name: 'Curtains',
    category: 'Decor',
    price: 1500,
    image: 'https://images.pexels.com/photos/462197/pexels-photo-462197.jpeg',
    description: 'Elegant window curtains (pair)',
    flipkartLink: 'https://amzn.in/d/0hGyfcwF'
  },
  {
    id: '22',
    name: 'Rugs / Carpets',
    category: 'Decor',
    price: 2000,
    image: 'https://images.pexels.com/photos/18624121/pexels-photo-18624121.jpeg',
    description: '8x10 ft designer carpet',
    flipkartLink: 'https://amzn.in/d/0iMtdPM5'
  },
  {
    id: '23',
    name: 'Lamps / Night Lights',
    category: 'Lighting',
    price: 3000,
    image: 'https://images.pexels.com/photos/29899768/pexels-photo-29899768.jpeg',
    description: 'Set of 2 bedside lamps',
    flipkartLink: 'https://amzn.in/d/0dtQJnnf'
  },
  {
    id: '24',
    name: 'Wall Clock',
    category: 'Decor',
    price: 3400,
    image: 'https://images.pexels.com/photos/277371/pexels-photo-277371.jpeg',
    description: 'Modern wooden wall clock',
    flipkartLink: 'https://amzn.in/d/0dlvaWIB'
  },
  {
    id: '25',
    name: 'Photo Frames',
    category: 'Decor',
    price: 1500,
    image: 'https://images.pexels.com/photos/4267774/pexels-photo-4267774.jpeg',
    description: 'Set of 5 photo frames',
    flipkartLink: 'https://amzn.in/d/0boYcr4p'
  },
  {
    id: '26',
    name: 'Indoor Plants / Planters',
    category: 'Decor',
    price: 1000,
    image: 'https://images.pexels.com/photos/4913376/pexels-photo-4913376.jpeg',
    description: 'Premium indoor plant with pot',
    flipkartLink: 'https://amzn.in/d/05Q3Dvou'
  },
  {
    id: '27',
    name: 'Decorative Showpieces',
    category: 'Decor',
    price: 1000,
    image: 'https://images.pexels.com/photos/38508744/pexels-photo-38508744.jpeg',
    description: 'Set of 3 decorative pieces',
    flipkartLink: 'https://amzn.in/d/0fuYMXcv'
  },
  {
    id: '28',
    name: 'Candle Set / Diffuser',
    category: 'Fragrance',
    price: 1300,
    image: 'https://images.pexels.com/photos/7260238/pexels-photo-7260238.jpeg',
    description: 'Aromatherapy candle & diffuser set',
    flipkartLink: 'https://amzn.in/d/05SYHiMi'
  },
  {
    id: '29',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 2000,
    image: 'https://images.pexels.com/photos/27682103/pexels-photo-27682103.jpeg',
    description: 'Portable wireless speaker',
    flipkartLink: 'https://amzn.in/d/0cOEB3WU'
  },
  {
    id: '30',
    name: 'Water Purifier',
    category: 'Appliances',
    price: 13000,
    image: 'https://images.pexels.com/photos/7298558/pexels-photo-7298558.jpeg',
    description: 'RO+UV water purification system',
    flipkartLink: 'https://amzn.in/d/0dMc9Ecy'
  },
  {
    id: '31',
    name: 'Hand Blender',
    category: 'Kitchenware',
    price: 1700,
    image: 'https://images.pexels.com/photos/6252751/pexels-photo-6252751.jpeg',
    description: 'Hand Blender |Powerful 300W Motor with Rust free steel arm |Easy single trigger operation |Specially designed blades',
    flipkartLink: 'https://amzn.in/d/01MfoBCO'
  },
  {
    id: '32',
    name: 'Kitchen Knife Set',
    category: 'Kitchenware',
    price: 1221,
    image: 'https://images.pexels.com/photos/3827668/pexels-photo-3827668.jpeg',
    description: 'Kitchen Knife Set with Holder set 6 ',
    flipkartLink: 'https://amzn.in/d/05aEbCo4'
  },
  {
    id: '33',
    name: 'Stainless Steel Chopping Board for Kitchen',
    category: 'Kitchenware',
    price: 700,
    image: 'https://images.pexels.com/photos/8093913/pexels-photo-8093913.jpeg',
    description: 'Cutting Board with Handle | Anti-Skid Heavy Duty Reversible Board for Vegetables, Meat, Fruits, Chapati Kneading ',
    flipkartLink: 'https://amzn.in/d/0i0IPici'
  }
  
]
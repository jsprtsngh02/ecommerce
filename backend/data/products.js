const products = [
  {
    name: 'U.S. Polo Assn.',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19020562/2022/12/5/0665351a-78bf-42eb-ac98-ef9c4758f7b41670217576258-US-Polo-Assn-Men-Black-Solid-Brand-Logo-Puffer-Jacket-346167-3.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19020562/2022/12/5/973bf228-aecc-416a-b9cc-9ca5251c564a1670217576245-US-Polo-Assn-Men-Black-Solid-Brand-Logo-Puffer-Jacket-346167-4.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19020562/2022/12/5/208526d2-63f6-4908-91d4-9264e76c78621670217576235-US-Polo-Assn-Men-Black-Solid-Brand-Logo-Puffer-Jacket-346167-5.jpg'],
    description:
      'The outer layer is made with a water-resistant fabric, making it suitable for rainy days or light snow. The interior lining is made with a soft and breathable material, ensuring you stay comfortable even in warmer weather.',
    category: ['Men','Jacket'],
    sizes: ['S','XS'],
    price: 1299,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Roadster',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2308267/2018/1/29/11517216335209-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2308267/2018/1/29/11517216335188-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-3.jpg'],
    description:
      'Maroon printed T-shirt, has a round neck, short sleeves.',
    category: ['Jacket','Men'],
    sizes: ['S','M','L'],
    price: 599,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'HIGHLANDER',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11097156/2019/12/10/b8d45a95-161f-442c-9e69-6997e05f25ff1575980861980-HIGHLANDER-Men-White-Sneakers-4301575980859728-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11097156/2020/11/18/e941c387-d479-4fa1-b052-8b51179e67831605700663886-HIGHLANDER-Men-White-Sneakers-5671605700662428-2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11097156/2020/11/18/fb14f110-c745-45cf-87b7-763e5fd0377a1605700663834-HIGHLANDER-Men-White-Sneakers-5671605700662428-3.jpg'],
    description:
      'A pair of round-toe white sneakers, has regular styling, lace-up detail Synthetic Leather upper',
    category: ['Shoes','Men'],
    sizes: ['S','XS'],
    price: 929,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'DressBerry',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11231332/2022/4/21/f7194218-6160-49cd-abd6-f066acdfbbb61650542712728-DressBerry-Women-Black-Analogue-Watch-MFB-PN-SNT-H14-4481650-11.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11231332/2021/11/16/884eb68e-2f91-46b8-9e8e-fa6c5aa694d91637063684120-DressBerry-Women-Black-Analogue-Watch-MFB-PN-SNT-H14-4621637-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11231332/2021/11/16/8e36af23-d273-473f-b24b-40fe50f36d701637063684112-DressBerry-Women-Black-Analogue-Watch-MFB-PN-SNT-H14-4621637-2.jpg'],
    description:
      'The watch face is made with scratch-resistant glass, protecting the delicate hands and markers from damage. The face features a clean and elegant design, with easy-to-read numbers and a subtle date display.',
    category: ['Watches','Women'],
    sizes: ['S','XS'],
    price: 1999,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Puma',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19367318/2022/11/28/e67faecb-80f8-4852-8bb2-8e3f884a933b1669632198889-PUMA-Slim-Fit-Padded-Womens-Jacket-2431669632198199-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19367318/2022/11/28/b90cbaba-bce3-43d6-9aa8-1443158f22b01669632198879-PUMA-Slim-Fit-Padded-Womens-Jacket-2431669632198199-2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19367318/2022/11/28/53910807-50ce-409e-88c7-211b44f35e191669632198869-PUMA-Slim-Fit-Padded-Womens-Jacket-2431669632198199-3.jpg'],
    description:
      'Responsibly constructed this perfect PUMA Slim Fit Padded Women\'s Jacket makes a stylish statement. Featuring a detachable hood, protective storm flap, side pockets for storing belongings, water repellent fabrics and warmCELL technology for added insulation, you will be kept cozy and comfortable all while looking cool. DETAILS Regular fit, Detachable hood with invisible snap button closure to attach on collar, Storm flap with grown-on chin guard for enhanced protection, Side welt pockets, Clean cuffs and hem finished with a grown-on facing, PUMA Branding',
    category: ['Women','jacket'],
    sizes: ['S','XS'],
    price: 1277,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Textured Structured Shoulder Bag',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18755200/2022/10/6/9520a303-77ef-4dbd-8e34-325271eb30481665059607627-bebe-Women-Brown-Animal-Textured-Structured-Shoulder-Bag-897-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18755200/2022/10/6/e7e469c6-e3f6-454b-ae69-4d8fca5c2f9b1665059607619-bebe-Women-Brown-Animal-Textured-Structured-Shoulder-Bag-897-2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18755200/2022/10/6/26c015a0-cd9a-4087-9521-136ca066bf441665059607610-bebe-Women-Brown-Animal-Textured-Structured-Shoulder-Bag-897-3.jpg'],
    description:
      'Brown animal textured shoulder bag 1 main compartment, has a zip closure, 4 inner pockets',
    category: ['Women','Bag'],
    sizes: ['S','XS'],
    price: 1429,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Wodsole',
    images: ['https://i.imgur.com/qU9avme.jpg','https://i.imgur.com/usDXEF8.jpg','https://i.imgur.com/hmLilCy.jpg'],
    description:
      'Blue color jacket with the thick cloth on it',
    category: ['Jacket','Men'],
    sizes: ['S','XS'],
    price: 1267,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Wrogn',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21832382/2023/3/14/d882399c-1cb0-4e96-86ac-ca5bb2ac65ea1678787042725-WROGN-Abstract-Typography-Printed-Boxy-Fit-Pure-Cotton-Denim-1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21832382/2023/3/14/6ea3e81d-3c69-47c0-9a59-e8a7869a43651678787042712-WROGN-Abstract-Typography-Printed-Boxy-Fit-Pure-Cotton-Denim-2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21832382/2023/3/14/3e2a0e4f-c8aa-48de-9111-99769a47dc401678787042670-WROGN-Abstract-Typography-Printed-Boxy-Fit-Pure-Cotton-Denim-5.jpg'],
    description:
      'Black, blue & orange abstract typography printed denim jacket Has a spread collar.',
    category: ['Jacket'],
    sizes: ['S','XS'],
    price: 3899,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Vishudh',
    images: ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14380280/2021/7/28/8a2e0ee7-fd7b-427d-9b90-01806eb2bf921627462567695VishudhWomenBrownSolidPumps1.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14380280/2021/7/28/4109ae0f-c780-4d8e-8d7f-d5617eef8da61627462567715VishudhWomenBrownSolidPumps2.jpg','https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14380280/2021/7/28/fec686a2-0b32-4988-9069-4ba186b816c01627462567727VishudhWomenBrownSolidPumps3.jpg'],
    description:
      'This model is wearing heels from our stylist\'s collection, see the image for a mock-up of what the actual heels would look like synthetic',
    category: ['Shoes','Women'],
    sizes: ['S','XS','L','XL'],
    price: 689,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  
]

export default products

const {
  User,
  Product,
  Brand,
  Catergory,
  Size,
  Order,
  OrderStatus,
  Bid,
  sequelize
} = require('./src/models');
const bcrypt = require('bcryptjs');

const user = [
  {
    firstName: 'Admin',
    lastName: 'Admin01',
    email: 'admin01@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: 'true'
  },
  {
    firstName: 'Andy',
    lastName: 'Anderson',
    email: 'andy@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: 'false'
  },
  {
    firstName: 'Taylor',
    lastName: 'Swift',
    email: 'taylor@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: 'false'
  }
];

const product = [
  {
    title: 'Nike Dunk Low Retro White Black (2021)',
    skuProduct: 'AA001',
    color: 'WHITE/BLACK',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820677/product%20image/1_rerizt.png'
  },
  {
    title: 'Nike Dunk Low SE Lottery Pack Malachite Green',
    skuProduct: 'AA002',
    color: 'PALE IVORY/MALACHITE/BLACK',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820674/product%20image/2_t7kalh.png'
  },
  {
    title: 'Nike SB Dunk Low Concepts Orange Lobste',
    skuProduct: 'AA003',
    color: 'ORANGE FROST/ELECTRO ORANGE/WHITE',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820673/product%20image/3_hg47f8.png'
  },
  {
    title: `'Ben & Jerry's x Nike SB Dunk Low /'Chunky Dunky'`,
    skuProduct: 'AA004',
    color: 'White/Lagoon Pulse/Black/University Gold',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820672/product%20image/4_d902at.png'
  },
  {
    title: 'Nike Zoom Vomero 5 Dark Grey Black White',
    skuProduct: 'AA005',
    color: 'DARK GREY/BLACK-WHIT',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820673/product%20image/5_fqkcq4.png'
  },
  {
    title: 'adidas Adilette 22 Slides Black',
    skuProduct: 'AA014',
    color: 'BLACK/BLACK/BLACK',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820676/product%20image/14_ieosyt.png'
  },
  {
    title: 'adidas adiFOM Q Tan Black',
    skuProduct: 'AA015',
    color: 'Tan/Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820685/product%20image/15_pruois.png'
  },
  {
    title: 'adidas NMD S1 Humanrace Mahbs Oatmea',
    skuProduct: 'AA016',
    color: 'OATMEAL/BLUE/CORN',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820680/product%20image/16_w4ddol.png'
  },
  {
    title: 'adidas Ultra 4D Marvel Black Panther',
    skuProduct: 'AA017',
    color: 'Core Black/Gold Metallic/Tribe Purple',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820679/product%20image/17_phruxe.png'
  },
  {
    title: 'adidas NMD Hu Pharrell Animal Print Lopard Pulse Amber',
    skuProduct: 'AA018',
    color: 'PULSE AMBER/BOLD GOLD/CORE BLACK',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820684/product%20image/18_ebo7dh.png'
  },
  {
    title: 'adidas Samba OG Sporty & Rich White Green',
    skuProduct: 'AA019',
    color: 'Cloud White/Green/Gum',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820677/product%20image/19_eqmpcu.png'
  },
  {
    title: 'adidas Forum Low Scary Clown',
    skuProduct: 'AA020',
    color: 'Cloud White/Green/Gum',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820678/product%20image/20_maxjlq.png'
  },
  {
    title: 'New Balance 530 Steel Grey',
    skuProduct: 'AA026',
    color: 'Steel Grey',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820689/product%20image/26_bgcj1m.png'
  },
  {
    title: 'New Balance 550 Sea Salt Pine Green',
    skuProduct: 'AA027',
    color: 'White/Pine Green/Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820689/product%20image/27_jdovlk.png'
  },
  {
    title: 'New Balance 990v6 MiUSA Grey',
    skuProduct: 'AA028',
    color: 'GREY/CASTLEROCK',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820693/product%20image/28_ckhbnh.png'
  },
  {
    title: 'New Balance 990v6 MiUSA Grey',
    skuProduct: 'AA029',
    color: 'RAIN CLOUD/METALLIC SILVER/GREY',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820697/product%20image/29_gn5fkd.png'
  },
  {
    title: 'New Balance 327 Turtle Dove Munsell White',
    skuProduct: 'AA030',
    color: 'Angora',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820687/product%20image/30_tlome0.png'
  },
  {
    title: 'Nike x Stussy NRG FL SS 8 Ball T-Shirt White',
    skuProduct: 'AA051',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820688/product%20image/51_jke83t.png'
  },
  {
    title: 'Stussy ITP Flower T-Shirt White',
    skuProduct: 'AA052',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820690/product%20image/52_ja0l2k.png'
  },
  {
    title: 'Stussy Peach Pattern Shirt Black',
    skuProduct: 'AA053',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820702/product%20image/53_t0sckl.png'
  },
  {
    title: 'Stussy Soul Water Short Multi',
    skuProduct: 'AA054',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820704/product%20image/54_cbnc1c.png'
  },
  {
    title: 'Stussy Love & Peace LS T-Shirt',
    skuProduct: 'AA055',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820693/product%20image/55_ccc1im.png'
  },
  {
    title: 'Carnival Fw22 Dirty Jacket Beige',
    skuProduct: 'AA061',
    color: 'Beige',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820704/product%20image/61_tut957.png'
  },
  {
    title: 'Carnival x Disney Mickey Mouse Blue Hoodie',
    skuProduct: 'AA062',
    color: 'Purple',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820692/product%20image/62_lw978i.png'
  },
  {
    title: 'Carnival X Plastic Lab Tie-Dye T-Shirt Multicolor',
    skuProduct: 'AA063',
    color: 'Multicolor',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820692/product%20image/62_lw978i.png'
  },
  {
    title: 'Carnival X One Piece Straw Hat Pirates T-Shirt White (Drop 2)',
    skuProduct: 'AA064',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820696/product%20image/64_mldzdr.png'
  },
  {
    title: 'Carnival X Naruto Shippuden Sannin T-Shirt Navy',
    skuProduct: 'AA065',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820698/product%20image/65_r2iqyh.png'
  },
  {
    title: 'Anti Social Social Club Kkoch Hoodie Black',
    skuProduct: 'AA071',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820701/product%20image/71_hcjvtf.png'
  },
  {
    title: 'ASSC Whisper Black Tee',
    skuProduct: 'AA072',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820699/product%20image/72_qddigf.png'
  },
  {
    title: 'ASSC Logo 2 Tee White',
    skuProduct: 'AA073',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820695/product%20image/73_hoxlul.png'
  },
  {
    title: 'ANTI SOCIAL SOCIAL CLUB PINK LOGO',
    skuProduct: 'AA074',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820696/product%20image/74_dwlcil.png'
  },
  {
    title: 'ASSC Masochism Hoodie',
    skuProduct: 'AA075',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820700/product%20image/75_wgyqaw.png'
  }
];

const brand = [
  { title: 'Nike' },
  { title: 'Adidas' },
  { title: 'New Balance' },
  { title: 'Stussy' },
  { title: 'Carnival' },
  { title: 'CarnAnti Social Social Clubival' },
  { title: 'Kaws' }
];

const catergory = [
  {
    typeProduct: 'Shoes'
  },
  {
    typeProduct: 'Apperal'
  }
];

const size = [
  {
    number: '38',
    label: 'Shoes'
  }
];

const bid = [
  {
    price: '4000.00',
    expiredDate: '30DAYS',
    equipment: 'false',
    type: 'BUYER',
    createdAt: '2023-02-22 08:29:26',
    updatedAt: '2023-02-22 08:29:26'
  }
];

const order = [
  {
    transactionId: '234567891',
    createdAt: '2023-02-22 08:29:26',
    updatedAt: '2023-02-22 08:29:26'
  },
  {
    transactionId: '123456789',
    createdAt: '2023-02-22 11:29:26',
    updatedAt: '2023-02-22 11:29:26'
  }
];

const orderStatus = [
  {
    date: '1 Jan 22',
    createdAt: '2023-02-22 08:29:26',
    updatedAt: '2023-02-22 08:29:26'
  }
];

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });
    const user_res = await User.bulkCreate(user);
    const product_res = await Product.bulkCreate(product);
    const brand_res = await Brand.bulkCreate(brand);
    const catergory_res = await Catergory.bulkCreate(catergory);
    const size_res = await Size.bulkCreate(size);
    const bid_res = await Bid.bulkCreate(bid);
    const order_res = await Order.bulkCreate(order);
    const orderStatus_res = await OrderStatus.bulkCreate(orderStatus);
  } catch (err) {
    console.log(err);
  }
};

seedData();

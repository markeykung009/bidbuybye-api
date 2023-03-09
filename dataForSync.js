const {
  User,
  Product,
  Brand,
  Category,
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
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820708/product%20image/63_gn3dmg.png'
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
  },
  {
    title: 'Jordan 1 Retro High OG Lost and Found',
    skuProduct: 'AA076',
    color: 'White/Black-Grey Fog-Bleached Coral',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820672/product%20image/6_isrbpp.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Jordan 4 Retro Seafoam (W)',
    skuProduct: 'AA077',
    color: 'WHITE/SEAFOAM/DARK ASH/NEUTRAL GREY',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820676/product%20image/7_lekjda.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Nike Dunk Low Essential Paisley Pack Pink (W)',
    skuProduct: 'AA078',
    color: 'White/Pearl Pink',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820674/product%20image/8_ckmy6x.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Nike Air Force 1 Low Travis Scott Cactus Jack',
    skuProduct: 'AA079',
    color: 'MULTI-COLOR/MUTED BRONZE-FOSSIL',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820684/product%20image/9_uno3s8.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Nike Benassi Slide Stussy Fossil',
    skuProduct: 'AA081',
    color: 'Camel',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820678/product%20image/11_tljano.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Nike SB Dunk High FAUST Black Gold',
    skuProduct: 'AA082',
    color: 'BLACK/GOLD',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820675/product%20image/12_mo2cot.png',
    brandId: '1',
    categoryId: '1'
  },
  {
    title: 'Nike Moc Flow SP Undercover Light Bone',
    skuProduct: 'AA083',
    color: 'BLACK/LIGHT BONE/UNIVERSITY RED/WHITEGOLD',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820676/product%20image/13_yucjsu.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'adidas Adilette 22 Slides Grey',
    skuProduct: 'AA084',
    color: 'Grey',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820678/product%20image/21_h9ys3s.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'adidas adiFOM Q Black Carbon',
    skuProduct: 'AA085',
    color: 'Core Black/Carbon/Grey Six',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820681/product%20image/22_utwnij.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'adidas Superturf Adventure Sean Wotherspoon x Hot Wheels',
    skuProduct: 'AA086',
    color: 'Cloud White / Bold Gold / Blue Bird',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820681/product%20image/23_mfitez.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'adidas Forum Low Altered Blue',
    skuProduct: 'AA087',
    color: 'Off White/Altered Blue',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820689/product%20image/27_jdovlk.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'adidas Orketro Sean Wotherspoon',
    skuProduct: 'AA088',
    color: 'SUPPLIER COLOR/WHITE/EASY YELLOW',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820694/product%20image/25_wymrhw.png',
    brandId: '2',
    categoryId: '1'
  },
  {
    title: 'New Balance 993 Joe Freshgoods Performance Art Arctic Blue',
    skuProduct: 'AA089',
    color: 'Arctic Blue/Vintage Rose',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820686/product%20image/31_sufklv.png'
  },
  {
    title: 'New Balance 2002R Off White',
    skuProduct: 'AA090',
    color: 'Off White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820686/product%20image/32_yuyopc.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'New Balance 1906R White Grey Cream',
    skuProduct: 'AA091',
    color: 'White/Grey/Cream',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820691/product%20image/33_wtspel.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'New Balance 327 Multicolor',
    skuProduct: 'AA092',
    color: 'White/Black/Blue/Green',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820682/product%20image/34_uivtw2.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'New Balance Vision Racer Jaden Smith Trippy Summer Jade',
    skuProduct: 'AA093',
    color: 'WHITE/SUMMER JADE',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820684/product%20image/35_b8mhuu.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'New Balance 992 Triple Black',
    skuProduct: 'AA094',
    color: 'Triple Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820683/product%20image/36_drpp0g.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'New Balance 550 White Grey',
    skuProduct: 'AA095',
    color: 'White Grey',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820683/product%20image/37_zood4k.png',
    brandId: '3',
    categoryId: '1'
  },
  {
    title: 'STUSSY PATCHWORK ZIP JACKET Multi',
    skuProduct: 'AA096',
    color: 'Multicolor',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820699/product%20image/56_qjfxkd.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title: 'STUSSY Butterfly Sweat Pants Black',
    skuProduct: 'AA097',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820695/product%20image/57_zrc06g.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title: 'STUSSY PATCHWORK ZIP JACKET Multi',
    skuProduct: 'AA098',
    color: 'Multicolor',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820699/product%20image/58_mkkmgi.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title: 'STUSSY Butterfly Sweat Pants Black',
    skuProduct: 'AA099',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820701/product%20image/59_h7m2sk.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title: 'STUSSY DRIFT PANT Pink',
    skuProduct: 'AA100',
    color: 'Pink',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820699/product%20image/58_mkkmgi.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title: 'STUSSY SKYLINE TEE Black',
    skuProduct: 'AA101',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820691/product%20image/60_yfmfqw.png',
    brandId: '4',
    categoryId: '2'
  },
  {
    title:
      'Carnival X Netflix Squid Game Player Number T-shirt Limited Edition 456 Pieces',
    skuProduct: 'AA102',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820697/product%20image/66_xda6ng.png',
    brandId: '5',
    categoryId: '2'
  },
  {
    title: 'Carnival X Gongkan VI Boy T-Shirt White',
    skuProduct: 'AA103',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820693/product%20image/67_df3dzz.png',
    brandId: '5',
    categoryId: '2'
  },
  {
    title: 'Carnival X MMFK Hawaii Shirt Hellyeah!',
    skuProduct: 'AA104',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820687/product%20image/68_o22rht.avif',
    brandId: '5',
    categoryId: '2'
  },
  {
    title: 'Carnival Warp Check Easy Shorts Navy',
    skuProduct: 'AA105',
    color: 'Navy',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820706/product%20image/69_pacbez.png',
    brandId: '5',
    categoryId: '2'
  },
  {
    title: 'Anti Social Social Club x Paul Frank Lounge Tee Dark Chocolate',
    skuProduct: 'AA106',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820698/product%20image/76_tskwvc.png',
    brandId: '6',
    categoryId: '2'
  },
  {
    title: 'Anti Social Social Club Back Pain Tee Black',
    skuProduct: 'AA107',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820706/product%20image/77_avhwei.png',
    brandId: '6',
    categoryId: '2'
  },
  {
    title: 'Anti Social Social Club Pink All Over You Hoodie',
    skuProduct: 'AA108',
    color: 'Pink',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820704/product%20image/78_znsbsm.png',
    brandId: '6',
    categoryId: '2'
  },
  {
    title: 'Anti Social Social Club Torn Pages Of Our Story Zip Hoodie Black',
    skuProduct: 'AA109',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820708/product%20image/79_putkfa.png',
    brandId: '6',
    categoryId: '2'
  },
  {
    title: 'ASSC x Hello Kitty Black',
    skuProduct: 'AA110',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820701/product%20image/80_ciz8fx.png',
    brandId: '6',
    categoryId: '2'
  },
  {
    title: 'Fear of God Essentials T-shirt Stretch Limo (SS22)',
    skuProduct: 'AA111',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820704/product%20image/81_htqdpt.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'Uniqlo Kaws Pink BFF Tee White',
    skuProduct: 'AA112',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820706/product%20image/82_oaqndh.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'KAWS x Human Made #7 Tee Black',
    skuProduct: 'AA113',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820707/product%20image/83_ctyvpa.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'KAWS x Human Made #3 T-shirt Black',
    skuProduct: 'AA114',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820707/product%20image/84_c9ibfw.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'Kaws Brooklyn Museum What Party T-shirt Light Pink',
    skuProduct: 'AA115',
    color: 'Light Pink',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820942/product%20image/85_wy0vec.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'KAWS x The North Face Retro 1996 Nuptse Jacket Black',
    skuProduct: 'AA116',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820713/product%20image/86_pomgrx.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'Kaws Brooklyn Museum URGE T-shirt White/Purple',
    skuProduct: 'AA117',
    color: 'White/Purple',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820709/product%20image/87_im70zu.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'KAWS x Uniqlo Clean Slate Tee (Asia Sizing) Red',
    skuProduct: 'AA118',
    color: 'Red',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820708/product%20image/88_xpziqp.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'KAWS x Dover Street Market Fluro Rebellion T-shirt Orange',
    skuProduct: 'AA119',
    color: 'White',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820712/product%20image/89_c4vf6g.png',
    brandId: '7',
    categoryId: '2'
  },
  {
    title: 'Infinite Archives x KAWS Rebuild T-shirt Black',
    skuProduct: 'AA120',
    color: 'Black',
    ProductImage:
      'https://res.cloudinary.com/dpvsogggn/image/upload/v1676820708/product%20image/90_umw2td.png',
    brandId: '7',
    categoryId: '2'
  }
];

const brand = [
  {
    title: 'Nike',
    brandPicture:
      'https://i.pinimg.com/564x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg'
  },
  {
    title: 'Adidas',
    brandPicture:
      'https://i.pinimg.com/564x/97/99/54/9799549c927c4c7f8af2c1be70f3da03.jpg'
  },
  {
    title: 'New Balance',
    brandPicture:
      'https://i.pinimg.com/564x/2b/53/d1/2b53d1943a739d6e45f1405d8f3b1b48.jpg'
  },
  {
    title: 'Stussy',
    brandPicture:
      'https://i.pinimg.com/564x/70/cf/2e/70cf2eb6d18ee69c468d131bc0bffcce.jpg'
  },
  {
    title: 'Carnival',
    brandPicture:
      'https://i.pinimg.com/564x/02/63/df/0263dff2a2901eaf6cddc4e861551b56.jpg'
  },
  {
    title: 'CarnAnti Social Social Clubival',
    brandPicture:
      'https://i.pinimg.com/564x/30/70/34/307034045d313d520857dca73df90abf.jpg'
  },
  {
    title: 'Kaws',
    brandPicture:
      'https://i.pinimg.com/564x/a7/4f/ae/a74faec4cb92a38c2e7be1ca73428798.jpg'
  }
];
const category = [
  {
    typeProduct: 'Shoes'
  },
  {
    typeProduct: 'Apperal'
  }
];

const size = [
  {
    sizeProduct: '38',
    label: 'Shoes'
  },
  {
    sizeProduct: '39',
    label: 'Shoes'
  },
  {
    sizeProduct: '40',
    label: 'Shoes'
  },
  {
    sizeProduct: '41',
    label: 'Shoes'
  },
  {
    sizeProduct: '42',
    label: 'Shoes'
  },
  {
    sizeProduct: 'S',
    label: 'Apparel'
  },
  {
    sizeProduct: 'M',
    label: 'Apparel'
  },
  {
    sizeProduct: 'L',
    label: 'Apparel'
  },
  {
    sizeProduct: 'XL',
    label: 'Apparel'
  }
];

const bid = [
  {
    price: '4000.00',
    expiredDate: false,
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
    date: '2023-02-22 11:29:26',
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
    const category_res = await Category.bulkCreate(category);
    const size_res = await Size.bulkCreate(size);
    const bid_res = await Bid.bulkCreate(bid);
    const order_res = await Order.bulkCreate(order);
    const orderStatus_res = await OrderStatus.bulkCreate(orderStatus);
  } catch (err) {
    console.log(err);
  }
};

seedData();

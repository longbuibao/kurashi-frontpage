import {
  home, products,
  catalog, contact, aboutKurashi, career, supportInfo, blog, policy,
  warrantyPolicy, yourInfo, bathroomAccessories, makeUpMirror, hangToiletPaper, glassDoorHandle, floorDrain, longFloorDrain,
  tilesFloorDrain, bathroomTiles, hangScarf, company
} from '@/i18n/translation-key'

export const navItems = [
  { label: home, url: '#' },
  { label: products, url: '#' },
  { label: catalog, url: '#' },
  { label: contact, url: 'contact' }
]

export const carouselSliderImages = [
  '/assets/carousel-sliders/Slider_01.jpg',
  '/assets/carousel-sliders/Slider_02.jpg',
  '/assets/carousel-sliders/Slider_03.jpg'
]

export const footerLinks = [
  {
    label: company,
    links: [
      { label: home, url: '#' },
      { label: aboutKurashi, url: '#' },
      { label: products, url: '#' },
      { label: career, url: '#' },
      { label: contact, url: '#' }
    ]
  },
  {
    label: supportInfo,
    links: [
      { label: catalog, url: '#' },
      { label: blog, url: '#' }
    ]
  },
  {
    label: policy,
    links: [
      { label: warrantyPolicy, url: '#' },
      { label: yourInfo, url: '#' }
    ]
  }
]

export const mockCategories = [
  {
    categoryName: bathroomAccessories,
    kurashiCollection: {
      hasKurashiCollection: true,
      collectionName: 'Black Collection',
      collectionCategories: [
        {
          name: makeUpMirror,
          thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg'
        }
      ]
    },
    subCategories: [
      {
        name: makeUpMirror,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: hangToiletPaper,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      },
      {
        name: glassDoorHandle,
        thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
        url: '#'
      }
    ]
  },
  {
    categoryName: floorDrain,
    kurashiCollection: {
      hasKurashiCollection: false,
      collectionName: null,
      collectionCategories: []
    },
    subCategories: [
      {
        name: longFloorDrain,
        thumbnail: '/assets/products/towel/towel.jpg',
        url: '#'
      },
      {
        name: tilesFloorDrain,
        thumbnail: '/assets/products/towel/towel.jpg',
        url: '#'
      }
    ]
  },
  {
    categoryName: bathroomTiles,
    kurashiCollection: {
      hasKurashiCollection: false,
      collectionName: null,
      collectionCategories: []
    },
    subCategories: [
      {
        name: tilesFloorDrain,
        thumbnail: '/assets/products/towel/towel.jpg',
        url: '#'
      },
      {
        name: hangScarf,
        thumbnail: '/assets/products/towel/towel.jpg',
        url: '#'
      }
    ]
  }
]

export const mockBlogs = [
  {
    thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
    title: 'nhà vệ sinh không mùi',
    content: 'Ga thoát sàn có bộ xả chuyên dụng từ Nhật Bản',
    date: '03/02/2023',
    url: '#'
  },
  {
    thumbnail: '/assets/products/mirrors/PRE_B816xA500FHrP-CROPED.jpg',
    title: 'phụ kiện màu đen mờ',
    content: 'Vẻ sang trọng nhờ công nghệ mạ từ Nhật Bản',
    date: '03/02/2023',
    url: '#'
  }
]

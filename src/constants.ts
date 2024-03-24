import {
  home, products,
  catalog, contact, aboutKurashi, career, supportInfo, blog, policy,
  warrantyPolicy, yourInfo, company
} from '@/i18n/translation-key'

export const navItems = [
  { label: home, url: '/' },
  { label: products, url: '#' },
  { label: catalog, url: '#' },
  { label: contact, url: '/contact' },
  { label: blog, url: '/blogs' }
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
      { label: home, url: '/' },
      { label: aboutKurashi, url: '#' },
      { label: products, url: '#' },
      { label: career, url: '#' },
      { label: contact, url: '/contact' }
    ]
  },
  {
    label: supportInfo,
    links: [
      { label: catalog, url: '#' },
      { label: blog, url: '/blogs' }
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

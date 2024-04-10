import * as transKey from '@/i18n/translation-key'

export const phoneNumber = '0979988617'

export const navItems = [
  { label: transKey.home, url: '/' },
  { label: transKey.products, url: '/products' },
  { label: transKey.catalog, url: '#' },
  { label: transKey.contact, url: '/contact' },
  { label: transKey.blog, url: '/blogs' }
]

export const carouselSliderImages = [
  '/assets/carousel-sliders/Slider_01.jpg',
  '/assets/carousel-sliders/Slider_02.jpg',
  '/assets/carousel-sliders/Slider_03.jpg'
]

export const footerLinks = [{
  label: transKey.company,
  links: [
    { label: transKey.home, url: '/' },
    { label: transKey.aboutKurashi, url: '/about' },
    { label: transKey.products, url: '/products' },
    { label: transKey.career, url: '#' },
    { label: transKey.contact, url: '/contact' }
  ]
}, {
  label: transKey.supportInfo,
  links: [
    { label: transKey.catalog, url: '#' },
    { label: transKey.blog, url: '/blogs' }
  ]
}, {
  label: transKey.policy,
  links: [
    { label: transKey.warrantyPolicy, url: '#' },
    { label: transKey.yourInfo, url: '#' }
  ]
}]

export const homeLink = '/'

export const defaultBlogsLink = '/blogs?blogPage='
export const createDefaultCategoryProductsLink = (id: string): string => `/products/category/${id}?productPage=`
export const defaultBlogViewLink = '/blogs/view/'
export const googleMapLink = 'https://maps.app.goo.gl/xqWhEEcbA6CPqFNr7'

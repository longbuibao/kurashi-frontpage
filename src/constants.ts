import * as transKey from '@/i18n/translation-key'

export const phoneNumber = '0979988617'
export const email = 'kurashi-corp@kurashi.com.vn'

export const navItems = [
  { label: transKey.home, url: '/' },
  { label: transKey.products, url: '/products' },
  { label: transKey.catalog, url: '#' },
  { label: transKey.contact, url: '/contact' },
  { label: transKey.blog, url: '/blogs' }
]

export const carouselSliderImages = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/Slider_01.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/Slider_02.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/Slider_03.jpg'
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
    { label: transKey.warrantyPolicy, url: '/warranty-policy' },
    { label: transKey.yourInfo, url: '/policy' },
    { label: transKey.deliveryPolicy, url: '/delivery-policy' }
  ]
}]

export const homeLink = '/'

export const defaultBlogsLink = '/blogs?blogPage='
export const createDefaultCategoryProductsLink = (id: string): string => `/products/category/${id}?productPage=`
export const defaultBlogViewLink = '/blogs/view/'
export const googleMapLink = 'https://maps.app.goo.gl/xqWhEEcbA6CPqFNr7'

export const zaloLink = 'https://zalo.me/0979988617'

export const sussesEmailRegistration = 'ok#####'
export const failEmailRegistration = 'fail#####'
export const existedEmailRegistration = 'existed#####'

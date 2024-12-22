import * as transKey from '@/i18n/translation-key'

export const phoneNumber = '(+84) 979988617'
export const email = 'kurashi-corp@kurashi.com.vn'

export const navItems = [
  { label: transKey.home, url: '/' },
  { label: transKey.products, url: '/products' },
  { label: transKey.catalog, url: '/catalogs' },
  { label: transKey.contact, url: '/contact' },
  { label: transKey.blog, url: '/blogs' }
]

export const carouselSliderImages = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider_new_01.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider%2003-01-01.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider%202-01.webp'
]

export const carouselSliderImagesMobile = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/slider_thep_trang_men_mobile_new.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/slider2mobile.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/slider4mobile.webp'
]

export const footerLinks = [{
  label: transKey.company,
  links: [
    { label: transKey.aboutKurashi, url: '/about' },
    { label: transKey.products, url: '/products' },
    { label: transKey.career, url: '#' },
    { label: transKey.contact, url: '/contact' },
    { label: transKey.catalog, url: '/catalogs' },
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
export const facebookLink = 'https://m.facebook.com/kurashicorp/'
export const youtubeLink = 'https://www.youtube.com/channel/UChqsY9O8M5Y70iMC5S9bdyQ'

export const sussesEmailRegistration = 'ok#####'
export const failEmailRegistration = 'fail#####'
export const existedEmailRegistration = 'existed#####'

import * as transKey from '@/i18n/translation-key'

export const phoneNumber = '(+84) 979988617'
export const email = 'kurashi-corp@kurashi.com.vn'

export const navItems = [
  { label: 'Trang chủ', url: '/' },
  { label: 'Sản phẩm', url: '/san-pham' },
  { label: 'Về Kurashi', url: '/ve-kurashi-corp' },
  { label: 'K Journal', url: '/blog' },
  { label: 'Catalog', url: '/catalog' },
  { label: 'Liên hệ', url: '/lien-he' }
]

export const carouselSliderImages = [
  { title: 'tấm ốp nam châm', url: '/san-pham/tam-op-tuong-nam-cham', imageLink: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/sliders/tam-op-nam-cham-kurashi.webp' },
  { title: 'thép tráng men', url: '/san-pham/tam-op-tuong-bang-thep-trang-men', imageLink: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/sliders/thep-trang-men-kurashi.webp' },
  { title: 'vòi rửa cao cấp', url: '/san-pham/voi-rua-cao-cap', imageLink: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/sliders/voi-rua-cao-cap-kurashi.webp' }
]

export const carouselSliderImagesMobile = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Mobile_slider_1.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Mobile_slider_2.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Mobile_slider_3.jpg'
]

export const footerLinks = [{
  label: transKey.company,
  links: [
    { label: transKey.aboutKurashi, url: '/ve-kurashi-corp' },
    { label: transKey.products, url: '/san-pham' },
    { label: transKey.career, url: '#' },
    { label: transKey.contact, url: '/lien-he' },
    { label: transKey.catalog, url: '/catalog' },
    { label: transKey.blog, url: '/blog' }
  ]
}, {
  label: transKey.policy,
  links: [
    { label: transKey.warrantyPolicy, url: '/chinh-sach-bao-hanh' },
    { label: transKey.yourInfo, url: '/chinh-sach-bao-mat-thong-tin' },
    { label: transKey.deliveryPolicy, url: '/chinh-sach-giao-hang' }
  ]
}]

export const homeLink = '/'

export const defaultBlogsLink = '/blog?blogPage='
export const createDefaultCategoryProductsLink = (id: string): string => `/products/category/${id}?productPage=`
export const defaultBlogViewLink = '/blog/view/'
export const googleMapLink = 'https://maps.app.goo.gl/xqWhEEcbA6CPqFNr7'

export const zaloLink = 'https://zalo.me/0979988617'
export const facebookLink = 'https://m.facebook.com/kurashicorp/'
export const youtubeLink = 'https://www.youtube.com/channel/UChqsY9O8M5Y70iMC5S9bdyQ'

export const sussesEmailRegistration = 'ok#####'
export const failEmailRegistration = 'fail#####'
export const existedEmailRegistration = 'existed#####'

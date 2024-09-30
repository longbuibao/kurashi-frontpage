import Image from 'next/image'

export const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/11.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/12.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/13.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/14.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/15-01.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/15.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/16.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/17.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/7.jpg',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/8.jpg'
].map(x => {
  return {
    key: x,
    content: (
      <div>
        <Image src={x} width={500} height={500} alt='Ứng dụng của thép tráng men' />
      </div>
    )
  }
})

export const blogImageUrls = [
  {
    imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/ke_dung_tich_hop_moc_treo.jpg',
    content: 'Chỉ 1 phụ kiện nhưng tích hợp 2 chức năng vừa là kệ đựng hũ gia vị, vừa là móc treo.',
    title: 'Kệ đựng tích hợp móc treo'
  },
  {
    imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/ke_dung_di_dong.jpg',
    content: 'Tùy ý chỉnh chiều dài để đặt hộp giấy, thớt hoặc thậm chí iPad',
    title: 'Kệ đựng di động'
  },
  {
    imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/moc_treo_khan_ba_nhanh.jpg',
    content: 'Treo tối đa 3 khăn xen kẽ, ngay trước mặt, luôn khô ráo, sạch sẽ',
    title: 'Móc treo khăn 3 nhánh'
  }
].map(x => {
  return {
    key: x.imageUrl,
    image: (
      <div>
        <Image src={x.imageUrl} width={300} height={300} alt='Ứng dụng của thép tráng men' />
      </div>
    ),
    content: x.content,
    title: x.title
  }
})

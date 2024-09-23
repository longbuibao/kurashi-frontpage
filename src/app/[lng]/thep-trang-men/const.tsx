import Image from 'next/image'

export const features = [{
  title: 'chống xước',
  content: 'Không xước kể cả khi chà bằng bùi nhùi kim loại nhờ cấu trúc tích hợp men kính và kim loại 6 lớp. Nên bếp bền, duy trì sự sạch sẽ và vẻ đẹp lâu.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/feature_1.svg'
}, {
  title: 'CHỐNG CHÁY',
  content: 'Chống cháy, kể cả khi đốt trực tiếp. Ngăn lửa cháy lan từ bếp. Đảm bảo an toàn phòng chống cháy nổ theo pháp luật.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/feature_2.svg'
}, {
  title: 'CHỐNG Ố',
  content: 'Chống ố vượt trội với các loại thực phẩm, gia vị, hóa chất, sản phẩm chăm sóc cá nhân và các vết dầu mỡ văng ra khi nấu ăn. Vệ sinh lau chùi đơn giản.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/feature_3.svg'
}, {
  title: 'DỄ THI CÔNG',
  content: 'Dễ cắt bằng máy cắt cầm tay hoặc kéo nên có thể ốp tường với các góc cạnh, hình dáng phức tạp ngay tại công trình. Đặc biệt có thể ốp được các góc tường uốn cong.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/feature_4.svg'
}]

export const applications = [
  {
    title: 'ỐP TƯỜNG BẾP',
    content: ['Ứng dụng để ốp bếp với hình dáng phức tạp, góc cạnh hoặc thậm chí bo cong.', 'Kết hợp với phụ kiện nam châm cho không gian bếp sạch sẽ và tiện lợi nhất theo phong cách Nhật Bản'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/6.jpg',
    key: '1'
  },
  {
    title: 'ỐP TƯỜNG LAVABO NHÀ TẮM',
    content: ['Ốp tường và cạnh bên lavabo phòng tắm.', 'Kết hợp phụ kiện nam châm như hộp đựng bàn chải và kem đánh răng, móc treo khăn.'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/4.jpg',
    key: '2'
  },
  {
    title: 'ỐP TƯỜNG VĂN PHÒNG',
    content: ['Ốp tường văn phòng, bảng hội nghị, tường công trình công cộng'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/5.jpg',
    key: '3'
  }
]

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

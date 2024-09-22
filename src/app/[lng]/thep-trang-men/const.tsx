import Image from 'next/image'

export const features = [{
  title: 'chống xước',
  content: 'Không xước kể cả khi chà bằng bùi nhùi kim loại nhờ cấu trúc tích hợp men kính và kim loại 6 lớp. Nên bếp bền, duy trì sự sạch sẽ và vẻ đẹp lâu.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_1.png'
}, {
  title: 'CHỐNG CHÁY',
  content: 'Chống cháy, kể cả khi đốt trực tiếp. Ngăn lửa cháy lan từ bếp. Đảm bảo an toàn phòng chống cháy nổ theo pháp luật.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_1.png'
}, {
  title: 'CHỐNG Ố',
  content: 'Chống ố vượt trội với các loại thực phẩm, gia vị, hóa chất, sản phẩm chăm sóc cá nhân và các vết dầu mỡ văng ra khi nấu ăn. Vệ sinh lau chùi đơn giản.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_1.png'
}, {
  title: 'DỄ THI CÔNG',
  content: 'Dễ cắt bằng máy cắt cầm tay hoặc kéo nên có thể ốp tường với các góc cạnh, hình dáng phức tạp ngay tại công trình. Đặc biệt có thể ốp được các góc tường uốn cong.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_4.png'
}]

export const applications = [
  {
    title: 'ỐP TƯỜNG BẾP',
    content: ['Ứng dụng để ốp bếp với hình dáng phức tạp, góc cạnh hoặc thậm chí bo cong.', 'Kết hợp với phụ kiện nam châm cho không gian bếp sạch sẽ và tiện lợi nhất theo phong cách Nhật Bản'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/application_1.png',
    key: '1'
  },
  {
    title: 'ỐP TƯỜNG LAVABO NHÀ TẮM',
    content: ['Ốp tường và cạnh bên lavabo phòng tắm.', 'Kết hợp phụ kiện nam châm như hộp đựng bàn chải và kem đánh răng, móc treo khăn.'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/application_2.png',
    key: '2'
  },
  {
    title: 'ỐP TƯỜNG VĂN PHÒNG',
    content: ['Ốp tường văn phòng, bảng hội nghị, tường công trình công cộng'],
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/application_3.png',
    key: '3'
  }
]

export const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_1.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_10.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_2.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_3.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_4.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_5.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_6.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_7.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_8.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/slider_9.png'
].map(x => {
  return {
    key: x,
    content: (
      <div>
        <Image src={x} width={563} height={470} alt='Ứng dụng của thép tráng men' />
      </div>
    )
  }
})

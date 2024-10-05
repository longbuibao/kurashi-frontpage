import Image from 'next/image'

export const features = [{
  title: 'chống xước',
  content: 'Không xước kể cả khi chà bằng bùi nhùi kim loại nhờ cấu trúc tích hợp men kính và kim loại 6 lớp. Nên bếp bền, duy trì sự sạch sẽ và vẻ đẹp lâu.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/chong_xuoc.png'
}, {
  title: 'CHỐNG CHÁY',
  content: 'Chống cháy, kể cả khi đốt trực tiếp. Ngăn lửa cháy lan từ bếp. Đảm bảo an toàn phòng chống cháy nổ theo pháp luật.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/chong_chay.png'
}, {
  title: 'CHỐNG Ố',
  content: 'Chống ố vượt trội với các loại thực phẩm, gia vị, hóa chất, sản phẩm chăm sóc cá nhân và các vết dầu mỡ văng ra khi nấu ăn. Vệ sinh lau chùi đơn giản.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/de_ve_sinh.png'
}, {
  title: 'DỄ THI CÔNG',
  content: 'Dễ cắt bằng máy cắt cầm tay hoặc kéo nên có thể ốp tường với các góc cạnh, hình dáng phức tạp ngay tại công trình. Đặc biệt có thể ốp được các góc tường uốn cong.',
  thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/de_thi_cong.png'
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

export const specData = [{
  chars: 'Độ dày lớp thép tráng men bề mặt 130µm',
  result: '130µm'
}, {
  chars: 'Độ dày lớp kim loại nền 0.3~0.35mm',
  result: '0.3~0.35mm'
}, {
  chars: 'Độ dày lớp thép tráng men nền 30µm',
  result: '30µm'
}, {
  chars: 'Độ lệch màu ∆Ε tiêu chuẩn dưới 0.5',
  result: 'dưới 0.5'
}, {
  chars: 'Độ bóng bề mặt (GS45°)',
  result: '100%, 55%, 92%'
}, {
  chars: 'Độ cứng Mohs',
  result: '5.5'
}, {
  chars: 'Chống xước, Phương pháp Taber 1.3mg (Vòng ma sát CS-17/1kg 1000 vòng quay)',
  result: '1.3mg'
}, {
  chars: 'Khả năng chống dung môi (Toluen, acetone, cồn, benzen, stiren)',
  result: 'không thay đổi'
}, {
  chars: 'Độ nhám bề mặt (Chiều cao tối đa 2.5mm)',
  result: '1.2µm'
}, {
  chars: 'Số chứng nhận chống cháy',
  result: 'NM-2744'
}]

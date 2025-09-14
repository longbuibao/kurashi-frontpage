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
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/ttm_landingpage.jpg',
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
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_1.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_2.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_3.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_4.png'
].map(x => {
  return {
    key: x,
    content: (
      <Image src={x} width={500} height={300} alt='Ứng dụng của thép tráng men' />
    )
  }
})

export const specData = [{
  chars: 'Độ dày lớp thép tráng men bề mặt',
  result: '130µm'
}, {
  chars: 'Độ dày lớp kim loại nền',
  result: '0.3~0.35mm'
}, {
  chars: 'Độ dày lớp thép tráng men nền',
  result: '30µm'
}, {
  chars: 'Độ lệch màu ∆Ε tiêu chuẩn',
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

export interface FeatureCardProps {
  title: string
  imageUrl: string
  content: string[]
}

export const featuresDataDauMo: FeatureCardProps[] = [
  {
    title: 'KHẢ NĂNG CHỐNG DẦU MỠ',
    content: ['Đổ vết dầu 180°C lên bề mặt trong 30 ngày, sau đó lau bằng nước và vải sạch.', 'Với thép tráng men, chỉ cần lau 5 lần là sạch, nên có khả năng chống dầu mỡ vượt trội.'],
    imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thi-nghiem-1.jpg'
  },
  {
    title: 'KHẢ NĂNG CHỐNG VẾT CHÁY',
    content: ['Đốt bề mặt bằng đầu lửa trong 1 phút, sau đó lau bằng vải.', 'Với thép tráng men, lau sạch được có khả năng chống cháy và không để lại vết đen.'],
    imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thi-nghiem-2.jpg'
  }
]

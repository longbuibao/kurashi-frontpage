import * as z from 'zod'
import Image from 'next/image'

const Color = z.object({ alt: z.string(), imageUrl: z.string().url(), colorName: z.string() }).array()

const Characteristic = z.object({
  key: z.string(),
  content: z.string(),
  images: z.object({
    src: z.string().url(),
    alt: z.string()
  }).array()
}).array()

export const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-1.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-2.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-3.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-4.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-5.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-6.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-7.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-8.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-9.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-10.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/ung-dung/ung-dung-11.png'
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

export const characteristics: z.infer<typeof Characteristic> = [{
  key: '1',
  content: 'Bề mặt lồi lõm tự nhiên nên dưới ánh đèn chiếu sáng, nhìn dưới các góc độ khác nhau sẽ cho những hiệu ứng khác nhau. Do đó làm cho không gian trở nên thú vị hơn.',
  images: [{
    src: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-char/char1.png',
    alt: 'Đặc tính của tấm ốp đá'
  }, {
    src: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-char/char2.png',
    alt: 'Đặc tính của tấm ốp đá'
  }]
}, {
  key: '2',
  content: 'Tấm ốp chỉ dày 3mm, nhẹ, cắt ghép dán đơn giản. Do đó dễ vận chuyển, dễ thi công, tiết kiệm chi phí vận chuyển và thi công.',
  images: [
    { src: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-char/char3.png', alt: 'Đặc tính của tấm ốp đá' },
    { src: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-char/char4.png', alt: 'Đặc tính của tấm ốp đá' }
  ]
}
]

export const characteristic: z.infer<typeof Characteristic.element> = {
  content: 'Dễ dàng kết hợp các tấm ốp màu khác nhau trên cùng một mảng tường để tạo điểm nhấn, mang đến vẻ sang trọng cho không gian sống.',
  images: [{ src: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-char/char-4.png', alt: 'Đặc tính của tấm ốp đá' }],
  key: '3'
}

export const colorsImage: z.infer<typeof Color> = [
  { alt: 'Xám travertine', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-1-new.png', colorName: 'Xám travertine' },
  { alt: 'Be slate', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-2.png', colorName: 'Be slate' },
  { alt: 'Gỉ sắt', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-3.png', colorName: 'Gỉ sắt' },
  { alt: 'Xám xi măng', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-4.png', colorName: 'Xám xi măng' },
  { alt: 'Đen travertine', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-5.png', colorName: 'Đen travertine' },
  { alt: 'Đen slate', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-6.png', colorName: 'Đen slate' },
  { alt: 'Gỉ đen', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-7.png', colorName: 'Gỉ đen' },
  { alt: 'Đen xi măng', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-8.png', colorName: 'Đen xi măng' }
]

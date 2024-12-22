import * as z from 'zod'

const Color = z.object({ alt: z.string(), imageUrl: z.string().url() }).array()

const Characteristic = z.object({
  key: z.string(),
  content: z.string(),
  images: z.object({
    src: z.string().url(),
    alt: z.string()
  }).array()
}).array()

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
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-1.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-2.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-3.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-4.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-5.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-6.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-7.png' },
  { alt: '', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-color/color-8.png' }
]

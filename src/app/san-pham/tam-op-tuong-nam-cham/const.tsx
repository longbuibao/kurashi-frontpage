import Image from 'next/image'

export const intro = 'Tấm ốp tường nam châm'
export const mauSac = 'Màu sắc'
export const ungDung = 'Ứng dụng'
export const quyCach = 'Quy cách'
export const cauTao = 'Cấu tạo'
export const tinhChat = 'Tính chất'
export const lienHe = 'Liên hệ'

export const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_1.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_2.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_3.png',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/ung_dung_4.png'
].map(x => {
  return {
    key: x,
    content: (
      <Image src={x} width={500} height={300} alt='Ứng dụng của tấm ốp tường nam châm' />
    )
  }
})

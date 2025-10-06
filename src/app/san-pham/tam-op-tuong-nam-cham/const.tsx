import Image from 'next/image'

export const intro = 'Tấm ốp tường nam châm'
export const mauSac = 'Màu sắc'
export const ungDung = 'Ứng dụng'
export const quyCach = 'Quy cách'
export const cauTao = 'Cấu tạo'
export const tinhChat = 'Tính chất'
export const lienHe = 'Liên hệ'
export const sanPhamLienQuan = 'Sản phẩm liên quan'

export const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/ung-dung-op-bep.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/ung-dung-op-lavabo.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/ung-dung-op-tuong-ban-lam-viec.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/ung-dung-op-tuong-phong-khach.webp'
].map(x => {
  return {
    key: x,
    content: (
      <Image src={x} width={1281} height={701} alt='Ứng dụng của tấm ốp tường nam châm' />
    )
  }
})

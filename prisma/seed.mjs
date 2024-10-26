import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient({ log: ['error', 'query'] })

export async function main () {
  const productIds = [
    '917a4112-9d3f-4882-b1e6-97acbc27a060',
    '33ad5ea8-2c33-48eb-882f-99acaca47fb5',
    'a50d1c3f-e525-49bb-9359-88d5c753684d',
    '0836895b-caf2-4895-98df-fd1e9534c004',
    '5a75b9bf-e94b-4963-9fb1-de6c3b9aa441',
    '0c0cd11b-4fc5-45d0-b3d2-361833b0348b',
    '755b1f99-a05f-4d85-9dec-5075feb7b5cb',
    '376ce057-0cd0-42d9-942d-331ff9a72656',
    '430e919f-5c31-4784-a56e-ca0e60fa94ec',
    'a1fa0d35-96ca-4f8e-b9a6-2eb45cc1180c',
    '32945291-be51-475e-8bbc-e0505a47f1a9',
    '56419a9d-a938-4f0c-abb8-fb0d509d35a3',
    'ded9a6c4-5faf-483e-adc2-e50592bc2944',
    '02b8ab75-ab28-4a40-b377-6267b3a9e6dc',
    'cdeb8d95-6c18-4179-8786-7e6f76725742',
    '61a69f2a-ec65-4731-85c4-dcfb175a55b6',
    '643a183c-594c-4220-9b88-7052c5af0c24',
    'a1b370dd-ed00-4b1c-b9c3-3b9ab84d0d16',
    '2af39e6e-8f3a-4364-ac10-1e1bd1e8f273',
    'a5e3c7ac-a20c-4c09-bda5-abcc1324b904'
  ].map(x => {
    return `
        INSERT INTO public."ProductIntro"
(id, title, "content", "introImg", "productId", "isMainIntro", "isProductInfo")
VALUES(gen_random_uuid(), 
'HŨ ĐỰNG GIA VỊ NAM CHÂM', 
'Các giải pháp hũ đựng gia vị nam châm đặt lên tấm thép tráng men kính. Đặc biệt bạn có thể đặt hũ ngay trước mặt khi nấu ăn và tự do di chuyển đến bất kì vị trí nào, giúp gian bếp tiện lợi hơn.',
'https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/product-detail/intro-hu-dung-gia-vi-lon/intro-hu-dung-gia-vi-lon-main.png',
'${x}', true, false);
      `
  })

  fs.writeFile('C:\\Users\\Public\\productIds.txt', productIds.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err)
    } else {
      console.log('File has been saved.')
    }
  })
}

main()

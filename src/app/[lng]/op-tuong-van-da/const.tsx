import * as z from 'zod'

const Color = z.object({ alt: z.string(), imageUrl: z.string().url() }).array()

export const content = []

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

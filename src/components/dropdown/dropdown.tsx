'use client'
import { useState } from 'react'

interface Category {
  name: string
  subcategories: string[]
}

const categories: Category[] = [
  { name: 'Electronics', subcategories: ['Phones', 'Laptops', 'Cameras'] },
  { name: 'Books', subcategories: ['Fiction', 'Non-fiction', 'Comics'] },
  { name: 'Clothing', subcategories: ['Men', 'Women', 'Kids'] }
]

export default function CategoryPopups () {
  const [activePopup, setActivePopup] = useState<string | null>(null)

  return (
    <div className='flex gap-6 px-4 py-6 bg-white rounded shadow w-fit'>
      {categories.map((cat) => (
        <div
          key={cat.name}
          className='relative'
          onMouseEnter={() => setActivePopup(cat.name)}
          onMouseLeave={() => setActivePopup(null)}
        >
          <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
            {cat.name}
          </button>

          {activePopup === cat.name && (
            <div className='absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10'>
              {cat.subcategories.map((sub) => (
                <div
                  key={sub}
                  onClick={() => alert(`Selected: ${cat.name} > ${sub}`)}
                  className='px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm'
                >
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

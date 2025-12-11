import React, { useState } from 'react'

const colors = [
  "Red", 
  "Green", 
  "Blue", 
  "Yellow", 
  "Purple", 
  "Orange", 
  "Pink", 
  "Cyan", 
  "Magenta", 
  "Lime", 
  "Teal", 
  "Brown", 
];
const initialColor = colors[Math.floor(Math.random() * colors.length)];
const BgChanger = () => {
  const [currentBgColor, setCurrentBgColor] = useState(initialColor);

  return (
    <div style={{ backgroundColor: currentBgColor}} className='relative h-screen w-screen p-2'>
      <div className='absolute inset-x-2 bottom-2 bg-white rounded-md px-2 py-1 flex flex-wrap'>
        {colors.map((color) => (
          <button key={color} onClick={() => setCurrentBgColor(color)} className='flex-1 outline-0 text-black m-2 px-4 py-1 rounded-lg' style={{ backgroundColor: color}}>
            {color}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BgChanger
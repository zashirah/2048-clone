import React from 'react'

function Button({ buttonText }) {
  return (
    <div>
      <button className='w-48 bg-blue-600 rounded-lg text-gray-200 text-2xl py-4 font-bold'>
        {buttonText}
      </button>
    </div>
  )
}

export default Button

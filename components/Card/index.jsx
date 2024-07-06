import React from 'react'

const CardComponent = props => {
  const {children} = props
  return (
    <div className='w-4/5 lg:w-full h-72 rounded border-slate-400 border-2'>
        <a href={`/search/${children}`}>
        {children}
        </a>
    </div>
  )
}

export default CardComponent

import React, { memo } from 'react'

interface ProcessInterface{
    index: number
    title: string
    content: string
}

const Process = memo(({ index, title, content}: ProcessInterface) => {
  return (
    <div className={`flex flex-col items-start  w-63.75 gap-4 ${index === 4 ? 'col-start-3' : index === 5 ? 'col-start-2 row-start-2' : index === 6 ? 'col-start-1 row-start-2' : ''}`}>
        <div className='flex items-center gap-4'>
            <span className='text-3xl text-primary uppercase font-bold'>0{index}</span>
            <h3 className='text-2xl font-semibold '>{title}</h3>
        </div>
        <p className='text-text/60 text-xl text-justify'>{content}</p>
    </div>
  )
})

export default Process
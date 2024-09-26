import React from 'react'

const DownloadBtn = ({img, superText, mainText, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${className} w-[132px] bg-black rounded-lg flex items-center py-1.5 justify-center space-x-1 border border-gray-400`}>
        <img src={img} alt=""  className='h-[22px]'/>
        <div className='text-white text-start flex flex-col justify-end h-full'>
            <p className='text-[8px] leading-[0.9] opacity-75 ml-[1px]'>{superText}</p>
            <h4 className='text-base leading-none'>{mainText}</h4>
        </div>
    </button>
  )
}

export default DownloadBtn
import React from 'react'

export default function Result() {
    return (
        <div className='bg-white rounded-[5px] w-full'>
            <div className='py-[6px] px-4'>
                <h3 className='text-[#34313D] font-medium leading-9 tracking-[0.12px]'>https://www.frontendmentor.io</h3>
            </div>
            <div className='h-[1px] w-full bg-[#9E9AA8]'></div>
            <div className='p-6 pt-[6px] px-4'>
                <h3 className='text-[#2BD0D0] mb-2 font-medium leading-9 tracking-[0.12px]'>https://rel.ink/gob3X9</h3>
                <button className="text-lg text-white leading-6 font-bold rounded-[5px] relative z-10 w-full py-[10px] bg-[#2BD0D0]">Copy</button>
            </div>

        </div>
    )
}
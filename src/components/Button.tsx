import React from 'react'

export default function Button({ text }: { text: string }) {
    return (
        <button className='rounded-full bg-[#2BD0D0] text-lg leading-[27px] w-full pt-3 pb-[9px]'>
            {text}
        </button>
    )
}

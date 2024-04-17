'use client'
import { useState } from "react"
import clsx from "clsx"

export default function Result({ item }: { item: string }) {

    const [copied, setCopied] = useState(false)

    return (
        <div className='bg-white rounded-[5px] w-full'>
            <div className='py-[6px] px-4'>
                <h3 className='text-[#34313D] font-medium leading-9 tracking-[0.12px]'>https://www.frontendmentor.io</h3>
            </div>
            <div className='h-[1px] w-full bg-[#9E9AA8]'></div>
            <div className='p-6 pt-[6px] px-4'>
                <h3 className='text-[#2BD0D0] mb-2 font-medium leading-9 tracking-[0.12px]'>{item}</h3>
                <button onClick={() => setCopied(true)} className={clsx("text-lg text-white leading-6 font-bold rounded-[5px] relative z-10 w-full py-[10px]",
                    copied ? "bg-[#3A3054]" : "bg-[#2BD0D0]"
                )}>
                    {
                        copied ? "Copied!" : "Copy"
                    }
                </button>
            </div>

        </div>
    )
}

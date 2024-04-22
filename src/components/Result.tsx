'use client'
import { useState } from "react"
import clsx from "clsx"

export default function Result({ item, input }: { item: string, input: string }) {

    const [copied, setCopied] = useState(false)

    // setCopied(true)

    return (
        <div className='bg-white rounded-[5px] w-full max-w-[1110px] mx-auto flex flex-col md:flex-row justify-between md:items-center md:py-4 md:px-6'>
            <div className='py-[6px] px-4 md:p-0'>
                <h3 className='text-[#34313D] font-medium leading-9 tracking-[0.12px]'>{input}</h3>
            </div>
            <div className='h-[1px] w-full bg-[#9E9AA8] block md:hidden'></div>
            <div className='p-6 pt-[6px] md:p-0 px-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6'>
                <h3 className='text-[#2BD0D0] font-medium leading-9 tracking-[0.12px]'>{item}</h3>
                <button onClick={async () => {
                    await navigator.clipboard.writeText(item);
                    setCopied(true)
                }} className={clsx("text-lg text-white leading-6 md:text-[15px] font-bold rounded-[5px] relative z-10 w-full py-[10px] h-auto md:px-[31px]",
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

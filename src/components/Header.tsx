"use client"

import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"
import clsx from 'clsx'

export default function Header() {

    const [show, setShow] = useState(false)

    return (
        <header className='flex flex-row justify-between items-center relative pb-[23px] px-6'>
            <Image
                src={"/logo.svg"}
                alt='shortly logo'
                height={33}
                width={121}
            />
            <svg onClick={() => { setShow(!show) }} className='hover:cursor pointer' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="3" fill="#9E9AA8" />
                <rect y="9" width="24" height="3" fill="#9E9AA8" />
                <rect y="18" width="24" height="3" fill="#9E9AA8" />
            </svg>
            <div className={clsx('absolute -bottom-[387px] bg-[#3A3054] text-white rounded-[10px] flex-col items-center gap-[30px] px-6 py-10 text-lg font-bold leading-[27px] z-10',
                show ? "flex" : "hidden"
            )}>
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Resources</Link>
                <div className='h-[1px] bg-[#9E9AA8] w-full' />
                <Link href={"/"}>Resources</Link>
                <Button text='Sign up' />
            </div>
        </header>
    )
}

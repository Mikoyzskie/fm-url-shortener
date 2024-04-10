import React from 'react'
import Image from "next/image"
import Button from './Button'

export default function Footer() {

    const socials = ["facebook", "twitter", "pinterest", "instagram"]

    return (
        <>
            <div className="bg-[#3A3054] text-white relative">
                <Image
                    src={"/bg-boost-mobile.svg"}
                    alt="pattern background"
                    height={300}
                    width={375}
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-bold text-[28px] leading-[48px] -tracking-[0.7px]'>Boost your links today</h2>
                    <div className='w-full px-[54px]'>
                        <Button text='Get Started' />
                    </div>
                </div>
            </div>
            <footer className='bg-[#232127] text-white px-6 flex flex-col items-center pt-[54px] pb-14'>
                <Image
                    src={"/footer-logo.svg"}
                    alt='shortly logo'
                    height={33}
                    width={121}
                    className='mb-[50px]'
                />
                <div className='flex flex-col gap-10 pb-12'>
                    <div className='flex flex-col gap-[22px]'>
                        <h3 className='text-center font-bold leading-[23px] -tracking-[0.25px]'>Features</h3>
                        <div className='flex flex-col gap-[10px] text-center text-[#BFBFBF] text-[15px] font-medium -tracking-[0.23px] leading-[23px]'>
                            <p>Link Shortening</p>
                            <p>Branded Links</p>
                            <p>Analytics</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <h3 className='text-center font-bold leading-[23px] -tracking-[0.25px]'>Resources</h3>
                        <div className='flex flex-col gap-[10px] text-center text-[#BFBFBF] text-[15px] font-medium -tracking-[0.23px] leading-[23px]'>
                            <p>Blog</p>
                            <p>Developers</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <h3 className='text-center font-bold leading-[23px] -tracking-[0.25px]'>Company</h3>
                        <div className='flex flex-col gap-[10px] text-center text-[#BFBFBF] text-[15px] font-medium -tracking-[0.23px] leading-[23px]'>
                            <p>About</p>
                            <p>Our Teams</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    {
                        socials.map((social: string, index: number) => {
                            return (
                                <Image
                                    src={`/icon-${social}.svg`}
                                    alt={`${social} logo`}
                                    height={24}
                                    width={24}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </footer>
        </>
    )
}

import React from 'react'
import Image from "next/image"
import Button from './Button'

interface ILinks {
    name: string,
    navs: string[]
}

export default function Footer() {

    const socials = ["facebook", "twitter", "pinterest", "instagram"]
    const links: ILinks[] = [
        {
            name: "Features",
            navs: ["Link Shortening", "Branded Links", "Analytics"]
        },
        {
            name: "Resources",
            navs: ["Link Shortening", "Developers", "Support"]
        },
        {
            name: "Company",
            navs: ["About", "Our Teams", "Careers", "Contact"]
        },

    ]

    return (
        <>
            <div className="bg-[#3A3054] text-white relative">
                <Image
                    src={"/bg-boost-mobile.svg"}
                    alt="pattern background"
                    height={300}
                    width={375}
                    className='block md:hidden w-full object-cover h-[300px]'
                />
                <Image
                    src={"/bg-boost-desktop.svg"}
                    alt="pattern background"
                    height={250}
                    width={1440}
                    className='hidden md:block w-full object-cover h-[250px]'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-bold text-[28px] leading-[48px] -tracking-[0.7px]'>Boost your links today</h2>
                    <div className='w-full md:max-w-[197px] px-[54px] md:px-0'>
                        <Button text='Get Started' />
                    </div>
                </div>
            </div>
            <footer className='bg-[#232127] text-white px-6 md:px-0 pt-[54px] pb-14 md:pb-[72px]'>
                <div className='flex flex-col items-center md:flex-row md:items-start max-w-[1112px] mx-auto w-full justify-between'>
                    <Image
                        src={"/footer-logo.svg"}
                        alt='shortly logo'
                        height={33}
                        width={121}
                        className='mb-[50px]'
                    />
                    <div className='flex flex-col md:flex-row md:gap-[101px] justify-between items-center md:items-start'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[78px] pb-12 md:pb-0'>
                            {
                                links.map((link: ILinks, index: number) => {
                                    return (
                                        <div key={index} className='flex flex-col gap-[22px]'>
                                            <h3 className='text-center md:text-start font-bold leading-[23px] -tracking-[0.25px]'>{link.name}</h3>
                                            <div className='flex flex-col gap-[10px] text-center md:text-start text-[#BFBFBF] text-[15px] font-medium -tracking-[0.23px] leading-[23px]'>
                                                {
                                                    link.navs.map((nav, index) => {
                                                        return (
                                                            <p key={index} className='hover:text-[#2BD0D0] hover:cursor-pointer'>{nav}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
                    </div>
                </div>
            </footer>
        </>
    )
}

import React from 'react'
import Image from "next/image"

export default function Section() {
    return (
        <>
            <div className="text-center flex flex-col gap-4 max-w-[540px] w-full mx-auto">
                <h2 className="text-[28px] leading-[48px] font-bold -tracking-[0.7px] text-[#34313D]">Advanced Statistics</h2>
                <p className="text-[#9E9AA8] font-medium leading-[28px] tracking-[0.11px]">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[92px] md:gap-[30px] max-w-[1110px] mx-auto w-full'>
                <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative h-fit">
                    <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Brand Recognition</h3>
                    <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    <div className="size-[88px] inset-x-0 md:inset-x-auto mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
                        <Image
                            src={"/icon-brand-recognition.svg"}
                            alt="brand recognition"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative h-fit md:mt-[44px]">
                    <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Detailed Records</h3>
                    <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    <div className="size-[88px] inset-x-0 md:inset-x-auto mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
                        <Image
                            src={"/icon-detailed-records.svg"}
                            alt="brand recognition"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative h-fit md:mt-[88px]">
                    <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Fully Customizable</h3>
                    <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    <div className="size-[88px] inset-x-0 md:inset-x-auto mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
                        <Image
                            src={"/icon-fully-customizable.svg"}
                            alt="brand recognition"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

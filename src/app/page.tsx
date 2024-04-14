

import Image from "next/image"
import Button from "@/components/Button"
import Result from "@/components/Result";
import Form from "@/components/Form";

export default async function Home() {




  return (
    <>
      <main className="pb-[168px] px-6">
        <div className="overflow-hidden pb-[37px]">
          <Image
            src={"/illustration-working.svg"}
            alt="hero image"
            width={733}
            height={482}
            className="relative"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[42px] font-bold text-[#34313D] leading-[48px] text-center">
            More than just shorter links
          </h1>
          <p className="text-[#9E9AA8] font-medium text-lg leading-[30px] tracking-[0.12px] text-center mb-5">
            {"Build your brand’s recognition and get detailed insights on how your links are performing."}
          </p>
          <div className="px-[65px] font-bold text-white">
            <Button text="Get Started" />
          </div>
        </div>
      </main>
      <section className="relative bg-[#EFF1F7] px-6 pt-[160px] pb-[80px]">
        <div className="absolute -top-[77px] inset-x-0 mx-6 flex flex-col gap-6">
          <div className="rounded-[10px] w-full bg-[#3A3054] relative p-6 overflow-hidden z-10  px-6">
            <Image
              src={"/bg-shorten-mobile.svg"}
              alt="bg pattern shorten"
              width={273}
              height={128}
              className="absolute top-0 right-0 z-0"
            />
            <Form />
          </div>
        </div>



        <div className="flex flex-col gap-[92px]">
          <Result />
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-[28px] leading-[48px] font-bold -tracking-[0.7px] text-[#34313D]">Advanced Statistics</h2>
            <p className="text-[#9E9AA8] font-medium leading-[28px] tracking-[0.11px]">Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>
          <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative">
            <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Brand Recognition</h3>
            <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            <div className="size-[88px] inset-x-0 mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
              <Image
                src={"/icon-brand-recognition.svg"}
                alt="brand recognition"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative">
            <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Detailed Records</h3>
            <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            <div className="size-[88px] inset-x-0 mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
              <Image
                src={"/icon-detailed-records.svg"}
                alt="brand recognition"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="text-center bg-white rounded-[5px] px-8 pt-[77px] pb-[41px] relative">
            <h3 className="text-[22px] leading-[33px] font-bold tracking-normal text-[#34313D]">Fully Customizable</h3>
            <p className="text-[#9E9AA8] text-[15px] font-medium leading-[26px] tracking-normal">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            <div className="size-[88px] inset-x-0 mx-auto rounded-full bg-[#3A3054] flex items-center justify-center absolute -top-[44px]">
              <Image
                src={"/icon-fully-customizable.svg"}
                alt="brand recognition"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

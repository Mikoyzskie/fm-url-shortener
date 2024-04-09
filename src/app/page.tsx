import Image from "next/image"
import Button from "@/components/Button"

export default function Home() {
  return (
    <main>
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
      <div className="rounded-[10px] w-full bg-[#3A3054] relative p-6 overflow-hidden z-10 flex flex-col gap-[10px]">
        <Image
          src={"/bg-shorten-mobile.svg"}
          alt="bg pattern shorten"
          width={273}
          height={128}
          className="absolute top-0 right-0 z-0"
        />
        <input type="text" className="py-[6px] px-[16px] leading-[36px] tracking-[#0.12px] relative z-10 w-full rounded-[5px]" placeholder="Shorten a link here..." />
        <button className="text-lg text-white leading-[27px] font-bold rounded-[5px] relative z-10 w-full py-[10px] bg-[#2BD0D0]">Shorten It!</button>
      </div>
    </main>
  );
}

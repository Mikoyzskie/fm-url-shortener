"use client"

import Image from "next/image"
import Section from "@/components/Section";
import { useFormState, useFormStatus } from "react-dom"
import clsx from 'clsx'
import { shorten } from '@/app/action'
import Result from "@/components/Result";
import { useEffect, useState } from "react";

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className={clsx("text-lg text-white leading-[27px] font-bold rounded-[5px] relative z-10 w-full py-[10px]",
      pending ? "bg-[rgba(43,208,208,0.5)]" : "bg-[rgb(43,208,208)]"
    )}>
      Shorten It!
    </button>
  )
}


interface IInitial {
  message: string,
  url: string
}

const initialState: IInitial = {
  message: "",
  url: ""
}

export default function Home() {
  const [state, formAction] = useFormState(shorten, initialState)
  const [test, setTest] = useState(0)

  useEffect(() => {
    if (state.url) {
      setTest(test + 1)
    }
    console.log(test);

  }, [state])



  return (
    <>

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
            <form action={formAction} className="flex flex-col gap-4">
              <input type="text" name="url" className="py-[6px] outline-[#F46363] border-[#F46363] border-[3px] px-[16px] leading-[36px] tracking-[#0.12px] relative z-10 w-full rounded-[5px]" placeholder="Shorten a link here..." />
              <SubmitButton />
            </form>
          </div>
        </div>



        <div className="flex flex-col gap-[92px]">

          <Result />

          <Section />

        </div>
      </section>
    </>
  );
}

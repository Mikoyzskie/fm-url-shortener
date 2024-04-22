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
    <button disabled={pending} type="submit" className={clsx("text-lg text-white leading-[27px] font-bold rounded-[5px] relative z-10 w-full py-[10px] md:max-w-[188px] hover:bg-[#9AE3E3]",
      pending ? "bg-[rgba(43,208,208,0.5)]" : "bg-[rgb(43,208,208)]"
    )}>
      Shorten It!
    </button>
  )
}


interface IInitial {
  message: string,
  url: string
  input: string
}

const initialState: IInitial = {
  message: "",
  url: "",
  input: ""
}

interface ITest {
  url: string,
  input: string
}

export default function Home() {
  const [state, formAction] = useFormState(shorten, initialState)
  const [test, setTest] = useState<ITest[]>()
  const [isInvalid, setIsInvalid] = useState(false)

  useEffect(() => {
    if (state.url) {
      setIsInvalid(false)
      if (test) {
        setTest([...test, { url: state.url, input: state.input }])
      } else {
        setTest([{ url: state.url, input: state.input }])
      }
    }

    if (state.message === "Invalid URL") {
      setIsInvalid(true)
    }

  }, [state, test])


  return (
    <>

      <section className={clsx("relative bg-[#EFF1F7] px-6 pb-[80px]",
        state.url || test ? "pt-[126px] md:pt-[108px]" : "pt-[160px]"
      )}>
        <div className="absolute -top-[77px] inset-x-0 mx-6 flex flex-col gap-6">
          <div className="rounded-[10px] w-full bg-[#3A3054] relative p-6 overflow-hidden z-10 px-6 md:px-16 md:py-[52px] max-w-[1110px] mx-auto">
            <Image
              src={"/bg-shorten-mobile.svg"}
              alt="bg pattern shorten"
              width={273}
              height={128}
              className="absolute top-0 right-0 z-0 md:hidden block"
            />
            <Image
              src={"/bg-shorten-desktop.svg"}
              alt="bg pattern shorten"
              width={1110}
              height={168}
              className="absolute top-0 right-0 z-0 md:block hidden h-[168px] object-cover"
            />
            <form action={formAction} className="flex flex-col gap-4 md:flex-row">
              <div className="relative w-full">
                <input id="shorten" type="text" name="url" className={clsx("py-[6px] border-[3px] px-[16px] leading-[36px] tracking-[0.12px] relative z-10 w-full rounded-[5px]",
                  isInvalid ? "outline-[#F46363] border-[#F46363]" : ""
                )} placeholder="Shorten a link here..." />
                <label htmlFor="shorten" className={clsx("absolute -bottom-1/2 left-0 text-[#F46363] font-medium leading-[18px] tracking-[0.11px] italic",
                  isInvalid ? "block" : "hidden"
                )}>Please add a link</label>
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>

        <div className={clsx(" flex-col gap-6 md:gap-4",
          test ? "flex pb-[80px]" : "hidden"
        )}>
          {
            test?.map((item, index: number) => {
              return (
                <div key={index}>
                  <Result item={item.url} input={item.input} />
                </div>
              )
            })
          }
        </div>

        <div className="flex flex-col gap-[92px]">
          <Section />
        </div>
      </section>
    </>
  );
}

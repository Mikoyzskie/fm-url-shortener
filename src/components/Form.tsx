'use client'

import React from 'react'
import { useFormState, useFormStatus } from "react-dom"
import clsx from 'clsx'
import { shorten } from '@/app/action'

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

export default function Form() {
    const [state, formAction] = useFormState(shorten, initialState)

    console.log(state?.url);


    return (
        <>
            <form action={formAction} className="flex flex-col gap-4">
                <input type="text" name="url" className="py-[6px] outline-[#F46363] border-[#F46363] border-[3px] px-[16px] leading-[36px] tracking-[#0.12px] relative z-10 w-full rounded-[5px]" placeholder="Shorten a link here..." />
                <SubmitButton />
            </form>
        </>
    )
}

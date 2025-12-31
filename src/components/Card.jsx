import React from 'react'
import { BorderBeam } from '@stianlarsen/border-beam'

export default function Card({ title, description, image, href }) {
    return (
        <div className="relative h-[200px] w-[400px] max-lg:w-full rounded-xl p-[2px] overflow-hidden">
            {/* <BorderBeam size={300} duration={10} /> */}

            <div className="absolute inset-0 animate-border-animate
       bg-[conic-gradient(from_var(--border-angle),blue,pink,red,blue)]" />


            <div className="relative z-10 h-full w-full rounded-xl bg-second p-2 flex items-center justify-between">
                <img src={image} alt="" />
                <div>
                    <h3 className="text-white font-bold mb-2">{title}</h3>
                    <p className='line-clamp-3'>{description}</p>
                    <div className='text-right'>
                        <a href={href} target='_blank' className='mt-2 px-4 inline-block  cursor-pointer rounded-md border-gray-500 shadow-xl border-2'>Go to</a>
                    </div>

                </div>

            </div>

        </div>
    )
}

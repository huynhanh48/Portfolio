import React, { useRef } from 'react'
import me from "/Me.svg"
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react';
import Desk from './Desk';
export default function Hero() {
    const inform = useRef();

    useGSAP(() => {
        if (!inform.current) return;
        gsap.fromTo(
            inform.current.children,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
        );
    }, [])
    return (
        <section className='relative   font-primary mt-10 flex text-white justify-between max-lg:flex-col items-center gap-10'>
            <div className='relative w-full flex-center  h-[500px]'>

                <div ref={inform} className='flex-center absolute w-full h-full  right-0 max-lg:right-10 top-0' >
                    <p className='absolute right-0  text-2xl top-0 z-10 '>Hello i Am <span className='text-second'>Vo Anh!</span></p>
                    <p className='absolute  top-[20%] right-0'>
                        <p className='text-right'>A Designer who</p>
                        <p className='text-wrap text-xl'>Judges a book
                            by its cover...</p></p>
                    <p className='z-10  absolute right-0  bottom-[50%]'>
                        My skill are
                        <span className="text-second text-2xl ">
                            <Typewriter
                                options={{
                                    strings: ['TypeScript', 'Node.js', 'Tailwind', 'Prisma', 'MongoDB'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "_",

                                }}
                            />
                        </span>
                    </p>

                </div>

                <img className='absolute max-lg:left-0 z-10 bottom-0' src={me} alt="" />
            </div>
            <div className='w-full relative  flex-center h-[500px]'>
                <div className='size-[300px] rounded-full bg-second blur-3xl'>
                </div>
                <Desk />

            </div>

        </section>
    )
}

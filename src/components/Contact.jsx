import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

export default function Contact() {
    return (
        <section className='text-white px-10  pb-20 w-full '>
            <h2 className='text-2xl'>Contact</h2>
            <div className='w-3/6 my-4'>
                I'm currently looking to join a cross-functional team that values improving people's lives
                through accessible design. or have a project in mind? Let's connect.
            </div>
            <div>anhvo482004@gmail.com</div>
            <div className='flex gap-4 items-center mt-2'>

                <button className='size-8 flex-center rounded-sm cursor-pointer bg-white'>
                    <ImFacebook2 className='text-black' />
                </button>
                <button className='size-8 flex-center rounded-sm cursor-pointer bg-white'>
                    <PiYoutubeLogoBold className='text-black' />
                </button>
                <button className='size-8 flex-center rounded-sm cursor-pointer bg-white'>
                    <FaGoogle className='text-black' />
                </button>


            </div>
        </section>
    )
}

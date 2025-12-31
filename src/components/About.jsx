import React from 'react'
import Card from './Card'
import blur from "/blur.svg"
import { experience } from '../constants/root'

export default function About() {
    return (
        <section className='text-white relative px-10  max-lg:mb-[600px] min-h-screen mb-10  flex flex-col gap-10 max-lg:mt-10'>
            <div className='size-full py-80'>
                <div className='w-[50%] max-lg:w-full h-full flex  relative  flex-col gap-4'>
                    <h2 className='text-2xl font-semibold'>I'm a Software Engineer.</h2>
                    <p>Currently, I'm a Software Engineer</p>
                    <p>
                        My website
                        <a className='font-semibold text-second' href="https://freedomtrading.id.vn/" target="_blank">
                            {"           "}freedomtrading.id.vn
                        </a>
                    </p>
                    <div className='my-4'>
                        A self-taught UI/UX designer, I am currently a fourth-year student. During my university studies, I mainly focus on learning and acquiring skills such as Node.js, React, Next.js, Tailwind, etc.
                    </div>
                </div>
                <div className='text-2xl  my-4  font-semibold'>Work Experience</div>
                <div className='relative flex  h-full  justify-center w-full'>
                    <div className='w-full h-[300px] object-cover max-lg:hidden relative'>
                        <img className='absolute   translate-x-4/12' src={blur} alt="" />
                    </div>

                    <div className='grid grid-cols-2 absolute gap-10 max-lg:grid-cols-1'>
                        {experience.map((element => (
                            <Card title={element.title} description={element.desciption} image={element.image} href={element.href} />
                        )))}

                    </div>
                </div>
            </div>
        </section>
    )
}

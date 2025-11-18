import React from 'react';
import hridoy from '@/public/hridoy.png';
import Image from 'next/image';

const social = ['Fa', 'Git', 'Tw', 'Mj']

const HeroSection = () => {
    return (
        <main className="mt-20 container mx-auto ">
            <section className='flex  gap-5'>
                <div className='bg-neutral-100 dark:bg-neutral-900 w-1/4 h-[60vh] sticky top-20 rounded-2xl'>
                    <div className='flex mt-5 justify-center'>
                        <Image
                            src={hridoy}
                            alt='hridoy pic'
                            width={200}
                            height={200}
                            className='rounded-full '
                        />
                    </div>
                    {/* INFO TEXT CONTAINER  */}
                    <article className='p-4'>
                        <h4 className='text-xl pb-2'>Information About Me</h4>
                        <strong className='dark:text-neutral-200'>
                            Name
                        </strong>
                        <p className='dark:text-neutral-400'>Md Rokonuzzaman Hridoy</p>
                        <strong className='dark:text-neutral-200'>
                            Email
                        </strong>
                        <p className='dark:text-neutral-400'>hmd740004@gmail.com</p>
                        <strong className='dark:text-neutral-200'>
                            Phone
                        </strong>
                        <p className='dark:text-neutral-400'>01835849920</p>
                    </article>
                    {/* footer  */}
                    <div>
                        <p className='px-4 py-2'>Contact me on</p>
                        <hr className='text-slate-300 dark:text-neutral-600' />
                        <div className='p-4  flex  justify-between flex-wrap'>
                            {
                                social.map((itm, idx) => (
                                    <p key={idx} className='p-2 border dark:border-neutral-600 w-15 text-center rounded-xl'>{itm}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className=' w-full h-screen rounded-2xl overflow-hidden'>
                    <div className='bg-neutral-100 dark:bg-neutral-900 mb-2 h-1/4'>df</div>
                    <div className='bg-neutral-100 dark:bg-neutral-900 mb-2 h-1/4'>df</div>
                    <div className='bg-neutral-100 dark:bg-neutral-900 mb-2 h-1/4'>df</div>
                    <div className='bg-neutral-100 dark:bg-neutral-900 mb-2 h-1/4'>dfd</div>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
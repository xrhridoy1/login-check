import ActionButton from '@/components/ActionButton/ActionButton';
import InputPassword from '@/components/inputField/InputPassword';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const signUp = async (formData: FormData) => {
    'use server';

    const supabase = createClient();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await (await supabase).auth.signUp({
        email,
        password,
        options: {
            data: { display_name: name },
            emailRedirectTo: 'https://login-check-hj4m.vercel.app/',
        },
    });

    if (error) {
        redirect(`/confirm?message=Error: ${error.message}`);
    } else {
        redirect(`/confirm?message=We sent a verify email to (${email})`);
    }
};


const SigninPage = async () => {

    const supabase = createClient()


    const { data: { user } } = await (await supabase).auth.getUser();
    if (user) {
        redirect('/')
    }

    return (
        <main className='main-width mt-20'>
            <form action={signUp} className='flex items-center justify-center  h-[60vh] w-full ' autoComplete='disable'>
                <div className=' bg-white rounded dark:bg-neutral-900 p-5 md:p-10 w-full max-w-[450px] mx-auto  shadow  border border-slate-200 dark:border-neutral-700'>
                    <div className='flex flex-col gap-5'>
                        <input
                            type="text"
                            className='input-field'
                            autoComplete='disable'
                            placeholder='Your Name'
                            name='name'
                            required
                        />
                        <input
                            type="email"
                            className='input-field'
                            autoComplete='disable'
                            placeholder='Email Here'
                            name='email'
                            required
                        />
                        <InputPassword />
                    </div>
                    <div className='mt-4'>
                        <ActionButton buttonName='Sign up' />
                    </div>
                    <div className='mt-4'>
                        <Link href={'/login'} className='hover:underline text-blue-400'>Login? </Link>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default SigninPage;
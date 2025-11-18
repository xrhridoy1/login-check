import ActionButton from '@/components/ActionButton/ActionButton';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const forgatePassword = async (formData: FormData) => {
    'use server'

    const supabase = createClient()
    const email = formData.get('email') as string
    console.log(email)

    const { error } = await (await supabase).auth.resetPasswordForEmail(email, {
        redirectTo: process.env.NEXT_PUBLIC_SITE_URL + '/reset-password',
    })
    if (error) {
        redirect(`/confirm?message=Error: ${error.message}`);
    }
    else {
        redirect(`/confirm?message=We sent a reset password email to (${email})`);
    }
}
const ForgatePage = async () => {

    const supabase = createClient()


    const { data: { user } } = await (await supabase).auth.getUser();
    if (user) {
        redirect('/')
    }

    
    return (
        <main className='main-width mt-20'>
            <form action={forgatePassword} className='flex items-center justify-center  h-[60vh] w-full ' autoComplete='disable'>
                <div className=' bg-white rounded dark:bg-neutral-900 p-10 w-full max-w-[450px] mx-auto  shadow  border border-slate-200 dark:border-neutral-700'>
                    <div className='flex flex-col gap-5'>
                        <input
                            type="email"
                            className='input-field'
                            autoComplete='disable'
                            placeholder='Email Here'
                            name='email'
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <ActionButton buttonName='Forgate' />
                    </div>

                </div>
            </form>
        </main>
    );
};

export default ForgatePage;
'use client'
import ActionButton from '@/components/ActionButton/ActionButton';
import InputPassword from '@/components/inputField/InputPassword';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';
import React from 'react';

const Reset = async (formdata: FormData) => {
    const supabase = createClient();
    const password = formdata.get('password') as string;

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
        console.error('Update error:', error.message);
        redirect(`/confirm?message=${encodeURIComponent(error.message)}`);

    } else {
        redirect('/');
    }
};

const ResetPassword = () => {

    return (
        <main className='main-width mt-20'>
            <form
                action={Reset}
                className='flex items-center justify-center h-[60vh] w-full'
                autoComplete='off'
            >
                <div className='bg-white rounded dark:bg-neutral-900 p-10 w-full max-w-[450px] mx-auto shadow border border-slate-200 dark:border-neutral-700'>
                    <div className='flex flex-col gap-5'>
                        <InputPassword />
                    </div>
                    <div className='mt-4'>
                        <ActionButton buttonName='reset' />
                    </div>
                </div>
            </form>
        </main>
    );
};

export default ResetPassword;
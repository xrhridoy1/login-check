'use client'
import { createClient } from '@/utils/supabase/client';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const ConfirmPage = () => {
    const searchParam = useSearchParams();
    const message = searchParam.get('message')
    const supabase = createClient()

    useEffect(() => {
        const loggedin = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                redirect('/')
            }
        }
        loggedin()
    }, [supabase])

    return (
        <main className='main-width mt-20 flex justify-center h-[70vh] items-center'>
            <div className='max-w-[500px] w-full border border-slate-200 dark:border-neutral-700 shadow rounded p-4 md:p-10 text-center'>
                <p>{message}</p>
            </div>
        </main>
    );
};

export default ConfirmPage;
'use client'
import React, { useState } from 'react';

const InputPassword = () => {
    const [view, setView] = useState(true)
    return (
        <div className='relative'>
            <div className='absolute right-3 top-3 cursor-pointer select-none' onClick={() => setView(!view)}>
                {view ? (
                    <p >🙈</p>

                ) : (

                    <p >🙉</p>
                )}
            </div>
            {view ? (
                <input
                    type="password"
                    className='p-3 rounded border border-slate-300 focus:outline outline-slate-400 dark:border-neutral-700 dark:outline-neutral-600  w-full pr-10'
                    placeholder='Pass***'
                    name='password'
                    autoComplete='disable'
                    required
                />

            ) : (

                <input
                    type="text"
                    className='p-3 rounded border border-slate-300 focus:outline outline-slate-400 dark:border-neutral-700 dark:outline-neutral-600  w-full pr-10'
                    placeholder='Pass***'
                    name='password'
                    autoComplete='disable'
                    required
                />
            )}


        </div>
    );
};

export default InputPassword;
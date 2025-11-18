'use client'
import { useFormStatus } from 'react-dom';

const ActionButton = ({ buttonName }: { buttonName: string }) => {
    const { pending } = useFormStatus()
    return (
        <button className={`border py-3 border-slate-200 dark:border-neutral-700 w-full font-bold uppercase rounded ${pending ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={pending} >
            {pending ? 'Loading...' : buttonName}
        </button>
    );
};

export default ActionButton;
import React from 'react';
import { production } from '../page';


const SignleProductPage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {
    const { id } = await params
    console.log(id)
    const singleData = production.find(item => item.id === Number(id))

    return (
        <main className='main-width mt-20'>
            {singleData?.name} <br />
            {singleData?.description}
        </main>
    );
};

export default SignleProductPage;
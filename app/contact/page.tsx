import ProductSection, { ProductType } from '@/components/ProductSection/ProductSection';
import React from 'react';


export const production = [
    {
        id: 1,
        name: 'Watch',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed nemo, repudiandae quisquam ad doloribus, ipsam laudantium non quaerat a esse, repellat ipsum illo recusandae fugit sequi odio unde autem!'
    },
    {
        id: 2,
        name: 'Tomato',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed nemo, repudiandae quisquam ad doloribus, ipsam laudantium non quaerat a esse, repellat ipsum illo recusandae fugit sequi odio unde autem!'
    },
    {
        id: 3,
        name: 'Apple',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed nemo, repudiandae quisquam ad doloribus, ipsam laudantium non quaerat a esse, repellat ipsum illo recusandae fugit sequi odio unde autem!'
    },
    {
        id: 4,
        name: 'Football',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed nemo, repudiandae quisquam ad doloribus, ipsam laudantium non quaerat a esse, repellat ipsum illo recusandae fugit sequi odio unde autem!'
    },
]

const ContactPage = () => {
    return (
        <main className='mt-20 main-width flex gap-5 flex-wrap justify-center'>
            {
                production.map((item: ProductType) => (
                    <ProductSection name={item.name} description={item.description} key={item.id} id={item.id} />
                ))
            }
        </main>
    );
};

export default ContactPage;
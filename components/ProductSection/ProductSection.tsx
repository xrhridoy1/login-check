import Link from 'next/link';
import React from 'react';

export interface ProductType {
    id?: number;
    name: string;
    description: string;
}

const ProductSection = ({ name, description, id }: ProductType) => {
    return (
        <Link href={`/contact/${id}`}>
            <div className='max-w-[400px] w-full mb-5 border p-2 rounded'>
                <p className='mb-1 text-2xl'>{name}</p>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ProductSection;
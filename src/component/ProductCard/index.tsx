'use client'
import Image from 'next/image'
import Link from 'next/link';

import React from 'react'
type ProductCardProp = {
    url: string;
    alt: string;
    name: string;
    price: string;
    product_url: string;
}
const ProductCard = ({url, alt, name, price, product_url}: ProductCardProp) => {
    const slug = name.split('/').join('')
    return (
    <Link 
    onClick={(e) =>{
        // e.preventDefault();
        localStorage.setItem('slug',product_url )
    }}
    href={{
        pathname:`/detail/${slug}`,
    }} className='mt-8' style={{width:351,height:527}}>
        <Image className='rounded-lg object-cover overflow-hidden cursor-pointer' width={351} height={527} alt={alt} src={url}  />
        <div className='flex flex-row justify-between mt-2'>
            <p className='text-black hover:text-zinc-500 transition delay-100 ease-in-out'>{name.length > 80 ? `${name.slice(0.10)}...` : name}</p>
            <h1>{price}</h1>
        </div>
    </Link>
  )
}

export default ProductCard
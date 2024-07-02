import Link from 'next/link'
import React from 'react'

const Navbar = () =>{
    return <div className='p-4'>
        <div className='flex flex-row gap-8'>
            <Link href={'/'}><h1>Richard</h1></Link>
            <h2>Collection</h2>
            <h2>Favorites</h2>
        </div>
    </div>
}

export default Navbar
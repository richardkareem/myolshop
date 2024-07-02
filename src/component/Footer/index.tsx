import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaFacebookSquare, FaWhatsappSquare} from "react-icons/fa";

const footer = () => {
  return (
    <div className='px-4 py-8'>
      <div className='flex justify-between'>
          <div>
            <h1>Pengiriman</h1>
          </div>
          <div>
          <h1>Pembayaran</h1>
          </div>
          <div>
           <h1>Transaksi Aman</h1>
          </div>
      </div>
      <div className=' flex flex-row justify-center mt-8 items-center gap-4'>
        <div className='cursor-pointer'>
          <FaInstagram size={32} />
        </div>
        <div className='cursor-pointer'>
          <FaFacebookSquare size={32}/>
        </div>
        <Link target='_blank' href={'https://wa.me/62082175175013'} className='cursor-pointer'>
          <FaWhatsappSquare size={32}/>
        </Link>
      </div>
      <h1 className='text-center mt-4'>Copyright © Richard. All Right Reserved</h1>
    </div>
  )
}

export default footer
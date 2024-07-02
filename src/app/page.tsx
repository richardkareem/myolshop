import { ProductCard } from 'component/component';
import getDataProduct from 'component/utils/getDataProduct'
import React from 'react'
 
type ProductResponse =  {
  product_id: string;
  product_name: string;
  images: string;
  price: string;
  product_url: string;
}
const Home = async() => {
  const data : ProductResponse[] = await getDataProduct()
  const num = 606139;

  return (
    <div className='min-h-screen'>
      <div className='p-4 flex flex-row flex-wrap justify-around gap-12'>
        {data.map((item) => {
            return <ProductCard key={item.product_id} alt={item.product_name} name={item.product_name} price={item.price} url={item.images}
            product_url={item.product_url} />
          
        })}
      </div>
    </div>
  )
}

export default Home
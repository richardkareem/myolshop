import getDetailProduct from 'component/utils/getDetailProduct'
import React, {  } from 'react'
const DetailPage = async() => {
  const data = await getDetailProduct('wewew');
  console.log(data)
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage
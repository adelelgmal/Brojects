import ProudectDetailsScreen from '@/features/products/screens/product-details.screen'
import React from 'react'

type productDetailsPageProps={
  params: Promise<{id:string}>
}


export default async function PoductsPage({params}:productDetailsPageProps) {

  const {id} =await params;



  return (
    <>
    <ProudectDetailsScreen  productId={id} />
  
    </>
  )
}

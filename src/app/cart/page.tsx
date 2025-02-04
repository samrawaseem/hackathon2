import PageBg from '@/components/PageBg'
import TrustComp from '@/components/TrustComp'
import { MdDelete } from "react-icons/md";
import Image from 'next/image'
import React from 'react'

const Cart = () => {
    const img = 'https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBSH5RmKmYnwrB4EBmnJ68X60fq3Q5R93ceS12G1FMyIo~DoYyqNZjabDMDCZWl1y0DBfuUKZMkP-PDsVEinnKFe09R8SJt9opKaxlmPX~5sFCO~RVCJ4PoQM6cLS067d70Umk22RywDR8QSC-n-hePf-gDj9AnNNYpvcFLN0Zl0iF~r4KSK1sConQIDvripMRQsYwNSLULqNJ7ypBj2kBTOYN9OuiLxBxAOUVEVRj0~z8BeF~9ePbQHT49zk5BBSCEzqPnRsVt4qrM-Su3S6JaRm5~MA6LiJMllfPb8IhEBBxSnO3m2KXhf1WNLmRXI8s~G~ezcIdE4CRPXynKyRg__'
  return (
    <div>
        <PageBg name = {'Cart'} />

        <div className="CartIPageData flex justify-between w-[80vw] m-auto my-[2em]">
            <div className="leftCartPage w-[70%]">
                <div className="tableCart bg-[#F9F1E7] grid p-4 grid-cols-4">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="tableCart grid p-4 grid-cols-4 items-center">
                    <div className='flex tablecartimgsection items-center gap-4'>
                        <Image src={img} height={140} width={140} alt='productimg' className='bg-[#F9F1E7] rssimagecart p-3 flex justify-between items-center' />
                        <p>Asgaard sofa</p>
                    </div>
                    <p>Rs. 250,000.00</p>
                    <button className='border border-black w-8 h-8'>1</button>
                    <div className='flex gap-7 items-center'>
                        <p>Rs. 250,000.00</p>
                        <MdDelete className='text-3xl text-[#B88E2F]' />
                    </div>
                </div>
            </div>
            <div className="rightCartPage bg-[#F9F1E7] flex flex-col gap-7 p-[4em]">
                <h2 className='text-5xl flextitleCart'>Cart Totals</h2>
                <div className='flex justify-between'><p>Subtotal</p><p className='text-gray-400'>Rs. 250,000.00</p></div>
                <div className='flex justify-between'><p>Total</p><p className='text-[#B88E2F] text-2xl'>Rs. 250,000.00</p></div>
                <button className='border border-black rounded-full py-2 px-7'>Checkout</button>
            </div>
        </div>

        <TrustComp />
    </div>
  )
}

export default Cart
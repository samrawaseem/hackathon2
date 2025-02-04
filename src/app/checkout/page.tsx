import PageBg from '@/components/PageBg'
import TrustComp from '@/components/TrustComp'
import { FaCircle, FaRegCircle } from "react-icons/fa";
import React from 'react'

const Checkout = () => {
    return (
        <div>
            <PageBg name={'Checkout'} />
            <div className="CheckoutPage w-[90vw] lg:w-[80vw] mx-auto my-[3em] flex flex-col lg:flex-row gap-[5vw]">
                {/* Left Section */}
                <div className="leftCheckOut w-full lg:w-[50%]">
                    <h2 className="text-3xl lg:text-4xl mb-8">Billing details</h2>
                    <div className="CheckoutInputs flex flex-col gap-4">
                        <div className="NameInput flex flex-col lg:flex-row gap-4 w-full">
                            <div className="w-full">
                                <p>First Name</p>
                                <input
                                    type="text"
                                    className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                                />
                            </div>
                            <div className="w-full">
                                <p>Last Name</p>
                                <input
                                    type="text"
                                    className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Company Name (Optional)</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Country / Region</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Street address</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Town / City</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Province</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>ZIP code</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Phone</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p>Email address</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Additional information"
                                className="border outline-none border-gray-600 text-xl py-3 px-2 rounded-lg w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="rightCheckout w-full lg:w-[50%]">
                    <div className="upperRightCheckout flex flex-col gap-4 border-b border-black pb-8">
                        <div className="flex justify-between items-center text-2xl lg:text-3xl">
                            <h2>Product</h2>
                            <h3>Subtotal</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Asgaard sofa x 1</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Subtotal</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Total</p>
                            <p className="text-[#B88E2F] text-xl lg:text-2xl">Rs. 250,000.00</p>
                        </div>
                    </div>
                    <div className="lowerRightCheckout my-8 flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <FaCircle />
                            <p>Direct Bank Transfer</p>
                        </div>
                        <p className="text-gray-400">
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                        <div className="flex items-center gap-3 text-gray-400">
                            <FaRegCircle />
                            <p>Direct Bank Transfer</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <FaRegCircle />
                            <p>Cash On Delivery</p>
                        </div>
                        <p>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="border border-black text-xl lg:text-2xl rounded-lg py-2 px-6">Place order</button>
                    </div>
                </div>
            </div>
            <TrustComp />
        </div>
    )
}

export default Checkout;

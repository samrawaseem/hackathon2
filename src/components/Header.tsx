'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser, FaRegHeart, FaTimes, FaTimesCircle, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import fav from './Images/favicoLogo.png'

const Header: React.FC = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 md:px-10 lg:px-20 py-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <Link href={'/'} className="text-3xl font-bold flex items-center">
                <Image src={fav} height={60} width={60} alt="Logo" />
                <span className="ml-2">Furniro</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-10 text-lg font-semibold">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/* Icons */}
            <div className="flex gap-6 text-2xl">
                <Link href={'/'}><FaRegUser /></Link>
                <Link href={'/'}><IoSearch /></Link>
                <Link href={'/'}><FaRegHeart /></Link>
                <button className="relative" onClick={() => setCartOpen(true)}>
                    <AiOutlineShoppingCart />
                </button>
                <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg z-50">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
                    <Link href="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link>
                    <Link href="/blog" onClick={() => setSidebarOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
                    <FaTimes className="absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => setSidebarOpen(false)} />
                </div>
            )}

            {/* Shopping Cart Popup */}
            {cartOpen && (
                <div className="fixed top-0 right-0 bg-white shadow-lg w-[90%] md:w-[25vw] p-5 z-50 overflow-y-auto">
                    <div className="flex justify-between items-center border-b pb-4">
                        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                        <FaTimes className="text-xl cursor-pointer" onClick={() => setCartOpen(false)} />
                    </div>

                    {/* Cart Items */}
                    <div className="py-5 space-y-6">
                        
                            <div className="flex items-center gap-4">
                                <Image src={`https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CaS6K8lYZgcwrcIzuKR1t~jggjiFOh0Qr74SEzoXrv-QO-wYcVTTjapJwYtqGdj-hA5s7DPgWwIAWE~COebIehkgUvrIDpIErs2-JaimT-p3c8NoOEXZ~I23NZjKPUH5Qq8DdYaXNbcllbnM2mFZDI2wcwMYnJVlYMGP-Ckzrj1Q1vsQn7lHKKyW95hTZaHrEOsbO8TlA~aPOTIYRQMHZgqe-DmWUkYW4CVJp~D11v7XBO84T58RsvfRSLWnYTKo5~vg1HgOs3DW9l~pVyxrt4UK17-KK~gsvN6kc3FINbBSpv03TvqX4SeChbbg-nQ6kxnStOPwxQxeDv-QIRLwzA__`} height={80} width={80} alt="Product" className="bg-gray-100 rounded-lg" />
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p>Asgaard Sofa</p>
                                        <p>1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span></p>
                                    </div>
                                    <FaTimesCircle className="cursor-pointer text-xl" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image src={`https://s3-alpha-sig.figma.com/img/7614/9a1a/1d489ea6ae7783215d8976dab5c582e3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mln7ozCapiQVK2NaPRhkcmpbjoC7mYdTKe6FXnP-Z~b7CJrBHFcHNJaHN6KUlEOZg3qnxYXl4CnMFnvqRtV9b6xM~W7BKqzG~zE6H~7vysVcHQaFGyZtZkK4n8YWJB8P~a5VTdlz3BcVju~-8NiSVNiIgbhdYgRA6A6QVxQ172U1wr-MUIEF6pawmNO5wxiLy7ugwkWS9oe5c7THjmvc4miKLe77bOmvO~emgMt0PXIY~aVMnUkzq694nUH31YU1l05as60JBB--A1BcoizT5Nan6njnnSFd8CmbozP3aJ1dakHUC-8qy0knQ1Gp3dsZbRWTt3Gx58JPeoTAj6FHTA__`} height={80} width={80} alt="Product" className="bg-gray-100 rounded-lg" />
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p>Asgaard Sofa</p>
                                        <p>1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span></p>
                                    </div>
                                    <FaTimesCircle className="cursor-pointer text-xl" />
                                </div>
                            </div>
                        
                    </div>

                    {/* Cart Footer */}
                    <div className="flex justify-between border-t pt-4 text-lg font-semibold">
                        <p>Subtotal</p>
                        <p className="text-[#B88E2F]">Rs. 520,000.00</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <Link href="/cart" className="border border-black rounded-lg py-2 text-center">View Cart</Link>
                        <Link href="/checkout" className="border border-black rounded-lg py-2 text-center">Checkout</Link>
                        <Link href="/comparison" className="border border-black rounded-lg py-2 text-center">Comparison</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus, FaPlus, FaLinkedin, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import Card2 from "@/components/cards/Card2";
import sofa from "@/images/sofa.png"
import sofa2 from "@/images/sofa2.png"
import sofa3 from "@/images/sofa3.png"

interface Product {
    img: string;
    name: string;
    short: string;
    salePrice: string;
    orignalPrice: string;
}

interface SingleProductProps {
    params: { slug: string };
}

const SingleProduct: React.FC<SingleProductProps> = ({ params }) => {
    const [slug, setSlug] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState<number>(1);
    useEffect(() => {
        setSlug(params.slug);
    }, [params]);

    const handleRating = (value: number) => {
        setRating(value);
    };

    const Products: Product[] =[
        {
            img: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BCtS0zr-jfsMZLcXB6wUTv4ylMjZIXq2s-cRmVo5-iNOq2TTtHmxmW6RDStljHhAXuyXLzPHDZUu7kxGPhAaVweEXso2l~aimD8H2myKVDvHc3HpR7wlrSMcZ7YYcdseyBfHjzC8K36DXidDH0lxMeeRL01x8NiySXxAgUejTkyTbr7QutV0dmoTU76BGLd1ZSsHsFIbuMLOi0Jw78GVTzxiGhPvcbuF8bmoTEvd9XJmXj3ZFYVmNi2PW~zWd5fSP-ao3r6CVRs0PLUqzb72geIUe0BL-wQP7BHOH8~yNpqOG49RdZQUUtZnCQLyePTnWGFmV6SZF1N-a63Zy4GDOg__',
            name: 'Syltherine',
            short: 'Stylish cafe chair',
            salePrice: 'Rp 2.500.000',
            orignalPrice: 'Rp 3.500.000'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s3FvJv-3QW35-ui49SdGc9eWlpQEX7PM6mn52Pd2iz3dCf0LQieU5Burall-SpkiBfCeo0e260jtqDOrIhjbmp~OnF3c3SGd26Si55SS1j-c6wA0pnQmE7RpjgjLqKatfRv9~yTUvKbU03iZO7uIh6XxfHPoLsG-5DK087MTnh9yrEdnqYzKi9cXVGyiC-Q8tHX~dG6Jn1qhWQ9kIEGH6MVU~IgCfuaSj51Xc99L4b68Ex2Es99G2RJJFFOH8cnsacXlXeCB7SG0W-IbSWoDcDAKY~iGFA6B0jIZWvl926xjIbAxBCNiJcTPsN3i688XgnGzQfPEeawmvxGHHbARTA__',
            name: 'Leviosa',
            short: 'Stylish cafe chair',
            salePrice: 'Rp 2.500.000',
            orignalPrice: 'Rp 3.500.000'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q~AC3QUFbOD79KRagXq4inrzjWsSaFtdlJjcM~4tFFBTTs8wqGASIBfdYO14GZP9YWEbP9XnN94t55Im~EAGViWb4w7pIJkf203t8Gc2hwD0IAypE922K7PWlO3loaNkGyb80OmAVMG29o-Hf~3Bj3bL5nDiUdMF34Jrmw8n-uaE7IrYinAJTrLRStLMuQQvHMwoLhbN8OlHxldMOFSs1Ikh1ifOyG1WjJycQw6GOv2CCyQXLnyW~YQs57Il9hut4bD6qVlJkSoNQvqbc2N7CqBrWvFIELDqDyZJAqxwgvxhFAClYgTkzhFjezdTjiF~jvFb9niyRR0TtwGXSH2IXw__',
            name: 'Lolito',
            short: 'Luxury big sofa',
            salePrice: 'Rp 7.000.000',
            orignalPrice: 'Rp 14.000.000'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RUCSFV4Rqv-Q3EGXrWua8OLc0dfCqhYmxDV2aMmG5HYSU88ScKESvS3QFZMxsXlpfoPP2uyX4QxqUZPWV5wuCamPJNZcb0XRK3cFH7WwNuemJRJNJEC5TrfdI1dlUTR7rAJwyU5pwPl-PaOzMYQPq~7CbcHMuGW~oTgStKHzw~WbT-aBTT7O7Q~xS264wO~Pxn~nep-QhVO~2zm9kdVrg3NRIRDT9K0f3ynz00kFPVcUNcbYe6yWuDG71lEp9XREqc4DtBdmGr2bsz-EFqzU3n7ZvLxgcqFFhbQhLu0UGNqcKTLa7Z0J~it0zAVOzCXZC2WGFCmGP2-nWACIvXRe6g__',
            name: 'Respira',
            short: 'Outdoor bar table and stool',
            salePrice: 'Rp 500.000',
            orignalPrice: ''
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J2ZSXIamQvO8DF9EyWJtADaPqgzaBi7Ce~w5aQT55mJpu5sJftAeNVQ-NAavJnASxn653EjaGQFnnsddC~7I4muJUK77~KzGtG7MJl4k~g5fZp4nAdv7GBIm04qz3~JmHUAZgs1QvNjzdzADtOJ4JfdOi4lhGqzwkGi0xXiOMYznSsHd3yL~VvK1c2L5-sWkMTSXixZBfUnxxvzwwOo84oLLbCNaf1Nzmv4qPbe0F5ruHLU0wjKOBSgilCG5pOSh44-pJSLM2sfI5lF0IRaxwxMWBT-ZMc3Dfc6InbMk1Den-~YzoSz3icMMZidOlTuRa2~cODMrG8lCeVaIOVM3KA__',
            name: 'Grifo',
            short: 'Night lamp',
            salePrice: 'Rp 1.500.000',
            orignalPrice: ''
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f1pk-raHF92F5SFV-XS6T2iQ-Oa256Wf4bSYwMI3EteiQolVNntMUcMesbCms-DKltyXGJcBqc~Iug4hTywff0MV2-MOuofcuZ2SOLNjaOI2VTupIrxdyTWv~5OCCtekMh3jv5P4I5iV2T7WNlK3eLTOv7eVoHnrXabyF9PmzjwRC3vOXFEcIHypLzDt2htiDfosgZgzfNoD2I~YxCYI8JW4STvOD0G7RdXBCn2v21~n0pcD8yjdIwaaH6dKSnJCvSoocjkb5pvgWVkYWAqGXRvFjyxNxIWHmyUUONtBRYYrW83ETpoiOF3B-rq~DFyQSFO8stA~aQvNNHqGk6Eo1Q__',
            name: 'Muggo',
            short: 'Small mug',
            salePrice: 'Rp 150.000',
            orignalPrice: ''
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I6x~8yHbcRaBO8nGw6x38-fhIHXBjIGlKD6luYVsSJzolWYEKYjcBKmmuR27XlKVME~lu8oPdoePjWQv0TR~9fn4jUT68zchZaPzzgRE0x8PtBvbOZ3ulbc~nyfJgpHJtMrUGMZy-6Jf9U7MSt5NvyBRMkxYRpThiVhlbeL37-fwVi0rpQyfHVx7NxFGrmIO0WCs30kyp5kollJzDp-pLnsurPhvSMndyqMLrQRIYWI~grlgVCXrpVR39w2c3izDGcbYXsjuN-D9DcwmQBSn6jo~~hCqDJjVKYr1hPxChP1ehhyFqZPCGOUuyX3OUygxeZmDXmMvkNvrpFkFLS5uQA__',
            name: 'Pingky',
            short: 'Cute bed set',
            salePrice: 'Rp 7.000.000',
            orignalPrice: 'Rp 14.000.000'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nygyVOyB4izdOCIEGnS8uP-U9YoLGbYtStnK5aNxZyt1gwXJTdeRULsEoza5pRAGsmV-c3jH~xkzQ8wfAFjnuF4Jq6Ev-H5KeTTu21ZJhB~QPotiE7dQfrGBBa846l5ke5SePU89H03KcUw8VC6BWiV30yVyUWYi1MoKrgXNvOnbR3c~ZeSqqYkYS931iLgwS2sgZJbwW6iWcXz~bzf5Vly7IGdLnysJzcq1ln-mvsEfOWQVL3ychhp0NlankMtdu5kstLqHQuQyUcv0B0brT5fpRMnQxigeZgvtfHTW8mpfbUC2hVnRNGinPOau58Uqh3DYAT~7iCxjWRvVakhg-g__',
            name: 'Potty',
            short: 'Minimalist flower pot',
            salePrice: 'Rp 500.000',
            orignalPrice: ''
        },
    ]
    

    return (
        <div>
            {/* Breadcrumb */}
            <div className="upperSinglePro bg-[#F9F1E7] flex p-[2em] gap-7">
                <p className="flex border-r border-black gap-3 pr-4 items-center">
                    Home <IoIosArrowForward /> Shop <IoIosArrowForward />
                </p>
                <p>{slug}</p>
            </div>

            {/* Product Content */}
            <div className="innerSingleProduct w-[90vw] m-auto mt-[2em] flex gap-[3em]">
                {/* Left Product Section */}
                <div className="leftProductIn flex gap-[3em]">
                    {/* Thumbnail Images */}
                    <div className="flex productImagesll flex-col gap-14">
                        {[1, 2, 3, 4].map((_, index) => (
                            <Image
                                key={index}
                                src={sofa}
                                height={100}
                                width={100}
                                alt={`Product thumbnail ${index + 1}`}
                                className="bg-[#F9F1E7] p-2 rounded-md"
                                unoptimized
                            />
                        ))}
                    </div>

                    {/* Featured Image */}
                    <Image
                        src={sofa}
                        height={600}
                        width={600}
                        alt="Featured product image"
                        className="bg-[#F9F1E7] p-4 rounded-md"
                        unoptimized
                    />
                </div>

                {/* Right Product Section */}
                <div className="rightProductIn w-[50vw]">
                    <div className="basicProDetails">
                        <h2 className="text-2xl font-bold">{slug}</h2>
                        <h3 className="text-xl font-semibold text-red-500">RS 250,000.00</h3>

                        {/* Custom Star Rating */}
                        <div className="reviewsPro mt-4 flex gap-5 items-center">
                            <div className="flex gap-1 border-r border-black pr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        onClick={() => handleRating(star)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={star <= rating ? "#FFD700" : "none"}
                                        stroke="#FFD700"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 cursor-pointer"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-lg text-gray-600">5 Customer Review</p>
                        </div>
                        <div className="w-[60%] my-6">
                            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>
                        </div>
                    </div>
                    <div className="sizeCol">
                        <div className="sizeProduct">
                            <p>Size</p>
                            <div className="sizeBoxes flex gap-4 my-2">
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#B88E2F] w-12 h-12 rounded-md"><p className='text-lg text-white'>L</p></div>
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md"><p className='text-lg'>XL</p></div>
                                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md"><p className='text-lg'>XS</p></div>
                            </div>
                        </div>
                        <div className="colorProducts my-7">
                            <p>Color</p>
                            <div className="colorsBoxes flex gap-5">
                                <div className="bg-[#816DFA] h-[50px] w-[50px] rounded-full"></div>
                                <div className="bg-[#000000] h-[50px] w-[50px] rounded-full"></div>
                                <div className="bg-[#B88E2F] h-[50px] w-[50px] rounded-full"></div>
                            </div>
                        </div>
                        <div className="boxesCartetc flex gap-5 border-b border-black pb-5">
                            <div className="flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2">
                                <button
                                    disabled={count === 1}
                                    className={`cursor-pointer ${count === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => {
                                        if (count > 0) {
                                            setCount(count - 1);
                                        }
                                    }}
                                >
                                    <FaMinus />
                                </button>

                                {count}
                                <FaPlus className="cursor-pointer" onClick={() => {
                                    setCount(count + 1)
                                }} />
                            </div>
                            <div className="cursor-pointer flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2">Add To Cart</div>
                            <div className="cursor-pointer flex border border-black rounded-lg justify-center items-center gap-4 text-lg p-4 py-2"><FaPlus className="cursor-pointer" />Compare</div>
                        </div>
                        <div className="littleMoreInfo flex flex-col gp-5 text-xl my-5">
                            <div className="flex items-center gap-4">
                                <p>SKU</p>
                                <p>: SS001</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>Category</p>
                                <p>: Sofas</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>Tags</p>
                                <p>: Sofa, Chair, Home, Shop</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>Share</p>
                                <p className="flex items-center gap-4">: <FaFacebook /> <FaLinkedin /> <FaTwitterSquare /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Data */}
            <div className="ProductDataSingle flex flex-col w-[90vw] m-auto items-center my-8">
                <div className="flex text-2xl gap-6">
                    <p className="cursor-pointer font-bold">Description</p>
                    <p className="cursor-pointer">Additional Information</p>
                    <p className="cursor-pointer">Reviews [5]</p>
                </div>
                <div className="flex flex-col gap-5 w-[80%] my-8">
                    <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className="imagesSingleProduct flex gap-5">
                    <Image src={sofa2} height={500} width={700} alt="imgShowCAse" className="bg-[#F9F1E7] h-auto" />
                    <Image src={sofa3} height={500} width={700} alt="imgShowCAse" className="bg-[#F9F1E7] h-auto" />
                </div>
            </div>
            <div className="relatedProductsSingle w-[80vw] m-auto my-10">
                <h2 className="text-center text-4xl my-5">Related Products</h2>
                <div className="ProductsSinglePage grid grid-cols-4">
                    {
                        Products.slice(0, 4).map((me, index) => (
                            <Card2 key={index} img={me.img} name={me.name} short={me.short} salePrice={me.salePrice} orignalPrice={me.orignalPrice} />
                        ))
                    }
                </div>
                <div className="buttonsingleProductPAge w-[80vw] m-auto flex justify-center items-center my-4">
                    <button className="btn3 m-auto">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
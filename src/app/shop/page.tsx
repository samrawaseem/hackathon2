'use client'
import React, { useState } from 'react';
import { RiSoundModuleFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import Card2 from '@/components/cards/Card2';
import TrustComp from '@/components/TrustComp';
import PageBg from '@/components/PageBg';

// Define the Product interface
interface Product {
    img: string;
    name: string;
    short: string;
    salePrice: string;
    orignalPrice: string;
}

// Mock Products data (replace with your actual data)
const Products: Product[]  = [
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


const Shop: React.FC = () => {
    const number = Products.length;
    const [newNumber, setNewNumber] = useState<number>(8);

    // Handle input change for the number of products to show
    const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setNewNumber(value);
        }
    };

    return (
        <div>
            <PageBg name={'Shop'} />
            {/* Shop Filters */}
            <div className="ShopFilter flex flex-col md:flex-row justify-between items-center bg-[#F9F1E7] px-[5vw] py-4 gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    {/* Filter Icons */}
                    <div className="filterIcons flex gap-4 items-center text-xl border-b md:border-r border-black pb-4 md:pb-0 md:pr-5">
                        <p className="flex items-center gap-1"><RiSoundModuleFill /> Filter</p>
                        <MdSpaceDashboard />
                        <BsViewList />
                    </div>
                    {/* Showing Results */}
                    <div className="filterShow text-center md:text-left">
                        <p>Showing 1-{newNumber} of {number} results</p>
                    </div>
                </div>
                {/* Filter Options */}
                <div className="filterBoxes flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="inp1 flex gap-3 items-center">
                        <p>Show</p>
                        <input
                            className="outline-none p-2 inputFilter border rounded-md w-full md:w-auto"
                            type="number"
                            placeholder={`${newNumber}`}
                            value={newNumber}
                            onChange={handleNum}
                        />
                    </div>
                    <div className="inp1 flex gap-3 items-center">
                        <p>Sort by</p>
                        <input
                            className="outline-none p-2 inputFilter border rounded-md w-full md:w-auto"
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="ProductsListShop centered-grid w-[90vw] md:w-[80vw] m-auto mt-6 mb-6">
                {Products.slice(0, newNumber).map((me, index) => (
                    <Card2
                        key={index}
                        img={me.img}
                        name={me.name}
                        short={me.short}
                        salePrice={me.salePrice}
                        orignalPrice={me.orignalPrice}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="ShopPageNums flex gap-5 m-auto w-[90vw] md:w-[80vw] justify-center items-center mb-6">
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#B88E2F] w-12 h-12 rounded-md">
                    <p className="text-lg text-white">1</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">2</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">3</p>
                </div>
                <div className="numBox p-3 flex cursor-pointer justify-center items-center bg-[#F9F1E7] w-12 h-12 rounded-md">
                    <p className="text-lg">Next</p>
                </div>
            </div>

            {/* Trust Section */}
            <TrustComp />
        </div>
    );
};

export default Shop;
import Card4 from '@/components/cards/Card4';
import PageBg from '@/components/PageBg';
import TrustComp from '@/components/TrustComp';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';

const Blogs = [
    {
        title: 'Going all-in with millennial design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Wood',
        img: 'https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VHGgeoolBu2zPgLK-mOGaUWIXmkxi93Z1~kEDhua94V0xOmTAJjl8Sn6n0-OxihPedAaCXOHYgMFxs6AEEl3Ma1wWH9bQd1Kv4GpoLcQGBegZWdgGdV9Q19Ue2~cQGGNeriV85ODUOPcJTWexEz1ljPtaeTubXq689Cv1Z~uF2RbZfXLQmN~UN1-f4kpI0erTSYoG6skPV2VfkCTyn7lpSFrFfABs3xlRJAXedh0Rq-2H2-FWTazDEcQ2pKcbkgYkIrPclJrLr1GWZE4p8CjTKQKOa1Tc84gsOl-6R2Woy2TPWMCPJodHtzv1WoztwOS498aU1P51iAM-pMVbywWsw__',
    },
    {
        title: 'Exploring new ways of decorating',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Handmade',
        img: 'https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iiCpA2IrlOJblc23sH4e5V81vgv0c4QLtA4-mBTL-~mgiw8WneYRi1KwHGz8Md-WAX4xB6ug4afbkcsk0lkV3DGTJgngLn~RljaF0G3HdKat2H~gr3aTaNrnTNEuDLYGE2u4DsNWfkdCbIt6Kn1GwqVL3bTlUl4YbdSto52-r-eFRnrfvK8SIJ-TQDW1bCFyxeFGirutT4Huqt07ZUQ~Xz~CzTP5AGLFuOTbwk~Lq8Xdvtvhcze7l7O3oPxhK6EbGDhiVOb4rYAH-nLtu-DKPLHWASno86RPAOCX4mREatl~J6fQU5zgtSnNrchnNDmY9ndAL6HHWrMMEcmTlFM6aw__',
    },
    {
        title: 'Handmade pieces that took time to make',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Wood',
        img: 'https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fbfOVCEfDT7aM2tkY~XGzlXHF6QeHic3qfAg-sDVyvB2bXxg9fERhS-VyAZK6cD1oPYQKUz2CHqQzFbmCBF3LP9cQXm85tcL~jWlBcisToFJqMrNwE-WuI3y5BCIUxYNKi3g04g0p2354x8M1UpOs9TRbs~eiCfjouws8ixAwXW4tyXP-16MkFcck-gbPYfs-bmgGZ2KPhawN7pyqgcYnTyuSl8ciU97VieOxCh4fdwPGqr3eAiwUZ9RGsR55TwQNJslf5nhK5HFdLCBpVlBOrrASJg1CXFZYVSbbZg7wu9FyIu-zCYnsnX9piXLnBCs61QA6sAVbHQTamPa4y7Q1w__',
    },
]

const Products = [
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



const Blog = () => {
    return (
        <div>
            <PageBg name={'Blog'} />
            <div className="BlogPage w-[90vw] md:w-[80vw] m-auto my-6 flex flex-col lg:flex-row gap-[2vw]">
                <div className="leftBlog w-full lg:w-[70%]">
                    <div className="Cards w-full flex flex-col gap-6">
                        {Blogs.map((me, index) => (
                            <Card4 key={index} img={me.img} title={me.title} desc={me.desc} date={me.date} cate={me.cate} />
                        ))}
                    </div>
                    <div className="ShopPageNums flex gap-3 m-auto w-full justify-center items-center mt-6">
                        {[1, 2, 3, 'Next'].map((num, index) => (
                            <div key={index} className={`numBox p-3 flex cursor-pointer justify-center items-center w-12 h-12 rounded-md ${num === 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'}`}>
                                <p className='text-lg'>{num}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rightBlog w-full lg:w-[30%] flex flex-col items-center gap-6">
                    <div className="searchBox flex justify-between border border-gray-400 p-4 items-center rounded-2xl w-full">
                        <input type="text" className='w-full outline-none' placeholder='Search...' />
                        <FaSearch className='cursor-pointer text-xl' />
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full p-4 bg-white shadow-md rounded-lg">
                        <h2 className='text-2xl font-semibold'>Categories</h2>
                        {[
                            { name: 'Crafts', count: 8 },
                            { name: 'Handmade', count: 7 },
                            { name: 'Interior', count: 1 },
                            { name: 'Wood', count: 6 }
                        ].map((category, index) => (
                            <div key={index} className='flex justify-between border-b pb-2'>
                                <p>{category.name}</p><p>{category.count}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full p-4 bg-white shadow-md rounded-lg">
                        <h2 className='text-2xl font-semibold'>Recent Posts</h2>
                        <div className="recentPosts flex flex-col gap-4">
                            {Products.slice(0, 4).map((me, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <Image src={me.img} width={100} height={100} className='h-[100px] rounded-2xl' alt='recentposts' />
                                    <div className="recData">
                                        <p className='text-sm'>{me.short}</p>
                                        <p className='text-xs text-gray-500'>03 Aug 2022</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TrustComp />
        </div>
    );
};

export default Blog;

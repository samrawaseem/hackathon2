'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaShareAlt, FaRegHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import Link from 'next/link';

interface Card2Props {
  img: string;
  name: string;
  short: string;
  salePrice: string;
  orignalPrice: string;
}

const Card2: React.FC<Card2Props> = ({ img, name, short, salePrice, orignalPrice }) => {
  const [visible, setVisible] = useState<'none' | 'flex'>('none');

  return (
    <div className="bg-[#F4F5F7] w-max relative" onMouseLeave={() => setVisible('none')}>
      <Image
        src={img}
        width={285}
        height={301}
        className="w-[285px] h-[301px]"
        alt="ProductsHome"
        unoptimized
        onMouseEnter={() => setVisible('flex')}
      />
      <Link href={`/shop/${name}`} className="productCardData p-3 pt-4 pb-4">
        <h2 className="text-2xl font-medium">{name}</h2>
        <p>{short}</p>
        <div className="ProductCardPrice flex justify-between items-center gap-2">
          <p className="text-2xl font-medium">{salePrice}</p>
          <p className="text-lg font-semibold line-through text-gray-600">{orignalPrice}</p>
        </div>
      </Link>
      <div
        className="Card1Absolute absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5"
        style={{ display: visible }}
      >
        <button className="btn2 text-lg">Add to cart</button>
        <div className="hoverCard2 flex justify-between items-center gap-4">
          <p className="flex items-center gap-1 text-white cursor-pointer">
            <FaShareAlt /> Share
          </p>
          <p className="flex items-center gap-1 text-white cursor-pointer">
            <MdCompareArrows /> Compare
          </p>
          <p className="flex items-center gap-1 text-white cursor-pointer">
            <FaRegHeart /> Like
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;

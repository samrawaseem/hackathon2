import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface PageBgProps {
  name: string; // Props for the page name
}

const PageBg: React.FC<PageBgProps> = ({ name }) => {
  return (
    <div
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJf04lHRasI~bc5VJjBRuVnZXB9Bq0Z8xOeK-5KIOe9IfBoacGkr6DebTCXQUJgrhtT1djdF6wRhbF70IMaVyqfl4La1Ft0yBkMxdLkRkmYS506KABHIwFxUM7MZ9~9RmoUoODO9gnRPH3NYXiBMsXvSrs7Qr0zdVJk48iBevllvaYWlqXTsr1Znxax8pT~apuP9h8rA-pDANDnLmHu-rdor8lZpoYvrhNXm2BRgd5G1YgsEvBxcImq3e2gLnV4Nbk~c3IVgu06S2TgOPlG-fpbgeVvDt1589pc1fRqVMDlXGkc9zufBqlmgFG9E~KtOYOc4MZ2EvwdAzgOMScAfVA__')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-[30vh] w-full flex flex-col justify-center items-center gap-5 p-4 text-center"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-black">{name}</h1>

      {/* Breadcrumb */}
      <p className="flex items-center gap-2 text-sm md:text-base text-black">
        Home <IoIosArrowForward /> {name}
      </p>
    </div>
  );
};

export default PageBg;

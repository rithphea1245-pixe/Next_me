import React from 'react'
import Image from 'next/image'
export default function not_foundPage() {
  return (
    <div className=' display : flex justify-center '>
      <Image src={"/assets/not.svg"} alt="notfound" width={500} height={300}></Image>
    </div>
  );
}

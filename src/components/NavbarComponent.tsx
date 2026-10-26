
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { MenuList } from '@/lib/menu-list';
// import { useParams } from 'next/navigation';
import { usePathname } from 'next/navigation';

// import { url } from 'inspector';
export default function NavbarComponent() {
    const pathName = usePathname();
    console.log(`===> pathName: ${pathName}`)
    MenuList.map(({url})=>{
        if (url !== pathName){
            return null;
        }
    })
  return (
    // <nav>
    //   <ul className='flex gap-8 justify-center'>
    //     {
    //         MenuList.map(({url , name ,_}) => (
    //             <li key={_}>
    //                 <Link href={url} > {name}</Link>
    //             </li>
    //         ))
    //     }
    //     <li>
    //       <Link href={"/"}>
    //        <Image src={"/next.svg"} width={100} height={100} alt={""}></Image>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={"/product"}>Product</Link>
    //     </li>
    //     <li>
    //       <Link href={"/contact"}>Contact</Link>
    //     </li>
    //     <li>
    //       <Link href={"/login"}>login</Link>
    //     </li>
    //     <li>
    //       <Link href={"/register"}>register</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav>
      <ul className="flex gap-8 justify-center">
        <li>
          <Link href={"/"}>
            <Image src={"/next.svg"} width={100} height={100} alt={""}></Image>
            {" "}
          </Link>
        </li>
        {MenuList.map(({ url, name }) => (
          <li key={url}>
            <Link href={url} 
              style={
                pathName === url ? {color: 'red'}:{color: 'black'}
              }
            >       
                {name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="h-[5rem] bg-[#edf6f9]">
        {/*Logo*/}
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center gap-3">
            <Link href={'/'}>
              <Image
                src={'/logo/logo.jpg'}
                alt=""
                width={400}
                height={400}
                className="rounded-full h-14 w-14 mt-3"
              />
            </Link>

            <Link href={'/'}>
              <p className="capitalize text-sm text-[#0077b6]  md:text-xl">
                clarke`s home designs & constructions LTD
              </p>
            </Link>
          </div>
          {/*Nav Items*/}
          <div className="">
            <nav className="">
              <ul className="flex justify-between lg:gap-10">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer capitalize text-sm text-[#0077b6] hover:border-2 py-1 px-2 rounded-md hover:bg-[#ffffff] hover:underline duration-300 ease-out md:text-xl lg:text-2xl"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer capitalize text-sm text-[#0077b6] hover:border-2 py-1 px-2 rounded-md hover:bg-[#ffffff] hover:underline duration-300 ease-out md:text-xl lg:text-2xl"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer capitalize text-sm text-[#0077b6] hover:border-2 py-1 px-2 rounded-md hover:bg-[#ffffff] hover:underline duration-300 ease-out md:text-xl lg:text-2xl"
                  >
                    service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer capitalize text-sm text-[#0077b6] hover:border-2 py-1 px-2 rounded-md hover:bg-[#ffffff] hover:underline duration-300 ease-out md:text-xl lg:text-2xl"
                  >
                    contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer capitalize text-sm text-[#0077b6] hover:border-2 py-1 px-2 rounded-md hover:bg-[#ffffff] hover:underline duration-300 ease-out md:text-xl lg:text-2xl"
                  >
                    login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

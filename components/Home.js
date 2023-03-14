import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen bg-gray-200">
        <div className="min-h-[20rem] bg-yellow-300">Slide Images</div>
        {/*sales product*/}
        <div className="min-h-[40rem] mb-10">
          <div className="flex justify-center pt-5">
            <h1 className="uppercase font-bold bg-orange-600 w-full text-center py-2  text-sm md:text-xl lg:text-2xl">
              best sales
            </h1>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col  md:bg-white mx-5 pb-10 md:mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col  md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col  md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col  md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col  md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center pt-3">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:bg-white md:mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:bg-white mx-5 pb-10 mt-5">
                <div className="flex justify-center pt-7">
                  <div className="bg-green-200 w-[25rem] h-[15rem] md:w-[15rem] md:h-[20rem] shadow-md rounded-md cursor-pointer">
                    Image
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="capitalize bg-amber-400 py-2 px-3 rounded-md text-sm text-white hover:bg-amber-500 duration-500 md:text-xl lg:text-2xl">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*best feature*/}
        <div className="min-h-[40rem] bg-red-300 mb-10">
          <div className="pt-10 flex justify-center">
            <h1 className="uppercase font-bold text-red-600 text-sm md:text-xl lg:text-2xl">
              best features
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react'

const Card = () => {
  return (
    <a
      href="/"
      aria-label="View Item"
      className="h-[200px] w-[180px] inline-block overflow-hidden duration-300 transform bg-[#2A2D3A] rounded shadow-sm hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="w-full h-full object-fit rounded-xl p-2"
          alt=""
        />
        <div className="flex-grow p-2 text-white ">
          <h6 className="mb-1 font-semibold text-xs leading-5">
            Baseball ipsum dolor
          </h6>
          <div className="flex justify-between text-[10px] items-center">
            <p>1.25ETH</p>
            <p>71</p>
          </div>
        </div>
      </div>
    </a>
  );
};

function TopSellers() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="text-left font-semibold text-xl text-white mt-[46px] mb-[30px]">
         Top Sellers
      </p>
      <Card key="1"/>
      <Card key="2"/>
      <Card key="3"/>
      <Card key="4"/>
      <Card key="5"/>
    </div>
  );
}

export default TopSellers
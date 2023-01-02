import React from 'react'


const Card = () => {
	return (
		<a
			href="/"
			aria-label="View Item"
			className="h-40 w-64 inline-block overflow-hidden duration-300 transform bg-[#2A2D3A] rounded shadow-sm hover:-translate-y-2">
			<div className="flex flex-col h-full">
				<img
					src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
					className="w-full h-full object-fit rounded-xl p-2"
					alt=""
				/>
			</div>
		</a>
	);
};

function GiftCard() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<p className="text-left font-semibold text-xl text-white mt-[46px] mb-[30px]">
				Got Gift Cards for sale?
			</p>
			<div className="grid gap-5 row-gap-5 rounded-xl lg:grid-cols-3 sm:grid-cols-2 bg-[#2A2D3A] p-16 mb-14">
        {[2,3,4,2,3].map((val, idx)=> <Card key={idx}/>)}
      </div>
			<div className="text-center">
				<a
					href="/"
					className="inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide border border-[#EB1484] transition duration-200 rounded shadow-md md:w-[300px] text-[#EB1484]">
					Learn more
				</a>
			</div>
		</div>
  )
}

export default GiftCard
import Image from 'next/image'

const Card = () => {
	return (
		<div className="max-w-md w-full p-4 py-6">
			<div className="bg-white shadow-xl rounded-lg overflow-hidden">
				<div className="bg-cover bg-center h-16 p-4 flex justify-end items-center">
					<p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">DFW <span className="tracking-normal">---</span> SEA</p>
				</div>
				<div className="px-4 pb-3 pt-4 border-b border-gray-300 bg-gray-100 flex justify-between">
					<div className="text-xs uppercase font-bold text-gray-600 tracking-wide">TSA: <span className="font-normal">5-12 min</span></div>
					<div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Airport Status: <span className="font-normal text-green-600">Normal</span></div>
				</div>
				<div className="p-4 text-gray-700 flex justify-between items-start">
					<div>
						<p className="text-3xl text-gray-900 leading-none my-1">AA 792</p>
						<p className="text-xs w-56">American Airlines</p>
						<p className="text-sm w-56">7:11 am --- 10:10 am</p>
					</div>
					<div className="leading-loose bg-green-500 text-white p-1 px-2 rounded-lg uppercase text-xs tracking-wider">On Time</div>
				</div>
					<div className='flex gap-4 justify-center p-4 border-t border-gray-300'>
					<Image src="/react.svg" width={10} height={10} alt='imagen' className="w-10"/>
					<Image src="/TypeScript.svg" width={30} height={30} alt='imagen' className="w-10"/>
					<Image src="/jest.svg" width={30} height={30} alt='imagen' className="w-10"/>
					<Image src="/react-query.svg" width={30} height={30} alt='imagen' className="w-10"/>
				</div>
			</div>
		</div>
	);
};

export {Card};
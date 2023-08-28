"use client"

import Image from 'next/image'

const Hero = () => {
	return (
	<section className='hero' aria-label='hero'>
		<div className="border-2 rounded-b-2xl border-b-cyan-50 p-8 m-8 bg-gray-950">
			<div className="relative rounded-lg shadow-xl sm:gap-4">
				<div className="w-full h-auto mb-2">
					<Image src="/banner.svg" width={100} height={100} alt='imagen' className="w-full rounded-tl-lg rounded-tr-lg" />
				</div>
				<div className='flex gap-4 justify-end'>
					<Image src="/react.svg" width={10} height={10} alt='imagen' className="w-10"/>
					<Image src="/next.svg" width={30} height={30} alt='imagen' className="w-10"/>
					<Image src="/TypeScript.svg" width={30} height={30} alt='imagen' className="w-10"/>
					<Image src="/jest.svg" width={30} height={30} alt='imagen' className="w-10"/>
					<Image src="/react-query.svg" width={30} height={30} alt='imagen' className="w-10"/>
				</div>
				<div className='absolute bg-gray-950 z-10 mt-2 w-full flex flex-col md:flex-row items-center gap-4 border-2 rounded-2xl border-b-cyan-50 p-4'>
					<Image src="/profile.jpeg" width={100} height={100} alt='imagen' className="border-2 border-white rounded-full" />
					<div>
						<h1 className="text-4xl font-bold text-white">Sergio González Sánchez</h1>
						<h2 className="text-base font-light text-white">React Frontend Developer at EvolutionCode</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export {Hero}
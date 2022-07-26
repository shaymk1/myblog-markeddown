const Hero = () => {
	return (
		<main className="pt-[200px] mx-auto text-center h-[700px]  relative  bg-center bg-cover ">
			{/*overlay*/}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />

			<div className="flex md:flex-row min-h p-4 flex-wrap relative text-white">
				<div className="absolute  ">
					<h1 className="uppercase text-7xl font-humane text-[#0077b6] underline mb-[50px]">
						nemaste!
					</h1>
					<div className="text-white p-4 tracking-widest text-sm text text-center mx-auto ">
						<h2 className="text-white leading-6 whitespace-normal text-3xl">
							Welcome to my blog <span className="text-[#0077b6]">|</span>
						</h2>

						<p className="text-white text-xl">
							where i share my point of view through the lenses of meditation,
							art and coding, and anything else in between!
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;

import Image from "next/image";
import Head from "next/head";
const About = () => {
	return (
		<>
			<Head>
				<title>About - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<div className=" mx-auto text-center pt-[120px] ">
				<div className="mb-[50px]">
					<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline">
						About
					</h1>
				</div>

				<div className="flex flex-col md:flex-row p-4 items-center">
					<div className="">
						<Image
							src="/myself-2.jpg"
							alt=""
							width="700"
							height="800"
							className="rounded-full"
						/>
					</div>

					<div>
						<p className="text-sm pt-2">Hi, my name is :</p>
						<h2 className="text-4xl font-humane text-[#5e548e]  p-2 tracking-widest">
							Shay Kekae
						</h2>
						<p className="p-4 text-xs">
							Welcome to my blog, where i share my point of view through the
							lenses of meditation, art and coding, and anything else in
							between!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BeingStillness = () => {
	return (
		<>
			<Head>
				<title>Blog - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<div className="pt-[90px] mx-auto text-center h-[700px] ">
				<div>
					<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline text-center mb-[50px]">
						Being Stillness
					</h1>
				</div>
				<div className="flex flex-col md:flex-row ">
					<div className="text-center justify-center  ">
						<p className="p-4 text-xs  md:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							doloremque illum, sed corporis eius, voluptatibus blanditiis esse,
							vero sint placeat dolorem! Aperiam placeat sed et rerum saepe
							cupiditate dolores earum.
						</p>

						<p className="p-4 text-xs md:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							doloremque illum, sed corporis eius, voluptatibus blanditiis esse,
							vero sint placeat dolorem! Aperiam placeat sed et rerum saepe
							cupiditate dolores earum.
						</p>

						<p className="p-4 text-xs md:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							doloremque illum, sed corporis eius, voluptatibus blanditiis esse,
							vero sint placeat dolorem! Aperiam placeat sed et rerum saepe
							cupiditate dolores earum.
						</p>

						<p className="p-4 text-xs md:text-sm mb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							doloremque illum, sed corporis eius, voluptatibus blanditiis esse,
							vero sint placeat dolorem! Aperiam placeat sed et rerum saepe
							cupiditate dolores earum.
						</p>
						<Link href="https://www.youtube.com/">
							<a className="px-4 py-2 bg-[#0077b6]  rounded-lg text-white text-center hover:bg-[#1b99dd] mt-4 mb-2">
								Learn More
							</a>
						</Link>
					</div>
					<div className="p-4 mt-2">
						<Image
							src="/ocean.jpg"
							alt=""
							width="1200"
							height="1200"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BeingStillness;

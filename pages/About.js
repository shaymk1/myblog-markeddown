import Image from "next/image";

const About = () => {
	return (
		<div className=" mx-auto text-center pt-[120px]">
			<div>
				<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline">About</h1>
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
					<p className="text-sm">Hi, my name is :</p>
					<h2 className="text-4xl font-humane text-[#5e548e]  p-2 tracking-widest">Shay Kekae</h2>
					<p className="p-4 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						doloremque illum, sed corporis eius, voluptatibus blanditiis esse,
						vero sint placeat dolorem! Aperiam placeat sed et rerum saepe
						cupiditate dolores earum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

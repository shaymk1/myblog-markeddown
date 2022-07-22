import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<div className=" mx-auto text-center h-[400px] mt-[400px] md:mt-[150px]">
			<div>
				<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline text-center ">
					Contact Me
				</h1>
			</div>
			<div className="flex flex-col items-center justify-center px-2">
				<div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
					<Link href="/">
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-[#5e548e]  dark:hover:text-white">
							Home
						</a>
					</Link>
					<Link href="/About">
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-[#5e548e]  dark:hover:text-white">
							About
						</a>
					</Link>

					<Link href="/Blogs">
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none  text-base cursor-pointer leading-4 text-[#5e548e] hover:text-white">
							Blogs
						</a>
					</Link>
					<Link href="/Privacy Policy">
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none h text-base cursor-pointer leading-4 text-[#5e548e] hover:text-white">
							Privacy Policy
						</a>
					</Link>
				</div>
				<div className="flex items-center gap-x-8 mt-6 text-white ">
					<Link href="https://github.com/shaymk1">
						<a
							aria-label="facebook"
							className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaGithub size={25} className="hover:text-[#0077b6]" />
						</a>
					</Link>
					<Link href="https://www.linkedin.com/">
						<a className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaLinkedin size={25} className="hover:text-[#0077b6]" />
						</a>
					</Link>
					<Link href="https://www.instagram.com/">
						<a className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaInstagram size={25} className="hover:text-[#0077b6]" />
						</a>
					</Link>
				</div>

				<div className="flex items-center mt-6">
					<p className="text-base leading-4 text-[#5e548e] ">
						2022 <span className="font-semibold">Shay Kekae</span>
					</p>

					<div className="border-l border-gray-800 pl-2 ml-2">
						<p className="text-base leading-4 text-[#5e548e] ">
							Inc. All rights reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


export const Navbar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="flex items-center flex-wrap bg-[#8e9aaf] p-3 border border-b-[#967aa1] ">
				<Link href="/">
					<a className="inline-flex items-center p-2 mr-2 ml-1 text-3xl font-bold uppercase tracking-widest  mx-2 text-[#a9def9] hover:text-white font-humane     ">
						
						Stillness.
					</a>
				</Link>
				<button
					className=" inline-flex p-3 
					bg-[#cb97ef] hover:bg-[#ac59e7] rounded lg:hidden text-white ml-auto  outline-none font-montserrat"
					onClick={handleClick}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${
						active ? "" : "hidden"
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto font-poppins text-xl uppercase ">
						<Link href="/">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-[#cbc0d3]hover:text-white ">
								Home
							</a>
						</Link>
						<Link href="/about">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-[#cbc0d3] hover:text-white">
								About
							</a>
						</Link>
						<Link href="/blogs">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-[#cbc0d3] hover:text-white">
								Blogs
							</a>
						</Link>
						<Link href="/contact">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-[#cbc0d3] hover:text-white">
								Contact
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
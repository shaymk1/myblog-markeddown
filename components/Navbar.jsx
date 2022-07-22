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
					<FaBars />
				</button>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${
						active ? "" : "hidden"
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto font-poppins text-xl uppercase ">
						<Link href="/">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:text-[#a9def9] ">
								Home
							</a>
						</Link>
						<Link href="/About">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:text-[#a9def9]">
								About
							</a>
						</Link>
						<Link href="/Blog">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center  hover:text-[#a9def9]">
								Blogs
							</a>
						</Link>
						<Link href="/Footer">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center  hover:text-[#a9def9]">
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
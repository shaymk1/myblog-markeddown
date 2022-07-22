//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import About from "./About";

export default function Home() {
	return (
		<>
			<header>
				<nav className="max-w-7xl bg-[#cdb4db] min-h-full flex ">
					{/*left menu*/}
					<div className="flex space-y-4 md:flex-row space-x-4 md:space-y-0 items-center justify-between ">
						<div className="uppercase">
							<h1 className="uppercase">Stillness in </h1>
							<span className="uppercase" >coding</span>
						</div>

						<button>
							<FaBars />
						</button>
					</div>
					<div>
						<Link href="/">
							<a>Home</a>
						</Link>

						<Link href="/about">
							<a>About</a>
						</Link>

						<Link href="/blogs">
							<a>Blogs</a>
						</Link>

						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</div>
				</nav>
			</header>
			<div className="">
				<h1>My blog</h1>
				<About />
			</div>
		</>
	);
}

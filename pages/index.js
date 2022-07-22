//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import Hero from "./Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Blog from "./Blog";

export default function Home() {
	return (
		<>
			<div className="mx-auto text-center">
				
				<Hero />
				<About />
				<Blog />
			</div>
		</>
	);
}

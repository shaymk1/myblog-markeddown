import Head from "next/head";
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blogs";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<div className="mx-auto text-center">
				<Hero />
				<About />
				<Blog />
			</div>
		</>
	);
}

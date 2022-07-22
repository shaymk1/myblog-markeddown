import Head from "next/head";
//import Image from "next/image";
//import Link from "next/link";

import { getPost } from "../../lib/posts";

export async function getStaticProps() {
	

	const post = await getPost("being-stillness");
	return {
		props: { post },
	};
}

const BeingStillness = ({ post }) => {
	return (
		<>
			<Head>
				<title>Blog - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<main>
			<h1>{post.title}</h1>
				<article dangerouslySetInnerHTML=
				{{__html:post.body}} />
			</main>
		</>
	);
};

export default BeingStillness;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
	return (
		<>
			<Head>
				<title>Blog - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>

			<div className="pt-[90px] mx-auto text-center h-[700px] ">
				<div>
					<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline text-center mb-[50px] tracking-widest">
						Archived Posts
					</h1>
				</div>
				<div>
					<ul className="list-disc">
						<li className="text-slate-500">
							<Link href="posts/BeingStillness">
								<a className="visited:text-[#0077b6] underline hover:bg-[#a2d2ff] first-of-type:ml-6 list-disc text-slate-500 ">
									Being stillness
								</a>
							</Link>
						</li>

						<li>
							<Link href="posts/BeingStillness">
								<a className="visited:text-[#0077b6] underline hover:bg-[#a2d2ff] first-of-type:ml-6 list-disc text-slate-500">
									Being Love
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Blog;

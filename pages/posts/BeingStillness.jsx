import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
	return {
		props: {
			post: {
				title: "Being Stillness",
				body: "",
				image: "/ocean.jpg",
				link: "http://www.oriahmountaindreamer.com/",
			},
		},
	};
}

const BeingStillness = ({ post }) => {
	
	return (
		<>
			<Head>
				<title>Blog - Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<div className="pt-[90px] mx-auto text-center h-[700px] ">
				<div>
					<h1 className="font-humane uppercase text-7xl text-[#0077b6] underline text-center mb-[50px] tracking-widest">
						{post.title}
					</h1>

					<h3 className="font-bold text-gray-500">The Invitation by Oriah Mountain Dreamer</h3>
				</div>
				<div className="flex flex-col md:flex-row ">
					<div className="text-center justify-center text-slate-500 ">
						<p className="p-4 text-xs  md:text-sm">
							It doesn’t interest me if the story you’re telling me is true. I
							want to know if you can disappoint another to be true to yourself.
							I want to know if you can see beauty even when it is not pretty
							every day, and if you can source your life from God’s presence.
						</p>

						<p className="p-4 text-xs md:text-sm">
							If you can bear the accusation of betrayal and not betray your own
							soul. I want to know if you can be faithful, and therefore be
							trustworthy. I want to know if you can live with failure, yours
							and mine, and still stand on the edge of a lake and shout to the
							silver of the full moon.
						</p>

						<p className="p-4 text-xs md:text-sm">
							It doesn’t interest me to know where you live or how much money
							you have. I want to know if you can get up after a night of grief
							and despair, weary and bruised to the bone -- and do what needs to
							be done -- for the children.
						</p>

						<p className="p-4 text-xs md:text-sm mb-2">
							It doesn’t interest me who you are or how you came to be here. I
							want to know if you will stand in the center of the fire with me
							-- and not shrink back. It doesn’t interest me where or what or “with whom you have studied”. I want to know what sustains you
							from the inside when all else falls away. I want to know if you
							can be alone with yourself and if you truly like the company you
							keep - - in the empty moments. .
						</p>
						<Link href={post.link}>
							<a className="px-4 py-2 bg-[#0077b6]  rounded-lg text-white text-center hover:bg-[#1b99dd] mt-4 mb-2">
								Learn More
							</a>
						</Link>
					</div>
					<div className="p-4 mt-2">
						<Image
							src={post.image}
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

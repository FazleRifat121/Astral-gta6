import { useState } from "react";
import { motion } from "framer-motion";
// import vdo from "../assets/hero/hero-bg.mp4.mp4";

const Hero = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
				{/* Logo / Title */}
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-5xl md:text-7xl font-bold tracking-wider text-primary glow-primary"
				>
					Astral Interior
				</motion.h1>

				{/* Tagline */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
					className="mt-4 text-lg md:text-2xl text-secondary/80"
				>
					Transforming Spaces, Defining Style
				</motion.p>

				{/* CTA Button */}
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0 0 10px #3c837d, 0 0 20px #1fd3c1",
					}}
					onClick={() => {
						const about = document.getElementById("about");
						about?.scrollIntoView({ behavior: "smooth" });
					}}
					className="mt-8 px-8 py-4 rounded-lg border border-primary bg-primary text-secondary glow-accent font-bold"
				>
					Explore Our Work
				</motion.button>

				{/* Play Button */}
				<motion.div
					whileHover={{ scale: 1.2 }}
					onClick={() => setModalOpen(true)}
					className="mt-12 w-20 h-20 rounded-full bg-primary/80 flex justify-center items-center cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-10 h-10 text-secondary"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M4 2v20l18-10L4 2z" />
					</svg>
				</motion.div>
			</div>

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80">
					<div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/MndmXw7dsRM?autoplay=1"
							title="YouTube video"
							allow="autoplay; encrypted-media"
							allowFullScreen
							className="rounded-xl"
						/>
						<button
							onClick={() => setModalOpen(false)}
							className="absolute top-2 right-2 text-white text-3xl font-bold"
						>
							&times;
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero;

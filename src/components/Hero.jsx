import { motion } from "framer-motion";
import vdo from "../assets/hero/hero-bg.mp4.mp4";
const Hero = () => {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Video */}
			<video
				src={vdo}
				autoPlay
				loop
				muted
				className="absolute w-full h-full object-cover"
			/>

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
			</div>
		</section>
	);
};

export default Hero;

import { motion } from "framer-motion";
import img1 from "../assets/About/1 copy.jpg";
const About = () => {
	return (
		<section className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-bgdark z-50">
			{/* Image */}
			<motion.div
				className="md:w-1/2 w-full mb-8 md:mb-0"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<img
					src={img1} // Replace later
					alt="About Astral Interior"
					className="rounded-xl shadow-lg object-cover w-full h-full"
				/>
			</motion.div>

			{/* Text */}
			<motion.div
				className="md:w-1/2 w-full md:pl-12 text-center md:text-left"
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary glow-primary">
					About Astral Interior
				</h2>
				<p className="text-secondary/80 mb-4 text-lg md:text-xl leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p className="text-secondary/80 text-lg md:text-xl leading-relaxed">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum.
				</p>
			</motion.div>
		</section>
	);
};

export default About;

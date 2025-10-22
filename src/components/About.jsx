import { motion } from "framer-motion";
import img1 from "../assets/About/1 copy.jpg";

const About = ({ onImageClick }) => {
	return (
		<section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-bgdark">
			<motion.div
				className="md:w-1/2 w-full mb-8 md:mb-0 cursor-pointer overflow-hidden rounded-xl relative"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				onClick={() => onImageClick(img1)}
				whileHover={{
					scale: 0.97,
					transition: { type: "spring", stiffness: 150, damping: 20 },
				}}
			>
				<motion.img
					src={img1}
					alt="About Astral Interior"
					className="w-full h-full object-cover rounded-xl"
					initial={{ borderWidth: 0 }}
					whileHover={{
						borderWidth: 4,
						borderColor: "#3c837d",
						transition: { duration: 0.4, ease: "easeInOut" },
					}}
				/>
			</motion.div>

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
					Lorem ipsum dolor sit amet...
				</p>
				<p className="text-secondary/80 text-lg md:text-xl leading-relaxed">
					Duis aute irure dolor in reprehenderit...
				</p>
			</motion.div>
		</section>
	);
};

export default About;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/astral-logo.png";
import img1 from "../assets/nav/img1.jpg";
import img2 from "../assets/nav/img2.jpeg";
import img3 from "../assets/nav/img3.jpeg";
import img4 from "../assets/nav/img4.jpeg";
import img5 from "../assets/nav/img5.jpeg";

const navItems = ["Home", "about", "projects", "philosophy", "contact"];
const hoverImages = [img1, img2, img3, img4, img5];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(logo);

	const imageVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
		},
	};

	return (
		<>
			{/* Navbar */}
			<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
				<div className="flex justify-between items-center px-6 py-3">
					<img src={logo} alt="Astral Logo" className="h-16" />
					<div
						className="text-2xl cursor-pointer text-white"
						onClick={() => setMenuOpen(true)}
					>
						<FaBars />
					</div>
				</div>
			</nav>

			{/* Menu */}
			{menuOpen && (
				<div className="fixed inset-0 z-50 flex bg-black">
					{/* Left Half: Image */}
					<motion.div
						className="w-1/2 h-full flex items-center justify-center bg-black"
						initial="hidden"
						animate="visible"
						variants={imageVariants}
					>
						<motion.img
							key={currentImage}
							src={currentImage}
							alt="Menu Visual"
							className={
								currentImage === logo
									? "w-96 h-52 object-cover" // logo size
									: "w-full h-full object-cover" // hover images full
							}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.4 }}
						/>
					</motion.div>

					{/* Right Half: Menu Items */}
					<motion.div
						className="w-1/2 bg-bgdark flex flex-col justify-center items-center relative"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 80, damping: 25 }}
					>
						<button
							onClick={() => setMenuOpen(false)}
							className="absolute top-6 right-6 text-white text-4xl"
						>
							<FaTimes />
						</button>

						<ul className="flex flex-col gap-12 text-3xl text-secondary uppercase text-center">
							{navItems.map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 50 }}
									transition={{
										delay: index * 0.1,
										type: "spring",
										stiffness: 100,
										damping: 25,
									}}
									onMouseEnter={() => setCurrentImage(hoverImages[index])}
									onMouseLeave={() => setCurrentImage(logo)}
								>
									<a
										href={`#${item}`}
										onClick={() => setMenuOpen(false)}
										className="cursor-pointer hover:text-primary transition"
									>
										{item}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>
			)}
		</>
	);
};

export default Navbar;

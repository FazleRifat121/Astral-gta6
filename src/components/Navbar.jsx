import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuOpen]);

	const imageVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
		},
		exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.3 } },
	};

	const menuVariants = {
		hidden: { x: "100%" },
		visible: {
			x: 0,
			transition: { type: "spring", stiffness: 80, damping: 25 },
		},
		exit: {
			x: "100%",
			transition: { type: "spring", stiffness: 80, damping: 25 },
		},
	};

	return (
		<>
			{/* Navbar */}
			<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 ">
				<div className="flex justify-between items-center px-6 py-3">
					<img src={logo} alt="Astral Logo" className="h-10 lg:h-16" />
					<div
						className="text-2xl cursor-pointer text-white"
						onClick={() => setMenuOpen(true)}
					>
						<FaBars />
					</div>
				</div>
			</nav>

			{/* Menu with AnimatePresence */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="fixed inset-0 z-50 flex flex-col lg:flex-row bg-black"
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						{/* Left Half: Image */}
						<motion.div
							className="hidden lg:flex w-1/2 h-full items-center justify-center bg-black"
							variants={imageVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<motion.img
								key={currentImage}
								src={currentImage}
								alt="Menu Visual"
								className={
									currentImage === logo
										? "w-96 h-52 object-cover"
										: "w-full h-full object-cover"
								}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.4 }}
							/>
						</motion.div>

						{/* Right Half: Menu Items */}
						<motion.div
							className="w-full lg:w-1/2 bg-bgdark flex flex-col justify-center items-center relative h-screen"
							variants={menuVariants}
						>
							<button
								onClick={() => setMenuOpen(false)}
								className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
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
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;

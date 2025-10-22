import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
	const [fullscreenImage, setFullscreenImage] = useState(null);
	const lenisRef = useRef(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => t,
			smooth: true,
			direction: "vertical",
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		lenisRef.current = lenis;
	}, []);

	return (
		<div className="font-sans text-secondary bg-bgdark overflow-hidden relative">
			<Navbar lenis={lenisRef} />

			<div className="min-h-screen snap-y snap-mandatory">
				<section id="home" className="section snap-start min-h-screen">
					<Hero />
				</section>
				<section id="about" className="section snap-start min-h-screen">
					<About onImageClick={setFullscreenImage} />
				</section>
				<section id="projects" className="section snap-start min-h-screen">
					<Projects />
				</section>
				<section id="philosophy" className="section snap-start min-h-screen">
					<Philosophy />
				</section>
				<section id="contact" className="section snap-start min-h-screen">
					<Contact />
				</section>
				<section id="footer" className="section snap-start min-h-screen">
					<Footer />
				</section>
			</div>

			{/* Fullscreen Image Overlay */}
			<AnimatePresence>
				{fullscreenImage && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] cursor-pointer"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setFullscreenImage(null)}
					>
						<motion.img
							src={fullscreenImage}
							alt="Fullscreen"
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="max-w-full max-h-full object-contain"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default App;

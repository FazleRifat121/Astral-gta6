import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
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

	return (
		<div className="font-sans text-secondary bg-bgdark overflow-hidden relative">
			<Navbar />

			<ReactFullpage
				scrollingSpeed={1000}
				scrollOverflow={false}
				navigation={false}
				anchors={["hero", "about", "projects", "philosophy", "contact"]}
				render={() => (
					<ReactFullpage.Wrapper>
						<section className="section">
							<Hero />
						</section>
						<section className="section">
							<About onImageClick={setFullscreenImage} />
						</section>
						<section className="section">
							<Projects />
						</section>
						<section className="section">
							<Philosophy />
						</section>
						<section className="section">
							<Contact />
						</section>
						<section className="section">
							<Footer />
						</section>
					</ReactFullpage.Wrapper>
				)}
			/>

			{/* Fullscreen overlay */}
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

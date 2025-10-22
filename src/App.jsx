import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="font-sans text-secondary bg-bgdark overflow-hidden">
			{/* Fixed Navbar */}
			<Navbar className="fixed top-0 left-0 w-full z-50" />

			<ReactFullpage
				scrollingSpeed={1000} // cinematic feel
				scrollOverflow={false} // no inner scroll bar
				navigation={false} // dots navigation
				showActiveTooltip={false}
				anchors={["hero", "about", "projects", "philosophy", "contact"]}
				render={() => (
					<ReactFullpage.Wrapper>
						<section className="section">
							<Hero />
						</section>
						<section className="section">
							<About />
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
		</div>
	);
};

export default App;

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="font-sans text-secondary bg-bgdark">
			<ReactFullpage
				// Fullpage options
				scrollingSpeed={1000} // ms, cinematic feel
				scrollOverflow={false} // no inner scroll bar
				navigation={true} // optional: dots navigation
				showActiveTooltip={false}
				anchors={["hero", "about", "projects", "philosophy", "contact"]}
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							<section className="section">
								<Hero />
							</section>
							<section className="section mt-32">
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
					);
				}}
			/>
		</div>
	);
};

export default App;

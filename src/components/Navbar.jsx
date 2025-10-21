import { Link } from "react-scroll";

const Navbar = () => {
	const navItems = ["hero", "about", "projects", "philosophy", "contact"];

	return (
		<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
				<h1 className="text-2xl font-bold tracking-widest  text-primary">
					ASTRAL<span className="text-white">INTERIOR </span>
				</h1>

				<ul className="flex gap-8">
					{navItems.map((item) => (
						<li key={item}>
							<Link
								to={item}
								smooth={true}
								duration={700}
								offset={-70}
								className="uppercase text-sm hover:text-pink-400 cursor-pointer transition"
							>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

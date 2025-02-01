import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { LuUserRound } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleShowMenu() {
		setIsOpen((show) => !show);
	}

	return (
		<header className="w-[24.375rem] flex justify-between 2xl:w-[96rem] 2xl:flex 2xl:justify-between  2xl:min-h-[6rem] 2xl:py-5 2xl:pt-5 2xl:bg-black">
			{/* Logo */}
			<Logo />

			{/* Hamburger Menu (Hidden at 2xl breakpoint) */}
			<div
				onClick={handleShowMenu}
				className="2xl:hidden" // Hide at 2xl breakpoint
			>
				<CiMenuFries
					className="text-3xl mr-3 text-white mt-3"
					aria-label="Open menu"
				/>
			</div>

			{/* Mobile Menu (Hidden at 2xl breakpoint) */}
			{isOpen && (
				<>
					<div
						className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 2xl:hidden" // Hide at 2xl breakpoint
						onClick={handleShowMenu}
					/>
					<nav className="fixed top-0 left-0 w-[24.375rem] h-screen bg-neutral-800 overflow-y-auto bg-gradient-to-r from-purple-500 to-blue-500 2xl:hidden">
						{/* Hide at 2xl breakpoint */}
						<div
							className="flex text-right justify-end mr-4 mt-4"
							onClick={handleShowMenu}
						>
							<LiaTimesSolid
								className="text-3xl text-white cursor-pointer"
								aria-label="Close menu"
							/>
						</div>
						<ul className="w-[24.375rem] flex flex-col items-center justify-center ">
							<li className="text-[1.3rem] font-light text-white hover:underline">
								<Link to="/">Home</Link>
							</li>
							<li className="text-[1.3rem] font-light mt-3 text-white hover:underline">
								<Link to="/defi-app">Defi App</Link>
							</li>
							<li className="text-[1.3rem] font-light mt-3 text-white hover:underline">
								<Link to="/assets">Assets</Link>
							</li>
							<li className="text-[1.3rem] font-light mt-3 text-white hover:underline">
								<Link to="/features">Features</Link>
							</li>
							<li className="text-[1.3rem] font-light mt-3 text-white hover:underline">
								<Link to="/pricing">Pricing</Link>
							</li>
							<li className="text-[1.3rem] font-light mt-3 text-white hover:underline">
								<Link to="/faq">FAQ</Link>
							</li>
							<li className="text-[1.3rem] font-light flex items-center gap-1 mt-3 ml-4 text-white border rounded-full px-7 py-2">
								<Link to="/protection">Protection</Link>
								<span>
									<MdArrowOutward />
								</span>
								<span>
									<GoShieldLock className="text-white border text-[2rem] rounded-full px-1.5 py-1.5" />
								</span>
							</li>
							<div className="text-[1.3rem] font-light flex items-center mt-5 ml-4 text-white hover:underline">
								<LuUserRound />
								<Link to="/create-account">Create Account</Link>
							</div>
						</ul>
					</nav>
				</>
			)}

			{/* Desktop Navbar (Visible at 2xl breakpoint) */}
			<nav className="hidden 2xl:flex 2xl:items-center 2xl:rounded-full 2xl:gap-3 2xl: 2xl:w-[55rem] 2xl:py-4 2xl:bg-neutral-900">
				<ul className="flex items-center gap-8  2xl:ml-[3rem] 2xl:flex 2xl:justify-between 2xl:w-[55rem]">
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium ">
						<Link to="/">Home</Link>
					</li>
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium ">
						<Link to="/defi-app">Defi App</Link>
					</li>
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium ">
						<Link to="/asset">Assets</Link>
					</li>
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium">
						<Link to="/features">Features</Link>
					</li>
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium ">
						<Link to="/pricing">Pricing</Link>
					</li>
					<li className="text-[1.3rem] font-light text-white hover:underline 2xl:text-[1rem] 2xl:font-medium ">
						<Link to="/faq">FAQ</Link>
					</li>
					<li className="text-[1.3rem] font-light flex items-center gap-1 text-white 2xl:text-[1rem] 2xl:gap-3 2xl:w-[20rem] 2xl:flex 2xl:justify-end ">
						<div className=" 2xl:w-[10rem] 2xl:flex 2xl:items-center 2xl:font-medium 2xl:gap-4 2xl:px-5 2xl:py-3 2xl:rounded-full 2xl:bg-neutral-800 ">
							<Link className="ml-3" to="/protection">
								Protection
							</Link>
							<span>
								<MdArrowOutward />
							</span>
						</div>
						<span className="2xl:mr-5">
							<GoShieldLock className="text-white text-[2rem] rounded-full 2xl:bg-white 2xl:text-black px-1.5 py-1.5 2xl:px-2rem 2xl:text-[3rem] " />
						</span>
					</li>
				</ul>
			</nav>

			<div className="text-[1.3rem] hidden  font-light flex 2xl:flex items-center text-white hover:underline 2xl:text-[1.5rem] 2xl:flex 2xl:gap-4 2xl:font-medium 2xl:mr-7">
				<LuUserRound className="2xl:text-[2rem]" />
				<Link to="/create-account">Create Account</Link>
			</div>
		</header>
	);
}

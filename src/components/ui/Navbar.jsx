import { Link, NavLink } from "react-router-dom";
import { GoShieldLock } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { GiMoon } from "react-icons/gi";

export default function Navbar() {
	return (
		<div className="w-[90rem] min-h-[3rem] flex justify-between items-center py-4 bg-black">
			<span className="text-[4rem] ml-3 text-white">
				<Link to="/">
					<GiMoon />
				</Link>
			</span>
			<nav className="flex items-center justify-between px-2 py-3 rounded-full w-[55rem] min-h-[3rem] bg-[#2D2D2D] ">
				<ul className="flex items-center justify-between w-[32rem] text-white gap-5">
					<li className="text-[1.3rem] font-medium  ml-3">
						<NavLink to="/home">Home</NavLink>
					</li>
					<li className="text-[1.3rem] font-semibold">
						<NavLink to="/defi">DeFi App</NavLink>
					</li>
					<li className="text-[1.3rem] font-semibold">
						<NavLink to="/assets">Assets</NavLink>
					</li>
					<li className="text-[1.3rem] font-semibold">
						<NavLink to="/features">Features</NavLink>
					</li>
					<li className="text-[1.3rem] font-semibold">
						<NavLink to="/pricing">Pricing</NavLink>
					</li>
					<li className="text-[1.3rem] font-semibold">
						<NavLink to="/faq">FAQ</NavLink>
					</li>
				</ul>

				<span className="flex justify-evenly items-center w-[15rem] gap-3">
					<span className="flex text-[1.3rem] items-center text-white bg-stone-600 border-gray-500 font-medium gap-1 justify-start px-2 py-2 rounded-full px-5 py-1  w-[10rem] justify-between">
						<NavLink to="/protection" className="font-semibold">
							Protection
						</NavLink>
						<GoArrowUpRight className="text-[1.2rem] font-bold" />
					</span>
					<span className="w-[5rem] px-3 py-3 rounded-full bg-white min-h-[2rem] flex justify-center ">
						<GoShieldLock className="text-[2.5rem]" />
					</span>
				</span>
			</nav>

			<span className="flex items-center w-[10rem] text-white gap-4 mr-[4rem] ">
				<span>
					<FaUser className="text-[2rem]" />
				</span>
				<p className="text-[1.2rem] whitespace-nowrap text-[1.3rem] font-semibold">
					Create Account
				</p>
			</span>
		</div>
	);
}

import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowDownward } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
import { GiMoon } from "react-icons/gi";
import { IoIosArrowRoundDown } from "react-icons/io";
import { GoDash } from "react-icons/go";

export default function MainPage() {
	return (
		<>
			<div className="2xl:w-[90rem] 2xl:ml-[4rem] 2xl:mx-[5rem] mt-2 2xl:min-h-[20rem]  2xl:mt-8 2xl:rounded-4xl bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-gradient-to-tr from-20% via-gray-700 to-80% bg-gradient-to-bl from-30% via-gray-800 to-70% ">
				<div className="min-h-[14rem] flex flex-col justify-center items-center 2xl:w-[90rem] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:mt-[5rem]">
					<div className="min-h-[8rem] 2xl:ml-[6.8rem] 2xl:mt-[4rem]">
						<div className="w-[5rem] min-h-[4rem]">
							<MdOutlineArrowDropUp className="text-white border text-[2rem] 2xl:text-[3rem] rounded-full px-1.5 py-1.5" />
						</div>
						<div>
							<div>
								<span className="flex items-center">
									<LuDot className="text-white text-[1.3rem] 2xl:text-[3rem]" />
									<p className="text-[1.2rem] text-white mr-4 2xl:text-[1.2rem]">
										Cortex
									</p>
								</span>
							</div>
							<p className="font-light text-gray-700 ml-6 2xl:text-[1.3rem] 2xl:ml-8">
								20.945
							</p>
						</div>
					</div>

					<div className="min-h-[8rem] hidden 2xl:block">
						<div className="w-[5rem] min-h-[4rem] 2xl:ml-[3rem]">
							<MdOutlineArrowRight className="text-white text-[2rem] 2xl:text-[3rem] 2xl:bg-gray-500 rounded-full px-1.5 py-1.5 2xl:ml-[4rem]" />
						</div>
						<div className="2xl:w-[19rem] 2xl:py-1 2xl:rounded-full 2xl:bg-neutral-800 2xl:mr-[10rem] 2xl:mt-[5rem]">
							<Link className="2xl:flex 2xl:justify-center gap-2 2xl:items-center 2xl:text-white">
								<GiMoon className="2xl:text-[1rem] 2xl:font-medium" /> Unlock
								Your Assets Spark! <MdOutlineArrowForward />
							</Link>
						</div>
					</div>

					<div className="hidden 2xl:block 2xl:mr-[4rem]">
						<span className="flex">
							<MdOutlineArrowRight className="text-white border 2xl:ml-[3rem]  2xl:mt-[2rem] text-[2.7rem] rounded-full px-1.5 py-1.5 2xl:text-[3rem]" />
						</span>
						<span className="flex items-center 2xl:mt-[2rem]  2xl:mr-[3rem]  ">
							<LuDot className="text-white text-[1.3rem] 2xl:text-[3rem]" />
							<p className="text-[1.2rem] text-white mr-4 ">Quant</p>
						</span>
						<p className="font-light text-gray-700 ml-6  2xl:text-[1.2rem] ">
							20.945
						</p>
					</div>
				</div>

				{/* Middle Section */}
				<div className="min-h-[12rem] flex flex-col justify-center">
					<div className="text-center">
						<h1 className="text-[1.8rem] font-semibold text-white 2xl:text-[5.4rem] 2xl:mt-[2rem]">
							One-click for Asset Defense
						</h1>
						<p className="font-light text-stone-200 px-4 2xl:mt-[1rem] 2xl:text-[1.5rem]">
							Dive into the art assets, where innovative blockchain technology
							meets financial expertise
						</p>
					</div>

					<div className="flex justify-center min-h-[3rem] mt-4 gap-2 2xl:mt-[4rem]">
						<Link className="w-[8rem] bg-white text-green-900 font-semibold flex items-center justify-center rounded-full hover:bg-neutral-500 2xl:bg-neutral-900 2xl:text-white  2xl:w-[9.5rem] hover:text-white 2xl:gap-2  2xl:text-[1.2rem]">
							Open App
							<span>
								<MdArrowOutward />
							</span>
						</Link>
						<Link className="w-[8rem] bg-white text-green-900 font-semibold flex items-center justify-center rounded-full hover:bg-neutral-500 hover:text-white 2xl:w-[10rem] 2xl:text-[1.2rem] 2xl:text-neutral-900 ">
							Discover More
						</Link>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="min-h-[14rem] mt-8 px-4 ">
					<div className="flex justify-between gap-8 ">
						<div className="min-h-[8rem]">
							<div className="flex items-center 2xl:ml-[3rem]">
								<LuDot className="text-white text-[2rem]" />
								<p className="text-white 2xl:text-[1.5rem]">Aelf</p>
							</div>
							<p className="text-gray-500 2xl:text-[1.2rem] 2xl:ml-[5rem] ">
								19.346
							</p>
							<span>
								<PiFlowerTulip className="text-white border text-[2rem] 2xl:text-[3rem] mt-2 rounded-full px-1.5 py-1.5 2xl:ml-[1rem]" />
							</span>
						</div>

						<div className="min-h-[8rem]">
							<div className="flex items-center">
								<LuDot className="text-white text-[2rem] 2xl:text-[3rem]" />
								<p className="text-white 2xl:mr-[5rem]">Meeton</p>
							</div>
							<p className="text-gray-500 2xl:text-[1.2rem] 2xl:ml-[2.rem]">
								440
							</p>
							<span>
								<PiFlowerTulip className="text-white border text-[2rem] mt-2 rounded-full px-1.5 py-1.5 2xl:text-[3rem] 2xl:ml-[6rem]" />
							</span>
						</div>
					</div>

					<div className="flex justify-between mt-8 2xl: hidden 2xl:flex 2xl:mt-[17rem] ">
						<div>
							<span className="flex items-center gap-2 2xl:mt-[-3rem]">
								<span>
									<IoIosArrowRoundDown className="text-white border text-[2rem] rounded-full px-1.5 py-1.5 2xl:bg-white 2xl:text-black 2xl:text-[3rem]" />
								</span>
								<p className="px-2 py-1 rounded-full  2xl:text-[1.2rem] 2xl:px-3 2xl:text-white 2xl:bg-gray-500">
									02/03. Scroll down
								</p>
							</span>
						</div>

						<div className="hidden 2xl:flex 2xl:flex-col 2xl:mt-[-3rem]">
							<div>
								<span>
									<p className="2xl:text-yellow-600">Defi horizons</p>
								</span>
								<div className="2xl:flex 2xl:items-center">
									<span>
										<GoDash className="2xl:font-bold 2xl:text-white 2xl:text-[2rem]" />
									</span>
									<span>
										<GoDash className="2xl:font-bold 2xl:text-[2rem]" />
									</span>
									<span>
										<GoDash className="2xl:font-bold 2xl:text-[2rem]" />
									</span>
									<span>
										<GoDash className="2xl:font-bold 2xl:text-[2rem]" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center gap-4 mt-[5rem] 2xl:w-[60rem] 2xl:flex 2xl:justify-around 2xl:items-start 2xl:ml-[20rem]">
				<img
					src="/images/box-light.svg"
					alt="Mask Group 1"
					className="w-10 h-16 2xl:w-[6rem] 2xl:text-2xl"
				/>
				<img
					src="/images/volkswagen-light.svg"
					alt="Mask Group 2"
					className="w-10 h-16 2xl:w-[6rem] 2xl:text-2xl"
				/>
				<img
					src="/images/nasdaq-light.svg"
					alt="Mask Group 3"
					className="w-18 h-16 2xl:w-[6rem] 2xl:text-2xl"
				/>
				<img
					src="/images/eventbrite-light.svg"
					alt="Mask Group 4"
					className="w-18 h-16 2xl:w-[6rem] 2xl:text-2xl"
				/>
				<img
					src="/images/Mask Group (4).png"
					alt="Mask Group 4"
					className="w-13 h-16 2xl:w-[6rem] 2xl:text-2xl"
				/>

				<img
					src="/images/nasdaq-light.svg"
					alt="Mask Group 3"
					className="w-18 h-16 2xl:w-[6rem] 2xl:text-3xl hidden 2xl:block"
				/>

				<img
					src="/images/volkswagen-light.svg"
					alt="Mask Group 2"
					className="w-10 h-16 2xl:w-[6rem] 2xl:text-3xl hidden 2xl:block"
				/>
			</div>
		</>
	);
}

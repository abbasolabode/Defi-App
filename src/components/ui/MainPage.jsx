import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { BsFlower3 } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import { GiMoon } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCircleArrowDown } from "react-icons/fa6";
import { RxDash } from "react-icons/rx";

export default function MainPage() {
	const style = {
		backgroundImage: "url('/images/abstract.jpg')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "70rem",
		borderRadius: "2rem",
		display: "flex",
	};

	return (
		<>
			<div style={style} className="w-[70rem] min-h-[60rem] rounded-xl">
				<div className="w-[70rem] min-h-[60rem] ">
					<div className="flex items-center min-h-[20rem] justify-between w-[70rem] ml-[4rem]">
						<div className="min-h-[2rem] flex items-start flex-col text-white mt-[15rem]">
							<IoMdArrowDropup className="font-semibold text-[2.8rem] rounded-full border-bg-[#2D2D2D] bg-[#2D2D2D]" />
							<span className=" text-[2rem] w-[8rem] flex flex-col items-center]">
								<p className="self-end text-[1.5rem] font-medium">
									<span className="text-[2.6rem]">.</span> Cortex
								</p>
								<p className="text-[1rem] text-center ml-8 font-extralight">
									20.945
								</p>
							</span>
						</div>

						<div className="w-[20rem] min-h-[17rem] flex flex-col justify-between text-white mt-[7rem]">
							<MdOutlineArrowRight className="text-[2.8rem] rounded-full border-bg-[#2D2D2D] bg-gray-700 ml-[7rem] " />
							<Link
								to="/"
								className="flex justify-around items-center gap-2 rounded-full px-7 py-1 bg-stone-700 mt-[4rem]"
							>
								<GiMoon className="mr-2" />
								Unlock Your Assets Spark!
								<span>
									<IoMdArrowForward className="font-semibold" />
								</span>
							</Link>
						</div>

						<div className="w-[2rem] min-h-[17rem] flex flex-col justify-center">
							<MdOutlineStarBorder className="font-semibold text-[2.8rem] ml-[5rem] rounded-full border-bg-[#2D2D2D] bg-gray-800" />
							<span className="text-white w-[1rem] ">
								<p className="self-end text-[1.5rem] font-medium whitespace-nowrap">
									<span className="text-[2.6rem]">.</span> Quant
								</p>
								<p className="text-[1rem] text-center font-extralight ml-5">
									2.945
								</p>
							</span>
						</div>
					</div>
					<div className="mt-[5rem] text-center min-h-[4rem]">
						<p className="text-[4.5rem] font-semibold text-white ml-[13rem] min-h-[3rem] whitespace-nowrap">
							One-click for Assets Defense
						</p>
						<p className="text-[1.2rem] font-semibold text-white ml-[13rem] min-h-[3rem] whitespace-nowrap tracking-[0.02rem]">
							Dive into the art assets, where innovative blockchain technology
							meets financial expertise
						</p>
						<span className="w-[82rem] flex justify-center items-center gap-2 mt-10">
							<div className="">
								<Link
									to="/"
									className="bg-[#2D2D2D] flex items-center rounded-full text-white px-3 w-[10rem] min-h-[3.5rem] flex justify-center items-center text-[1.2rem] font-semibold gap-2"
								>
									Open App
									<GoArrowUpRight className="text-[1.2rem] font-bold" />
								</Link>
							</div>
							<Link className="bg-white flex items-center bg-white flex items-center  rounded-full px-5 py-3 w-[13.5rem] min-h-[3.5rem] flex justify-center items-center text-[1.2rem] font-semibold gap-2 text-[#2D2D2D]">
								Discover More
							</Link>
						</span>
					</div>
					<div className="min-h-[30rem]">
						<div className="w-[80rem] text-white flex justify-between">
							<div className="w-[15rem] flex flex-col items-center">
								<span>
									<p className="self-end text-[1.5rem] font-medium">
										<span className="text-[2rem] w-[5rem] min-h-[2rem] px-2">
											.
										</span>
										Aelf
									</p>
									<p className="text-[1rem] text-center ml-5 font-extralight">
										19.346
									</p>
								</span>
								<BsFlower3 className="font-semibold text-[2.8rem] rounded-full mr-[5.5rem] mt-2 bg-[#2D2D2D]" />
							</div>

							<div className="w-[5rem] flex flex-col items-center">
								<span>
									<p className="self-end text-[1.5rem] font-medium">
										<span>.</span>Meeton
									</p>
									<p className="text-[1rem] text-center text-left  ml-2 font-extralight">
										19.346
									</p>
								</span>
								<IoDiamondOutline className="font-semibold text-[2.8rem] px-2 py-2 mt-2 ml-[7rem] bg-grey-800 border-bg-[#2D2D2D]  rounded-full border-bg-[#2D2D2D] " />
							</div>
						</div>

						<div className="w-[80rem] min-h-[20rem] text-white flex justify-between items-center">
							<div className="flex items-center w-[20rem] ml-[2.5rem] gap-3">
								<FaCircleArrowDown className="text-4xl" />
								<p className="w-[13rem] text-center text-[1.2rem] font-bold border py-1 rounded-full bg-gray-300 opacity-60 ">
									02|03. Scroll down
								</p>
							</div>

							<div className="flex flex-col items-center w-[20rem] ">
								<p className="w-[20rem] text-center text-[1.5rem]">
									Defi horizons
								</p>
								<div className="flex ml-[4rem]">
									<RxDash className=" text-[3.5rem] font-bold" />
									<RxDash className=" text-[3.5rem] font-bold text-black" />
									<RxDash className=" text-[3.5rem] font-bold text-black" />
									<RxDash className=" text-[3.5rem] font-bold text-black" />
								</div>
							</div>
						</div>

						<div className="text-white w-[80rem]">
							<span className="flex items-center gap-7 justify-center  ">
								<img
									src="\Mask Group (1).png"
									className="w-[8rem]"
									alt=""
								/>
								<img
									src="\Mask Group (2).png"
									className="w-[8rem]"
									alt=""
								/>
								<img
									src="\Mask Group (2).png"
									className="w-[8rem] "
									alt=""
								/>
								<img
									src="\Mask Group (4).png"
									className="w-[6rem] ml-4"
									alt=""
								/>
								<img
									src="\Mask Group (3).png"
									className="w-[8rem] mr-3"
									alt=""
								/>
								<img
									src="\Mask Group (4).png"
									className="w-[6rem] mr-7"
									alt=""
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

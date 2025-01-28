import { IoDiamondOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsDiamond } from "react-icons/bs";

export default function Defi() {
    const navigate = useNavigate()
	const bgImage = {
		backgroundImage: "url('/images/bgImage.jpg')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "70rem",
		borderRadius: "2rem",
	};

	return (
		<div className="w-[90rem] flex justify-center mx-auto">
			<div style={bgImage} className="w-[90rem] min-h-[80rem] mt-7 ">
				<div className="w-[90rem] flex  flex-col items-center">
					<h1 className="text-7xl font-semibold text-white mt-5">
						DeFi Wallet
					</h1>
					<p className="text-[1.2rem] mt-3 text-white">
						Exploratory mission with DeFi Horizon & navigating through the vast
						possibilities
					</p>
					<Link className="w-[15rem] px-4 py-4 rounded-full bg-white mt-[3rem] text-[1.2rem] text-center">
						How it works?
					</Link>
				</div>

				<div className="flex">
					<div>
						<div className="w-[55rem] min-h-[10rem] flex justify-between items-center mt-[5rem]">
							<div className="min-h-[10rem] ml-[2rem]">
								<p className="text-[1.2rem] text-white text-yellow-300">
									DeFi Wallet System
								</p>
								<p className="text-[5rem] text-white">+A3.7</p>
							</div>

							<span className="w-[23rem] min-h-[4rem] py-4 px-6 bg-[#2D2D2D] rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl mr-[7rem]">
								<span className="flex justify-between">
									<IoDiamondOutline className="font-semibold w-[5rem] text-[2rem] flex items-center mt-3 rounded-full border-bg-[#2D2D2D] bg-[#2D2D2D]" />
									<span className="">
										<p className="text-[1.5rem] text-white">sent</p>
										<p className="text-white">from 0.938</p>
									</span>

									<span className="text-white">
										<p className="text-yellow-300">0.0004968</p>
										<p className="ml-[3rem]">VAREN</p>
									</span>
								</span>
							</span>
						</div>

						<div className="w-[23rem] min-h-[4rem] py-4 px-4 bg-[#2D2D2D] rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl ml-[18rem]">
							<span className="flex justify-center gap-5">
								<IoDiamondOutline className="font-semibold w-[5rem] text-[2rem] flex items-center mt-3 rounded-full border-bg-[#2D2D2D] bg-[#2D2D2D]" />
								<span className="m">
									<p className="text-[1.5rem] text-white">Received</p>
									<p className="text-white">from 0.938</p>
								</span>

								<span className="text-white">
									<p className="text-yellow-300 ml-5">1.038</p>
									<p className="ml-[1rem]">BANCOR</p>
								</span>
							</span>
						</div>

						<div className="w-[23rem] min-h-[4rem] py-4 px-4 bg-[#2D2D2D] rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl mt-[2rem] ml-[5rem]">
							<span className="flex justify-center gap-5">
								<IoDiamondOutline className="font-semibold w-[5rem] text-[2rem] flex items-center mt-3 rounded-full border-bg-[#2D2D2D] bg-[#2D2D2D]" />
								<span className="">
									<p className="text-[1.5rem] text-white">Sent</p>
									<p className="text-white">from x7360</p>
								</span>

								<span className="text-white">
									<p className="text-yellow-300 ml-5">4.94863</p>
									<p className="ml-[2.8rem]">BNB</p>
								</span>
							</span>
						</div>
					</div>
					<div className="flex justify-end w-[60rem] mt-[4rem] mr-1">
						<img className="w-[60rem] " src="/images/vector.svg" alt="vector" />
					</div>
				</div>
				<div className="w-[90rem] text-white">
					<div className="w-[90rem] min-h-[10rem] text-white flex items-center justify-end  gap-4 ml-[-1rem]">
						<span className=" rounded-full px-3 py-3 min-h-[4rem] w-[4rem] bg-stone-700 bg-[#2D2D2D] mr-[3.8rem]">
							<MdKeyboardArrowUp className="rounded-full w-full text-[2.8rem] rounded-full mr-[5rem]" />
						</span>
						<span className="flex justify-around items-center w-[12rem] px-4 py-4 gap-2 rounded-2xl bg-[#2D2D2D]">
							<BsDiamond className="w-[2rem] text-2xl text-white" />
							<p className="text-[1.4rem] font-semibold">2.7k Assets</p>
						</span>
						<span className="flex justify-around items-center w-[12rem] px-4 py-4 gap-1  rounded-2xl bg-[#2D2D2D]">
							<BsDiamond className="w-[2rem] text-2xl text-white" />
							<p className="text-[1.4rem] font-semibold">Success</p>
						</span>
						<span className="flex justify-around items-center w-[13rem] px-4 py-4 gap-2  rounded-2xl bg-white">
							<BsDiamond className="w-[2rem] text-2xl text-black" />
							<p className="text-[1.4rem] font-semibold text-black">
								Decentralized
							</p>
						</span>
						<span className="flex justify-around items-center w-[14rem] px-4 py-4 gap-2  rounded-2xl bg-[#2D2D2D]">
							<BsDiamond className="w-[2rem] text-2xl text-white" />
							<p className="text-[1.4rem] font-semibold whitespace-nowrap">
								Smart Contract
							</p>
						</span>
					</div>

					<div className="w-[90rem] text-white">
						<div className="w-[90rem] text-white flex items-center justify-center gap-4 ml-[9.5rem] mt-[-1rem]">
							<span className=" rounded-full px-3 py-3 min-h-[4rem] w-[4rem] bg-stone-700 bg-[#2D2D2D] mr-[4rem] mt-[-1rem]">
								<MdKeyboardArrowDown className="w-full text-[2.8rem] rounded-full mr-[5rem]" />
							</span>
							<span className="flex justify-around items-center w-[15rem] px-4 py-4 gap-2  rounded-2xl bg-[#2D2D2D]">
								<BsDiamond className="w-[2rem] text-2xl text-white" />
								<p className="text-[1.4rem] font-semibold">Tokenized Trust</p>
							</span>
							<span className="flex justify-around items-center w-[15rem] gap-2 px-4 py-4 rounded-2xl bg-[#2D2D2D]">
								<BsDiamond className="w-[2rem] text-2xl text-white" />
								<p className="text-[1.4rem] font-semibold">DeFi-Revolution</p>
							</span>
							<span className="flex justify-around items-center w-[15rem] px-4 py-4 gap-2  rounded-2xl bg-[#2D2D2D]">
								<BsDiamond className="w-[2rem] text-2xl text-white" />
								<p className="text-[1.4rem] font-semibold">LiquidityLeaders</p>
							</span>
						</div>
					</div>
				</div>
					
                <button onClick={()=> navigate("/home")} className="text-white  cursor-pointer font-bold ml-[3rem]">back home</button>
			</div>
		</div>
	);
} 

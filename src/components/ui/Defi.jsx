import { Link, useNavigate } from "react-router-dom";
import { PiFlowerTulipThin } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDiamond } from "react-icons/go";

export default function Defi() {
    const navigate = useNavigate()


	return (
		<div className="w-full max-w-[24.375rem] min-h-[55rem] bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-gradient-to-tr from-20% via-gray-700 to-80% bg-gradient-to-bl from-30% via-gray-800 to-70% 2xl:max-w-[96rem] 2xl:min-h-[50rem] overflow-hidden ">
			<div className="w-full max-w-[22.375rem] mx-auto 2xl:max-w-[80rem] 2xl:mt-10 2xl:rounded-2xl">
				<div>
					<div className="text-center w-full max-w-[22.375rem] min-h-[10rem] 2xl:max-w-[80rem]">
						<h1 className="text-2xl text-center mt-3 text-white 2xl:text-center 2xl:text-[2.5rem]">
							DeFi Wallet
						</h1>
						<p className="w-full max-w-[18rem] text-[0.6rem] mx-auto text-white 2xl:max-w-[35rem] 2xl:text-[1rem] 2xl:whitespace-nowrap">
							Exploratory mission with DeFi Horizon & navigating through the
							vast possibilities
						</p>
						<span className="border w-[8rem] bg-white font-medium text-sm rounded-full px-3 py-1 mt-5 mx-auto block">
							<Link to="/">How it works?</Link>
						</span>
					</div>
				</div>

				<div className="w-full max-w-[22.375rem] flex flex-col items-center min-h-[30rem] 2xl:max-w-[80rem] 2xl:flex-row 2xl:justify-start">
					<div className="2xl:w-[20rem] 2xl:mt-[-24rem]">
						<p className="text-yellow-500">DeFi Wallet System</p>
						<h2 className="text-[2rem] text-white 2xl:text-[3rem]">+A3.7</h2>
					</div>
					<div className="2xl:flex 2xl:w-[50rem] 2xl:justify-around 2xl:min-h-[30rem]">
						<div className="flex flex-col gap-2 mt-3 2xl:w-[30rem] 2xl:gap-8">
							<div className="flex items-center py-2 justify-around w-[13rem] rounded-tr-2xl rounded-bl-lg rounded-tl-lg bg-neutral-800 2xl:ml-[8rem]">
								<span className="w-[2rem] min-h-[2rem] border px-1 py-1 rounded-full flex items-center justify-center border-gray-400">
									<PiFlowerTulipThin className="text-white" />
								</span>
								<span className="text-white">
									<p>Sent</p>
									<p className="text-[0.6rem]">from 0.933</p>
								</span>
								<span className="flex flex-col">
									<p className="text-[0.9rem] text-yellow-600">0.0004968</p>
									<p className="text-[0.7rem] ml-[2rem] mt-[-0.5rem] text-white">
										VAREN
									</p>
								</span>
							</div>

							<div className="flex items-center py-2 justify-around w-[13rem] rounded-tr-2xl rounded-bl-lg rounded-tl-lg bg-neutral-800 2xl:ml-[3rem]">
								<span className="w-[2rem] min-h-[2rem] border px-1 py-1 rounded-full flex items-center justify-center border-gray-400">
									<PiFlowerTulipThin className="text-white" />
								</span>
								<span>
									<p className="text-white">Received</p>
									<p className="text-[0.6rem] text-white">from 0.8.847</p>
								</span>
								<span className="flex flex-col">
									<p className="text-[0.9rem] text-yellow-600">1.033</p>
									<p className="text-[0.7rem] mt-[-0.3rem] text-white">
										BANCOR
									</p>
								</span>
							</div>

							<div className="flex items-center py-2 justify-around w-[13rem] rounded-tr-2xl rounded-bl-lg rounded-tl-lg bg-neutral-800">
								<span className="w-[2rem] min-h-[2rem] border px-1 py-1 rounded-full flex items-center justify-center border-gray-400">
									<PiFlowerTulipThin className="text-white" />
								</span>
								<span>
									<p className="text-white">Sent</p>
									<p className="text-[0.6rem] text-white">from x7360</p>
								</span>
								<span className="flex flex-col">
									<p className="text-[0.9rem] text-yellow-600">4.94863</p>
									<p className="text-[0.7rem] ml-[2rem] mt-[-0.3rem] text-white">
										BNB
									</p>
								</span>
							</div>
						</div>

						<div className="flex 2xl">
							<div className="2xl:mt-[17rem]">
								<div className="2xl:text-gray-200"></div>
								<p className="hidden 2xl:block 2xl:text-white 2xl:w-[4rem] 2xl:flex 2xl:text-[0.7rem] 2xl:rounded-lg 2xl:justify-center 2xl:bg-neutral-900">
									Done
								</p>
							</div>

							<div className="w-[15rem] mt-6 2xl:w-[20rem]">
								<img src="/images/vector.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full max-w-[22.375rem] mx-auto mt-[4rem] 2xl:flex-row 2xl:w-[80rem]">
				<div className="hidden 2xl:block">
					<div className="text-white 2xl:relative 2xl:top-[-7rem] 2xl:right-[-6rem] 2xl:w-[7rem] 2xl:flex 2xl:justify-center 2xl:rounded-lg 2xl:bg-neutral-800">
						pending
					</div>
					<div className="text-white 2xl:relative 2xl:top-[-6rem] 2xl:right-[7rem]  2xl:w-[7rem] 2xl:flex 2xl:justify-center 2xl:rounded-lg 2xl:bg-neutral-800">
						pending
					</div>

					<div>
						<button className="px-2 py-2 rounded-full bg-neutral-500 text-white 2xl:relative 2xl:top-[-10rem] 2xl:right-[-16rem] ">
							<MdKeyboardArrowUp />
						</button>
					</div>
					<div>
						<button className="px-2 py-2 rounded-full bg-neutral-500 text-white 2xl:relative 2xl:top-[-9rem] 2xl:right-[-16rem]">
							<MdKeyboardArrowDown />
						</button>
					</div>
				</div>

				<div className="w-full max-w-[22.375rem] flex flex-wrap justify-center gap-2 2xl:w-[80rem] 2xl:relative 2xl:top-[-14rem] 2xl:right-[-23rem] 2xl:grid 2xl:grid-cols-4 2xl:gap-3">
					<div className="w-[5rem] min-h-[2rem] 2xl:w-auto">
						<div className="flex items-center bg-neutral-900 min-h-[2rem] gap-1 text-white rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">2.7k Assets</p>
						</div>
					</div>
					<div className="w-[5rem]  2xl:w-[5rem] ">
						<div className="flex items-center min-h-[2rem] gap-2 text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">Success</p>
						</div>
					</div>

					<div className="w-[6rem] 2xl:w-[7rem]">
						<div className="flex items-center min-h-[2rem] gap-1 text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">Decentralized</p>
						</div>
					</div>
					<div className="w-[6.5rem]  2xl:w-[6.8rem] 2xl:ml-7">
						<div className="flex items-center min-h-[2rem] gap-1 text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">Smart contract</p>
						</div>
					</div>
					<div className="w-[7rem] 2xl:w-[7.3rem] ">
						<div className="flex items-center min-h-[2rem] gap-1 text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">Tokenized Trust</p>
						</div>
					</div>
					<div className="w-[7rem] 2xl:w-[7.5rem] 2xl:ml-8 ">
						<div className="flex items-center min-h-[2rem] gap-1 text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">DeFi - Revolution</p>
						</div>
					</div>
					<div className="w-[7rem] 2xl:w-[7.2rem] 2xl:ml-17">
						<div className="flex items-center min-h-[2rem] text-white bg-neutral-900 rounded-lg">
							<span className="ml-1 text-xs">
								<GoDiamond />
							</span>
							<p className="text-[0.7rem]">LiquidityLeaders</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center gap-2 w-full max-w-[22rem] mt-6 items-center mb-5 2xl:hidden">
					<div>
						<button className="px-2 py-2 rounded-full bg-neutral-500 text-white">
							<MdKeyboardArrowUp />
						</button>
					</div>
					<div>
						<button className="px-2 py-2 rounded-full bg-neutral-500 text-white">
							<MdKeyboardArrowDown />
						</button>
					</div>
				</div>
			</div>

          <div className=" font-bold mb-[2rem]">
            <button onClick={()=> navigate("/")} className="text-white">Back home</button>
          </div>
		</div>
	);
}

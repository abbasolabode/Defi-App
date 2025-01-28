import { useNavigate } from "react-router-dom";

export default function Assets() {
 const navigate =  useNavigate()
	return (
		<div className="w-[90rem] min-h-[90rem] mx-auto bg-black rounded-3xl mt-[5rem]">
			<div className="border w-[90rem] min-h-[50rem]  ">
				<div className="w-[90rem] text-center">
					<h1 className=" text-[3.5rem] font-semibold text-white">
						Meet Marvellous Insights
					</h1>
					<p className="text-[1rem]  text-gray-500 ">
						Save your team's precious. Config replaces the lengthy process of
						manual BOM
					</p>
				</div>

				<div className="w-[70rem] flex min-h-[35rem] mx-auto mt-[4rem]">
					<div className="w-2/2 rounded-[2.5rem] text-white bg-[#2D2D2D] mr-5 flex flex-col justify-center px-7 py-3">
						<div className="">
							<div>
								<div className=" self-start">
									<h2 className="text-[4rem]">98.2%</h2>
									<span>
										Spots. <span className="text-yellow-200">Worldwide</span>
									</span>
								</div>
								<img src="" alt="" />
							</div>
							<div className=" w-[43rem] flex px-2 mt-[3rem] gap-3">
								<span className="bg-gray-600 rounded-full flex items-center gap-4 font-medium text-center w-[20rem]">
									<span className="bg-gray-500  rounded-full px-3.5 py-1.5">
										K
									</span>
									<p>Opens Spots api dev</p>
								</span>

								<span className="bg-gray-600  font-medium rounded-full  flex items-center gap-4 text-center w-[20rem]">
									<span className="bg-gray-500  rounded-full px-4 py-1.5">
										i
									</span>
									<p>Assign issue to exports</p>
								</span>

								<span className="rounded-full bg-gray-600  flex items-center gap-4 font--medium  text-center w-[16rem]">
									<span className="bg-gray-500  rounded-full px-3 py-1.5">
										A
									</span>
									<p>Assign new</p>
								</span>
							</div>
						</div>

						<div className="text-center">
							<h2 className="text-3xl font-semibold mt-[3rem] mr-2 tracking-[0.1rem]">
								Success Transactions
							</h2>
							<p className="text-center text-[1.2rem] w-[29rem] ml-[8rem] mt-6 text-gray-500">
								Innovative blockchain technology meets financial expertise to
								empower your investment journey.
							</p>
						</div>
					</div>
					<div className="w-1/3 rounded-[2.5rem] flex flex-col  bg-[#2D2D2D] text-white">
						<div>
							<img src="/images/graph.png" alt="statistics" />
						</div>
						<h2 className="text-[2rem] text-center mt-4">
							Liquidity Labyrinth
						</h2>
						<p className="w-[18rem] font-medium text-center ml-[2.5rem] mt-4 text-gray-500">
							Liquidity Labyrinth turn, where each turn reveals new
							opportunities
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-6 px-2 min-h-[36rem] mx-auto ">
				<div className="text-white w-1/4 rounded-[3rem] bg-[#2D2D2D] ">
					<div className="flex items-center gap-5 px-2 mt-[4rem] ">
						<div className="w-2/3 min-h-[18rem] ml-[1.8rem] shadow-2xl bg-stone-700  text-center rounded-3xl flex flex-col justify-center">
							<span className="text-[1.5rem]">
								<span className="text-yellow-400 border-4"></span>Financial
							</span>
							<span className="text-[1.7rem] text-yellow-500">Growth</span>
							<span className="text-[3.7rem]">19.2</span>
							<span className="text-[1.6rem] text-gray-400 mr-10">$2.7m</span>
						</div>

						<div className="text-center min-h-[18rem] shadow-2xl bg-stone-700 rounded-3xl flex flex-col justify-center mr-[rem]">
							<span className="text-[1.5rem]">
								<span className="text-green-200 border-4"></span> Financial
							</span>
							<span className="text-[1.7rem] text-yellow-500">Growth</span>
							<span className="text-[3.7rem]">24</span>
							<span className="text-[1.6rem] text-gray-400 mr-10">$3.2m</span>
						</div>
					</div>
					<h3 className="text-[2rem] text-center mt-4">
						Your Palette Financial Opportunities
					</h3>
					<p className="w-[16rem] text-center ml-[3rem] text-[1.2rem] mt-3 text-gray-400">
						Watch your assets grow in a thriving ecosystem to easy
					</p>
				</div>

				<div className="text-white w-2/4 rounded-[3rem] px-10 py-3 mr-5 bg-[#2D2D2D] ">
					<div className="text-center mt-7">
						<h2 className="font-semibold text-[1.8rem] ">
							DeFi Space . Opportunities
						</h2>
						<p className="w-[24rem] text-[1.3rem] ml-[9rem] mt-5 text-gray-400">
							Where each stroke is a smart contract and every color is a chance
							to build a portfolio
						</p>
					</div>
					<div className="flex justify-center items-center">
						<img
							className="w-[20rem] "
							src="/images/statistics.png"
							alt=""
						/>
					</div>
					<span className="min-h-[5rem] text-center flex justify-center gap-2 items-center">
						<span className="border w-8 text-center font-bold"></span>
						<span className="border w-8 text-gray-700  font-bold"></span>
						<span className="border w-8 text-gray-500 font-bold"></span>
						<span className="border w-8 text-gray-500 font-bold"></span>
					</span>
				</div>
			</div>
            <button onClick={()=> navigate("/home")} className="text-white  cursor-pointer font-bold ml-[3rem]">back home</button>
		</div>
	);
}  

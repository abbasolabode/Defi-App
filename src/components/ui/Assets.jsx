import { MdArrowOutward } from "react-icons/md";  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import { useNavigate } from "react-router-dom";  

export default function Assets() {  
  const navigate = useNavigate();  

  const settings = {  
    dots: false,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 2,  
    slidesToScroll: 2,  
    arrows: false, // Disable left and right navigation arrows  
    responsive: [  
      {  
        breakpoint: 390,  
        settings: {  
          slidesToShow: 2,  
          slidesToScroll: 2,  
          arrows: false, // Ensure arrows are disabled on smaller screens  
        },  
      },  
      {  
        breakpoint: 428,  
        settings: {  
          slidesToShow: 3,  
          slidesToScroll: 3,  
          arrows: false, // Ensure arrows are disabled on smaller screens  
        },  
      },  
      {  
        breakpoint: 1536,  
        settings: {  
          slidesToShow: 5,  
          slidesToScroll: 5,  
          arrows: false, // Ensure arrows are disabled on larger screens  
        },  
      },  
    ],  
  };  

  return (
		<div className="w-[20rem] mx-auto 2xl:bg-black 2xl:w-[96rem] 2xl:min-h-[72rem] 2xl:pt-[1rem] bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-gradient-to-tr from-20% via-gray-700 to-80% bg-gradient-to-bl from-30% via-gray-800 to-70%">
			<div className="w-[16rem] ml-[2rem] 2xl:w-[90rem] 2xl:my-[3rem] 2xl:min-h-[65rem] 2xl:mt-[2rem] 2xl:rounded-3xl 2xl:bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-gradient-to-tr from-20% via-gray-700 to-80% bg-gradient-to-bl from-30% via-gray-800 to-70%">
				<div className="2xl:w-[80rem]">
					<h1 className="text-[1.4rem] text-center text-white font-semibold whitespace-nowrap mr-5 2xl:text-[3rem]">
						Meet Marvellous Insights
					</h1>
					<p className="text-[0.9rem] text-center ml-2 text-gray-300 w-[15rem] 2xl:w-[79rem]">
						Save your team's precious time. Config replaces the lengthy process
						of manual BOM.
					</p>
				</div>
				<div className="flex w-[16rem] flex-col items-center mt-4 2xl:w-[90rem]">
					<div className="2xl:w-[90rem] 2xl:min-h-[30rem] 2xl:flex 2xl:justify-center 2xl:gap-5 2xl:items-center">
						<div className="rounded-3xl min-h-[22rem] bg-neutral-700 text-white 2xl:w-[30rem] 2xl:min-h-[25rem]">
							<div className="flex items-center gap-8">
								<div className="w-2/3 ml-5">
									<h2 className="text-[2rem] flex items-center gap-2 2xl:text-[3rem] 2xl:ml-[2rem]">
										98.2%
										<span className="text-[0.5rem] 2xl:mt-[2rem] 2xl:text-[1rem]">
											<MdArrowOutward />
										</span>
									</h2>
									<p className="text-xs 2xl:ml-[2rem] 2xl:text-[1.2rem]">
										Spots . <span className="text-yellow-600">Worldwide</span>
									</p>
								</div>
								<div className="w-3/5 2xl:w-[25rem]">
									<img src="/images/xing-svgrepo-com.svg" alt="" />
								</div>
							</div>

							<div>
								<div className="text-center flex flex-col gap-2 ml-4 2xl:flex-row 2xl:mt-3">
									<div className="flex w-[7.3rem] whitespace-nowrap text-xs gap-1 rounded-full bg-neutral-500 text-white">
										<div className="rounded-full px-0.5 w-4 h-4 text-center py-0.5 text-[0.5rem] bg-gray-400">
											K
										</div>
										<p className="text-[0.6rem]">Opens Sports API dev</p>
									</div>

									<div className="flex w-[7.7rem] whitespace-nowrap text-xs gap-1 rounded-full bg-neutral-500 text-white">
										<div className="rounded-full px-0.5 w-4 h-4 text-center py-0.5 text-[0.5rem] bg-gray-400">
											I
										</div>
										<p className="text-[0.6rem]">Assign issue to exports</p>
									</div>

									<div className="flex w-[5rem] whitespace-nowrap text-xs gap-1 rounded-full bg-neutral-500 text-white">
										<div className="rounded-full px-0.5 w-4 h-4 text-center py-0.5 text-[0.5rem] bg-gray-400">
											A
										</div>
										<p className="text-[0.6rem]">Assign new</p>
									</div>
									<div className="flex w-[7.7rem] whitespace-nowrap text-xs gap-1 rounded-full bg-neutral-500 text-white">
										<div className="rounded-full px-0.5 w-4 h-4 text-center py-0.5 text-[0.5rem] bg-gray-400">
											S
										</div>
										<p className="text-[0.6rem]">Opens Sports API dev</p>
									</div>
								</div>

								<div>
									<h2 className="text-[1.3rem] text-center mt-2 2xl:mt-5 2xl:text-[1.4rem]">
										Success Transactions
									</h2>
									<p className="w-[17rem] text-center text-[0.7rem] ml-[2rem] text-gray-400 2xl:text-[1rem] 2xl:w-[23rem] 2xl:ml-[6rem]">
										Innovative blockchain technology meets financial expertise
										to empower your investment journey.
									</p>
								</div>
							</div>
						</div>

						<div className="rounded-3xl min-h-[20rem] mt-3 flex flex-col items-center bg-neutral-700 2xl:min-h-[25rem]">
							<div className="w-[14rem] 2xl:mt-[2rem]">
								<img src="/images/graph.png" alt="" />
							</div>

							<div>
								<h2 className="text-center text-[1.4rem] text-white 2xl:text-[1.4rem]">
									Liquidity Labyrinth
								</h2>
								<p className="text-center w-[17rem] text-[0.7rem] text-gray-400 2xl:text-[1rem] 2xl:mt-4 2xl:w-[16rem]">
									Liquidity Labyrinth, where each team reveals new
									opportunities.
								</p>
							</div>
						</div>
					</div>

					<div className="2xl:flex 2xl:items-center 2xl:gap-5 2xl:mt-[-2rem]">
						<div className="rounded-3xl min-h-[22rem] w-[14rem] bg-neutral-700 mt-5 2xl:min-h-[25rem] ">
							<Slider {...settings}>
								<div className="min-h-[8rem] w-[5.5rem] text-center rounded-2xl bg-zinc-500 mx-2 mt-5 2xl:mt-9">
									<div className="text-sm flex justify-center items-center gap-1 text-white">
										<div className="min-h-[1rem] border-2 text-yellow-400"></div>
										Financial
									</div>
									<p className="text-yellow-600">Growth</p>
									<p className="text-[2rem]">19.2</p>
									<p className="font-light text-gray-300 mr-5">$2.7m</p>
								</div>

								<div className="min-h-[8rem] w-[5.5rem] text-center rounded-2xl bg-zinc-500 mx-2 mt-5 2xl:mt-9">
									<div className="text-sm flex justify-center items-center gap-1 text-white">
										<div className="min-h-[1rem] border-2 text-gray-600 "></div>
										Financial
									</div>
									<p className="text-gray-600">Growth</p>
									<p className="text-[2rem]">24.7</p>
									<p className="font-light text-gray-300 mr-5">$2.7m</p>
								</div>

								<div className="min-h-[8rem] w-[5.5rem] text-center rounded-2xl bg-zinc-500 mx-2 mt-5 2xl:mt-9">
									<div className="text-sm flex justify-center items-center gap-1 text-white">
										<div className="min-h-[1rem] border-2 text-blue-200"></div>
										Financial
									</div>
									<p className="text-blue-200">Growth</p>
									<p className="text-[2rem]">24</p>
									<p className="font-light text-gray-300 mr-5">$3.2m</p>
								</div>
							</Slider>

							<div className="text-[1.1rem] w-[15rem]">
								<h2 className="text-[1.4rem] text-center w-[14rem] text-white mt-4 2xl:mt-10">
									Your Palette Financial Opportunities
								</h2>
								<p className="w-[13rem] ml-2 text-center text-gray-400 2xl:w-[13rem] 2xl:text-[1rem] 2xl:text-center ">
									Watch your assets grow in a thriving ecosystem to easy.
								</p>
							</div>
						</div>

						<div className="mt-5 rounded-3xl min-h-[20rem] bg-neutral-500 text-white 2xl:w-[30rem] 2xl:min-h-[25rem] 2xl:mx-auto 2xl:flex 2xl:flex-col 2xl:items-center">
							<div>
								<h2 className="text-[1.2rem] text-center mt-5  2xl:w-[19rem] 2xl:text-[1.6rem]">
									DeFiSpace. Opportunities
								</h2>
								<p className="text-xs w-[15rem] text-center 2xl:w-[19.6rem] 2xl:flex 2xl:justify-center 2xl:text-[1rem]  2xl:mr-[2rem]">
									Where each stroke is a smart contract and every color is a
									chance to build a portfolio.
								</p>
							</div>
							<div>
								<img
									className="w-[15rem] ml-[2rem]"
									src="/images/statistics.png"
									alt=""
								/>
							</div>
							<span className="flex gap-2 items-center mt-6 justify-center">
								<span className="text-white border-2 w-[1.5rem]"></span>
								<span className="text-gray-700 border-2 w-[1.5rem]"></span>
								<span className="text-gray-700 border-2 w-[1.5rem]"></span>
								<span className="text-gray-700 border-2 w-[1.5rem]"></span>
							</span>
							<button onClick={() => navigate("/")}>Back home</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);  
}
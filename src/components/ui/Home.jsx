import Navbar from "./Navbar";
import MainPage from "./MainPage";


const background = {
	backgroundImage: "url('/images/abstract.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	width: "100%",
	height: "90rem", // Updated height to 70rem
};

export default function Home() {
	return (
		<div
			className="w-[24.375rem] min-h-[40rem] 2xl:w-[96rem] 2xl:h-[90rem] bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-gradient-to-tr from-20% via-gray-700 to-80% bg-gradient-to-bl from-30% via-gray-800 to-70% "

		>
			<Navbar />
			<MainPage />
		</div>
	);
}

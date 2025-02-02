import Navbar from "./Navbar";
import MainPage from "./MainPage";


/* const background = {
	backgroundImage: "url('/images/abstract.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	width: "100%",
	height: "90rem", // Updated height to 70rem
};
 */
export default function Home() {
	return (
		<div className="w-[24.375rem] min-h-[40rem] 2xl:w-[96rem] 2xl:h-[85rem] bg-black 2xl:bg-black">
			<Navbar />
			<MainPage />
		</div>
	);
}

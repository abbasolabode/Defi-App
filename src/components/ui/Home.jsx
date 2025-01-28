import Header from "./Header";
import MainPage from "./MainPage";

export default function Home() {
  return (
		<div className="w-[90rem] bg-black min-h-[90rem] mx-auto mt-[5rem]">
			<Header />

			<div className="flex flex-col justify-center rounded-3xl px-7 min-h-[70rem]">
				<MainPage />
			</div>
		</div>
	);
}

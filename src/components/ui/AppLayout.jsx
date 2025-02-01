import { Outlet } from "react-router-dom";



export default function AppLayout() {
  return (
		<div className="w-[24.375rem] 2xl:w-[96rem] ">
			<Outlet />
			
		</div>
	);
}

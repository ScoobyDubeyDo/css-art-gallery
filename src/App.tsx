import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { ArtList } from "./ArtWorks";

export default function App() {
	return (
		<div className="h-screen App bg-slate-800">
			<Routes>
				{/* <Route path="*" element={<FourOFour />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				{ArtList.map(({ path, Element, id }) => {
					return <Route key={id} path={path} element={<Element />} />;
				})}
			</Routes>
		</div>
	);
}

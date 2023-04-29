import { ReactNode } from "react";

export const Gallery = ({ children }: { children: ReactNode }) => {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,20rem)] gap-y-5 gap-x-5 justify-center justify-items-center mx-auto my-0 p-10">
			{children}
		</div>
	);
};

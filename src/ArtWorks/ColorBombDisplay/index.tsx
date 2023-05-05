import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const colors = [
	"#FFCE2E",
	"#FB685A",
	"#F51062",
	"#4526DB",
	"#0093D9",
	"#00E9A8"
] as const;

type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5;

export const ColorBombDisplay = () => {
	const [selectedCircleColorIndex, setSelectedCircleColorIndex] =
		useState<ColorIndex>(1);

	const [selectedBgColor, setSelectedBgColor] = useState<
		(typeof colors)[number]
	>(colors[0]);

	const [circles, setCircles] = useState<
		{
			x: number;
			y: number;
			color: string;
			id: string;
		}[]
	>([]);

	const circlesContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (circlesContainerRef.current) {
			const observer = new MutationObserver((mutationsList) => {
				for (const mutation of mutationsList) {
					if (
						mutation.type === "childList" &&
						mutation.addedNodes.length > 0
					) {
						const addedNode = mutation.addedNodes[0];
						if (addedNode instanceof HTMLSpanElement) {
							setSelectedCircleColorIndex(
								(prev) =>
									(prev < colors.length - 1
										? prev + 1
										: 0) as ColorIndex
							);
							const intervalId = setInterval(() => {
								addedNode.style.height = `${
									parseFloat(addedNode.style.height) + 10
								}px`;
								addedNode.style.width = `${
									parseFloat(addedNode.style.width) + 10
								}px`;
							}, 10);
							setTimeout(() => {
								setSelectedBgColor(
									colors[selectedCircleColorIndex]
								);
							}, 3000);
							setTimeout(() => {
								clearInterval(intervalId);
								addedNode.remove();
							}, 3500);
						}
					}
				}
			});

			observer.observe(circlesContainerRef.current, { childList: true });

			return () => {
				observer.disconnect();
			};
		}
	}, [circlesContainerRef, selectedCircleColorIndex]);

	const handleClick = ({ clientX, clientY }: React.MouseEvent) => {
		setCircles((prev) => {
			return [
				...prev,
				{
					x: clientX,
					y: clientY,
					color: colors[selectedCircleColorIndex],
					id: nanoid()
				}
			];
		});
	};

	return (
		<div
			ref={circlesContainerRef}
			style={{
				backgroundColor: selectedBgColor
			}}
			onClick={handleClick}
			className="relative flex items-center justify-center h-screen overflow-hidden text-3xl font-extrabold text-center cursor-pointer select-none md:text-9xl text-slate-950"
		>
			<span className="z-10">This can be a good header</span>
			{circles.map(({ color, x, y, id }) => {
				return (
					<span
						key={id}
						style={{
							top: `${y}px`,
							left: `${x}px`,
							backgroundColor: color,
							height: "30px",
							width: "30px"
						}}
						id={id}
						className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
					/>
				);
			})}
		</div>
	);
};
/*
Copied from 👇🏻
https://humandeluxe.com/
https://www.awwwards.com/sites/human-deluxe-design-studio
*/

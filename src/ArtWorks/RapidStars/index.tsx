import { useState } from "react";

const numberOfStars = new Array(50).fill(null);

export const RapidStars = () => {
	const [durationFactor, setDurationFactor] = useState<1 | 10>(10);

	const handleBoxMouseDown = () => {
		setDurationFactor(1);
	};

	const handleBoxMouseUp = () => {
		setDurationFactor(10);
	};

	return (
		<div
			onMouseDown={handleBoxMouseDown}
			onMouseUp={handleBoxMouseUp}
			onTouchStart={handleBoxMouseDown}
			onTouchEnd={handleBoxMouseUp}
			className="relative h-full cursor-pointer bg-gray-950 overflow-clip"
		>
			<div
				className={`absolute animate-sprint w-20 h-20 md:w-32 md:h-32 rounded-full bg-slate-400 -right-20 top-2/3 translate-x-4 ${
					durationFactor === 10 ? "blur-3xl" : "blur-sm"
				}`}
			></div>
			<div className="absolute top-0 z-10 w-full h-full bg-transparent -rotate-6 ">
				{numberOfStars.map((_, id) => {
					const duration = getRandomNumber(1000, 9000);
					const delay = getRandomNumber(10, 500);
					const bottom = getRandomNumber(0, window.innerHeight);
					return (
						<div
							style={{
								filter: `blur(${durationFactor / 5}px)`,
								bottom: `${bottom}px`,
								animationDelay: `${delay}ms`,
								animationDuration: `${
									(duration / durationFactor) * 2
								}ms`
							}}
							key={id}
							className="absolute right-0 w-0.5 h-0.5  translate-x-4 rounded-full will-change-transform bg-slate-50  animate-sprint"
						/>
					);
				})}
			</div>
			<div className="absolute top-0 z-0 w-full h-full bg-transparent">
				{numberOfStars.map((_, id) => {
					const duration = getRandomNumber(1000, 9000);
					const delay = getRandomNumber(10, 500);
					const bottom = getRandomNumber(0, window.innerHeight);
					return (
						<div
							style={{
								filter: `blur(${durationFactor / 6}px)`,
								bottom: `${bottom}px`,
								animationDelay: `${delay}ms`,
								animationDuration: `${
									duration / durationFactor
								}ms`
							}}
							key={id}
							className="absolute right-0 w-1 h-1 translate-x-4 rounded-full will-change-transform bg-slate-50 animate-sprint"
						/>
					);
				})}
			</div>
		</div>
	);
};

function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Inspired from 👇🏻
http://www.because-recollection.com/london-grammar
*/

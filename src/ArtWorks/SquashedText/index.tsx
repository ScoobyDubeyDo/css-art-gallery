const TEXT = "random Title" as const;

export const SquashedText = () => {
	return (
		<div className="flex items-center justify-center h-full bg-gray-700 select-none ">
			<div className="m-0 leading-none text-gray-300 uppercase group text-9xl">
				{TEXT.replaceAll(" ", "_")
					.split("")
					.map((letter, index) => (
						<div
							key={letter + index}
							className="relative inline-block"
						>
							<p
								className={`absolute inline-block text-teal-300 underline duration-150 ease-in-out origin-top scale-y-0 decoration-gray-300 underline-offset-8 group-hover:scale-y-100 ${
									letter === "_" ? "invisible" : ""
								}`}
								style={{
									transitionDelay: `${(index + 1) * 2}0ms`
								}}
							>
								{letter}
							</p>
							<p
								className={`inline-block duration-150 ease-in-out origin-bottom decoration-teal-300 overline group-hover:scale-y-0 ${
									letter === "_" ? "invisible" : ""
								}`}
								style={{
									transitionDelay: `${(index + 1) * 2}0ms`
								}}
							>
								{letter}
							</p>
						</div>
					))}
			</div>
		</div>
	);
};

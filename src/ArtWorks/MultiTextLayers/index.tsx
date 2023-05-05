import { useEffect, useRef, useState } from "react";

// Define the component
export const MultiTextLayers = () => {
	// Initialize state variables
	const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
	const [divCenterCoordinates, setDivCenterCoordinates] = useState({
		x: 0,
		y: 0
	});

	// Create a reference to the div element
	const divRef = useRef<HTMLDivElement>(null);

	// Use useEffect to get the center coordinates of the div
	useEffect(() => {
		if (divRef.current) {
			const div = divRef.current;
			// Calculate the center coordinates of the div
			const centerX = div.offsetLeft + div.offsetWidth / 2;
			const centerY = div.offsetTop + div.offsetHeight / 2;
			// Set the center coordinates in state
			setDivCenterCoordinates({
				x: centerX,
				y: centerY
			});
		}
	}, []);

	// Handle mouse move events to update the mouse coordinates
	const handleMouseMove = (e: React.MouseEvent) => {
		// Get the width and height of the div
		const divWidth = divRef.current?.offsetWidth || 1;
		const divHeight = divRef.current?.offsetHeight || 1;
		// Set the scaling factor for the mouse coordinates
		const scaleX = 1.5;
		const scaleY = 1.5;

		// Calculate the mouse coordinates based on the position of the cursor
		// relative to the center of the div and the scaling factors
		setMouseCoordinates({
			x: ((e.clientX - divCenterCoordinates.x) / divWidth) * scaleX,
			y: ((e.clientY - divCenterCoordinates.y) / divHeight) * scaleY
		});
	};

	// Render the component
	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			style={{
				// Set the text shadow based on the mouse coordinates
				textShadow: `
                ${mouseCoordinates.x * 8}px ${
					mouseCoordinates.y * 8
				}px 0px #0c0a09,
                ${mouseCoordinates.x * 24}px ${
					mouseCoordinates.y * 24
				}px 0px #e11d48,
                ${mouseCoordinates.x * 36}px ${
					mouseCoordinates.y * 36
				}px 0px #f97316,
                ${mouseCoordinates.x * 48}px ${
					mouseCoordinates.y * 48
				}px 0px #facc15`
			}}
			className="flex items-center justify-center h-full text-4xl uppercase bg-yellow-900 select-none font-gluten md:text-9xl text-neutral-50"
		>
			Some
			<br />
			Text
		</div>
	);
};

/*
Copied from 👇🏻
https://www.malihaabidi.com/
*/

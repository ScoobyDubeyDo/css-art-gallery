import { ColorBombDisplay } from "./ColorBombDisplay";
import { MultiTextLayers } from "./MultiTextLayers";
import { RapidStars } from "./RapidStars";

import { nanoid } from "nanoid";
export const ArtList = [
	{
		id: nanoid(),
		name: "Color Bomb Display",
		imgUrl: "/colorBomdDisplay.gif",
		path: "color-bomb-display",
		Element: ColorBombDisplay
	},
	{
		id: nanoid(),
		name: "Multi Text Layers",
		imgUrl: "/multiTextLayers.gif",
		path: "multi-text-layers",
		Element: MultiTextLayers
	},
	{
		id: nanoid(),
		name: "Rapid Stars",
		imgUrl: "/rapidStars.gif",
		path: "rapid-stars",
		Element: RapidStars
	}
];

import { ColorBombDisplay } from "./ColorBombDisplay";
import { MultiTextLayers } from "./MultiTextLayers";
import { nanoid } from "nanoid";
export const ArtList = [
	{
		id: nanoid(),
		name: "Color Bomb Display",
		imgUrl: "../../public/colorBomdDisplay.gif",
		path: "/color-bomb-display",
		Element: ColorBombDisplay
	},
	{
		id: nanoid(),
		name: "Multi Text Layers",
		imgUrl: "../../public/multiTextLayers.gif",
		path: "multi-text-layers",
		Element: MultiTextLayers
	}
];
